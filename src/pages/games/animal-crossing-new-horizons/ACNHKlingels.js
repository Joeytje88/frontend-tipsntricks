import React, {useEffect, useState} from "react";
import Navigation from "../../../components/navbar/Navigation";
import axios from "axios";
import InputComment from "../../../components/comments/InputComment";

const ACNHKlingels = () => {
    const [post, setPost] = useState (null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [inputComment, setInputComment] = useState ("");

    const userid = localStorage.getItem("user_id");
    const changeComment = (e)=>{
        setInputComment(e.target.value)
    }

    const handleClick = async () =>{
        try {
            const placecomment = await axios.post(`http://localhost:8080/api/comment/${userid}/post/155`,{
                text: inputComment,
            }).then(function (response) {
                setInputComment("")
                getpost()
            })
        } catch (error){
            console.log(error)
        }
    }

    const getpost = async ()=> {
        try {
            const result = await axios.get(`http://localhost:8080/api/post/155`)
            setPost(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getpost();
        const username = localStorage.getItem('username');
        if (username !== null) {
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
                    <p className="topic-text">{post.postText}</p>

                    <p>{post.tags}</p></div>}
                {isLoggedIn !== false && <InputComment/>}
                {isLoggedIn !== false && <textarea
                    className="comment-input"
                    value={inputComment}
                    onChange={changeComment}
                    placeholder="schrijf hier je reactie"/>}

                {isLoggedIn !== true && <p>je moet eerst <a href="/login">inloggen</a> om te kunnen reageren</p>}
                {inputComment === "" && <p  className="error-message">Je moet eerst een reactie schrijven</p>}


                <button
                    onClick={handleClick}
                    disabled={inputComment <1}
                    className="comment-button">
                    Plaats je reactie</button> <br/> <br/>

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

export default ACNHKlingels;
