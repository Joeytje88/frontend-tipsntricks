import React, {useEffect, useState} from "react";
import Navigation from "../../../components/navbar/Navigation";
import axios from "axios";
import InputComment from "../../../components/comments/TopicComment";
import Call_of_Duty_Modern_Warfare_Warzone_Top
    from "../../../assets/afbeeldingen/Call_of_Duty_Modern_Warfare_Warzone_Top.png";

const CoDTop = () =>{
    const [post, setPost] = useState (null);
    const [inputComment, setInputComment] = useState ("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const userid = localStorage.getItem("user_id");
    const username = localStorage.getItem("username")
    const changeComment = (e)=>{
        setInputComment(e.target.value)
    }

    const handleClick = async () =>{
        try {
            const placecomment = await axios.post(`http://localhost:8080/api/comment/${userid}/post/3`,{
                text: inputComment,
            }).then(function (response) {
                setInputComment("")
                getpost()
            })
        } catch (error){
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


    const getpost = async ()=> {
        try {
            const result = await axios.get(`http://localhost:8080/api/post/3`)
            setPost(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if(username !== null){
            setIsLoggedIn(true);
        }
        getpost();
    }, [])


    return (
        <div className="full-page">
            <Navigation/>

            <div className="topic-page">
                {post !== null && <div className="new-post">
                    <h2 className="post-title"> {post.postTitle} </h2>
                        <img
                            src={Call_of_Duty_Modern_Warfare_Warzone_Top}
                            className="topic-img"
                            alt = "plaatje bericht"/>
                    <h5 className="topic-text">{post.header}</h5>
                    <p className="topic-text">{post.postText}</p>
                </div>}
                {isLoggedIn === false && <p className="warning">je moet ingelogd zijn om te kunnen reageren</p>}
                {isLoggedIn !== false && <div className="comment-section">
                    <InputComment/>
                <textarea
                    className="comment-input"
                    value={inputComment}
                    onChange={changeComment}
                    placeholder="schrijf hier je reactie"/> <br/>
                {inputComment === "" && <p  className="error-message">Je moet eerst een reactie schrijven</p>}

                <button
                    onClick={handleClick}
                    className="comment-button"
                    disabled={inputComment <1}>
                    Plaats je reactie</button>
                    </div>}

                {post !== null &&
                post.postComments.map((entry) => {
                        return (
                            <div
                                className="comment-section">
                                <div className="comment-heading">
                                    <p className="username-comment">{username}</p>
                                    {userid === userid && <h6
                                        className="delete-comment"
                                        onClick={() => deleteComment(entry.commentid)}>
                                        verwijder</h6>}
                                    <h6 className="adjust-comment">
                                        pas aan</h6>
                                </div>
                                <div>
                                    <p  key={entry.text}
                                        className="comment-text">
                                        {entry.text}</p>
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
export default CoDTop;
