import React, {useState, useEffect} from "react";
import Navigation from "../../../components/navbar/Navigation";
import axios from "axios";
import InputComment from "../../../components/comments/TopicComment";
import Days_Gone_tips
    from "../../../assets/afbeeldingen/Days_Gone_tips.png";

const DGTips = () => {
    const [post, setPost] = useState (null);
    const [inputComment, setInputComment] = useState ("")
    const [isLoggedIn, setIsLoggedIn] = useState (false)
    const [inputPicture, setInputPicture] = useState(null)
    const userid = localStorage.getItem("user_id");
    const username = localStorage.getItem("username");
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
            const placecomment = await axios.post(`http://localhost:8080/api/comment/${userid}/post/12`,{
                text: inputComment,
            }).then(function (response) {
                setInputComment("")
                setInputPicture(null)
                getpost();
            })
        } catch (error){
            console.log(error)
        }
    }

    const getpost = async ()=> {
        try {
            const result = await axios.get(`http://localhost:8080/api/post/12`)
            setPost(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteComment = async (commentid) => {
        try {
            const deleteMessage = axios.delete(`http://localhost:8080/api/comment/${commentid}`);
            getpost();
        } catch (error) {
            console.log(error)
        }
    }

    const adjustComment = async (commentid) => {
        try {
            const changeText = axios.put(`http://localhost:8080/api/comment/${commentid}`,{
                text: inputComment,
                image: inputPicture
            });
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        getpost();
        if (username !== null){
            setIsLoggedIn(true)
        }
    }, [])


    return (
        <div className="full-page">
            <Navigation/>

            <div className="topic-page">
                {post !== null && <div className="new-post">
                    <h2 className="posttitle"> {post.postTitle} </h2>
                        <img
                            src={Days_Gone_tips}
                            className="games-img"
                            alt = "plaatje bericht"/>
                    <h5 className="topic-text">{post.header}</h5>
                    <p className="topic-text">{post.postText}</p> </div>}
                {isLoggedIn === false && <p className="warning">je moet ingelogd zijn om te kunnen reageren</p>}
                {isLoggedIn === true && <div className="new-comment">
                    <InputComment />
                    <input
                        type="file"
                        name="picture"
                        className="input-picture"
                        onChange={(e)=> {handleFiles(e)}}/>
                    {inputPicture !== null && <div className="comment-img"><img src={inputPicture} alt="comment-img"/></div> }

                    <textarea
                        className="comment-input"
                        value={inputComment}
                        onChange={changeComment}
                        placeholder="schrijf hier je reactie"/>
                    {inputComment === "" && <p  className="error-message">Je moet eerst een reactie schrijven</p>}

                    <button
                        onClick={handleClick}
                        disabled={inputComment <1}
                        className="comment-button">
                        Plaats je reactie</button>
                </div> }

                {post !== null &&
                post.postComments.map((entry) => {
                    return (
                        <div
                            className="comment-section"
                            key={entry.commentid}>
                            <div className="comment-heading">
                                <p className="username-comment">{entry.user.username}</p>
                                {entry.user.username === username &&
                                <h6
                                    className="delete-comment"
                                    onClick={() => deleteComment(entry.commentid)}>
                                    verwijder</h6>}
                                {entry.user.username === localStorage.username &&
                                <h6
                                    className="adjust-comment"
                                    onClick={()=> (adjustComment(entry.commentid))}>
                                    pas aan</h6>}
                            </div>
                            <div className="comment"
                                 key={entry.text}>
                                {entry.text}
                            </div>
                            <div className="comment-img">
                                {entry.image !== null && <img src={entry.image} alt="plaatje comment"/>}
                            </div>

                        </div>)
                })}


            </div>

        </div>
    )
}

export default DGTips;
