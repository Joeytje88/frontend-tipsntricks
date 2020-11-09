import React, {useEffect, useState} from "react";
import Navigation from "../../../components/navbar/Navigation";
import axios from "axios";
import {Button} from "../../../components/button/Button";
import InputComment from "../../../components/comments/InputComment";
const CoDControls = () => {
    const [post, setPost] = useState (null);
    const [inputComment, setInputComment] = useState ("")

    const userid = localStorage.getItem("user_id");
    const username = localStorage.getItem("username");

    const changeComment = (e)=>{
        setInputComment(e.target.value)
    }

    const handleClick = async () =>{
        try {
            const placecomment = await axios.post(`http://localhost:8080/api/comment/${userid}/post/3`,{
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
            const result = await axios.get(`http://localhost:8080/api/post/3`)
            setPost(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getpost();
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
                    <p className="topic-text">{post.postText}</p>

                    <p>{post.tags}</p></div>}
                    <InputComment/>
                <textarea
                    className="comment-input"
                    value={inputComment}
                    onChange={changeComment}
                    placeholder="schrijf hier je reactie"/> <br/>
                {inputComment === "" && <p  className="error-message">Je moet eerst een reactie schrijven</p>}


                <Button
                    onClick={handleClick}
                    disabled={inputComment === ""}>
                    Plaats je reactie</Button> <br/> <br/>


                {post !== null &&
                    post.postComments.map((entry) => {
                    return (
                        <div
                            className="comment-section">
                            <div className="comment-heading">
                                <p>{username}</p>
                                <h6
                                    className="delete-comment">
                                     {/*onClick={()=> deleteComment(entry.commentid)}>*/}
                                    verwijder</h6>
                                <h6 className="adjust-comment">
                                    pas aan</h6>
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

        </>
    )
}
export default CoDControls;
