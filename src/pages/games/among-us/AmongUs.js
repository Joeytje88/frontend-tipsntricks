import React, {useEffect, useState} from 'react'
import Navigation from "../../../components/navbar/Navigation";
import axios from "axios";
import "../topics.css"
import InputComment from "../../../components/comments/InputComment";


const AmongUs = () => {
    const[post, setPost] = useState(null)
    const [inputComment, setInputComment] = useState("")
    const username= localStorage.getItem("username")

    const userid = localStorage.getItem("user_id")

    const handleComment = (e) =>{
        setInputComment(e.target.value)
    }

    const getpost = async ()=> {
        try {
            const result = await axios.get(`http://localhost:8080/api/post/7`)
            setPost(result.data)
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = async () =>{
        try {
            const placecomment = await axios.post(`http://localhost:8080/api/comment/${userid}/post/7`,{
                text: inputComment,
            }).then(function (response) {
                setInputComment("")
                getpost()
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

                        <img
                            src={post.picture}
                            alt ="Among Us"
                            className="topic-img"/>
                </div>}
                <div className="paragraaf">
                <strong>ontwikkelaar: </strong>InnerSloth
                <p><strong>uitgever:</strong> InnerSloth</p>
                <p><strong>release:</strong> 15 juni 2018</p>
                <p><strong>platforms:</strong> pc</p></div>

                {post !== null && <h4 className="topic-text">{post.postText}</h4>}

               <InputComment/>
                <textarea
                    className="comment-input"
                    value={inputComment}
                    onChange={handleComment}
                    placeholder="schrijf hier je reactie"/> <br/>
                {inputComment === "" && <p  className="error-message">Je moet eerst een reactie schrijven</p>}

                <button
                    onClick={handleClick}
                    disabled={inputComment <1}
                    className="comment-button">
                    Plaats je reactie</button> <br/> <br/>
                {post !== null && post.postComments.map((entry) => {
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

export default AmongUs;
