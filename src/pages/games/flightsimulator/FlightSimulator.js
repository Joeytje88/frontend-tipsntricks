import React, {useEffect, useState} from 'react'
import Navigation from "../../../components/navbar/Navigation";
import "../games.css";
import axios from "axios";
import CommentButton from "../../../components/button/CommentButton";
import InputComment from "../../../components/comments/InputComment";

const FlightSimulator = () => {
    const [post, setPost] = useState(null)
    const [inputComment, setInputComment] = useState("")

    const userid = localStorage.getItem("user_id")
    const handleComment = (e) =>{
        setInputComment(e.target.value)
    }

    const getpost = async ()=> {
        try {
            const result = await axios.get(`http://localhost:8080/api/post/30`)
            setPost(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = async () =>{
        try {
            const placecomment = await axios.post(`http://localhost:8080/api/post/30/comment/${userid}`,{
                text: inputComment,
            }).then(function (response) {
                setInputComment("")
            })
        } catch (error){
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
                <div className="post-picture">
                    <img src={post.picture} alt = "plaatje bericht"/></div>
            </div>}
                    <div className="paragraaf">
                        <p><strong>ontwikkelaar:</strong>Asobo Studio</p>
                        <p><strong>uitgever:</strong>Xbox Game Studios</p>
                        <p><strong>release:</strong> 18 augustus 2020 </p>
                        <p><strong>platforms: pc</strong></p></div>

        {post !== null && <h5 className="topic-text">{post.postText}</h5>}
            <InputComment />
            <textarea
                className="comment-input"
                value={inputComment}
                onChange={handleComment}
                placeholder="schrijf hier je reactie"/> <br/>
            {inputComment === "" && <p  className="error-message">Je moet eerst een reactie schrijven</p>}

            <CommentButton
                click={handleClick}
                disabled ={inputComment <1} />

            {post !== null &&
            post.postComments.map((entry) => {
                return (
                    <div
                        className="comment-section"
                        key={entry.commentid}>
                        <div className="comment-heading">
                            <p>{entry.username}</p>
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

export default FlightSimulator;
