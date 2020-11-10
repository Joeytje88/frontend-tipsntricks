import React, {useEffect, useState} from "react";
import Navigation from "../../../components/navbar/Navigation";
import axios from "axios";
import InputComment from "../../../components/comments/TopicComment";

const F12020Tips = () => {
    const[post, setPost] = useState(null)
    const [inputComment, setInputComment] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState (false)
    const [inputPicture, setInputPicture] = useState(null)
    const username= localStorage.getItem("username")
    const userid = localStorage.getItem("user_id")


    const changeComment = (e)=>{
        setInputComment(e.target.value)
    }

    const handleFiles = async (e) => {

        const file = e.target.files[0]
        const base64 = await convertBase64(file)
        setInputPicture(base64)

    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = (() => {
                resolve(fileReader.result)
            });
            fileReader.onerror = ((error) => {
                reject(error)
            })
        })
    }


    const handleClick = async () =>{
        try {
            const placecomment = await axios.post(`http://localhost:8080/api/post/27/comment/${userid}`,{
                text: inputComment,
            }).then(function (response) {
                setInputComment("")
                getpost();
            })
        } catch (error){
            console.log(error)
        }
    }

    const getpost = async ()=> {
        try {
            const result = await axios.get(`http://localhost:8080/api/post/27`)
            setPost(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getpost();
        if (username !== null){
            setIsLoggedIn(true);
        }
    }, [])


    return (
        <>
            <Navigation/>

            <div className="topic-page">
                {post !== null && <div className="new-post">
                    <h2 className="post-title"> {post.postTitle} </h2>
                    {post.categories !== null &&<h5>{post.categories}</h5>}
                    <div className="post-picture">
                        <img src={post.picture} alt = "plaatje bericht"/></div>
                    <p className="topic-text">{post.postText}</p></div>}
                {isLoggedIn === false && <p className="warning">je moet ingelogd zijn om te kunnen reageren</p>}
                {isLoggedIn !== false && <div className="new-comment">
                    <InputComment/>
                    <input
                        type="file"
                        name="picture"
                        className="input-picture"
                        onChange={(e)=> {handleFiles(e)}}/>
                    {inputPicture !== null && <div className="comment-img"><img src={inputPicture} alt="comment-img"/></div> }
                    {isLoggedIn !== false &&
                    <textarea
                        className="comment-input"
                        value={inputComment}
                        onChange={changeComment}
                        placeholder="schrijf hier je reactie"/>}
                    {inputComment === "" && <p  className="error-message">Je moet eerst een reactie schrijven</p>}

                    <button
                        onClick={handleClick}
                        disabled={inputComment <1}
                        className="comment-button">
                        Plaats je reactie</button>    </div>}



                {/*{post.postComments !== null &&*/}
                {/*        <div*/}
                {/*            className="comment-section">*/}
                {/*            <div className="comment-heading">*/}
                {/*                <p*/}
                {/*                    className="username-comment">{post.postComments.commentid}</p> <p>{username}</p>*/}
                {/*                <h6*/}
                {/*                    className="delete-comment">*/}
                {/*                    /!*onClick={()=> deleteComment(comment.commentid)}>*!/*/}
                {/*                    verwijder</h6>*/}
                {/*                <h6 className="adjust-comment">*/}
                {/*                    pas aan</h6>*/}
                {/*            </div>*/}
                {/*            <div className="comment">*/}
                {/*                {post.postComments.text}*/}
                {/*            </div>*/}
                {/*            /!*<div className="comment-img">*!/*/}
                {/*            /!*    {image !== null && <img src={image} alt="plaatje comment"/>}*!/*/}
                {/*            /!*</div>*!/*/}

                {/*        </div>}*/}

            </div>

        </>
    )
}
export default F12020Tips;
