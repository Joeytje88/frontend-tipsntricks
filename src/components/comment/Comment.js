import React, {useState, useEffect} from "react";

import {Button} from "../button/Button"
import axios from 'axios';
import "./Comment.css"


const Comment = () => {
    const [error, toggleError] = useState(false)
    const [loading, toggleLoading] = useState(false);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState("");
    const [image, setImage] = useState(null);

    const username = localStorage.getItem("username");
    const userid =localStorage.getItem("user_id")


   const handleChange = (e) =>{
       setComment(e.target.value)
   }

    const handleFiles = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertBase64(file)
        setImage(base64)
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

    const deleteComment = async (commentid) => {
        toggleLoading(true)
        try {
            const deleteMessage = axios.delete(`http://localhost:8080/api/comment/${commentid}`);
            toggleLoading(false);
            window.location.reload()
        } catch (error) {
            console.log(error)
            toggleLoading(false);
        }
    }

    const changeComment =  async (commentid) => {
        toggleLoading(true)
        try {
            const changeComments = axios.put (`http://localhost:8080/api/comment/${commentid}`)
            setComment(handleChange);
        } catch (error) {
            toggleLoading(false)
            toggleError(error)
        }
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post(`http://localhost:8080/api/user/comment/${userid}`, {
                text: comment,
                commentImage: image,
            }).then(function (response) {
                fetchComments();
                setComment("")
                setImage(null);
            })
        } catch (error) {
            toggleError(error)
        }
    }

    const fetchComments = async (commentid) => {
        toggleLoading(true);
        try {
            const result = await axios.get(`http://localhost:8080/api/comments`);
            setComments(result.data)
            toggleLoading(false);
        } catch (error) {
            console.log(error)
            // toggleError(error);
        }
    }

    useEffect(() => {
        fetchComments();

    },[]);

    return (
        <>

             <textarea
                 className="comment-text"
                 value={comment}
                 onChange={handleChange}
                 placeholder="schrijf hier je reactie"/> <br/>
            {comment === "" && <p  className="error-message">Je moet eerst een reactie schrijven</p>}
            {error !== false && <p className="error-message">Er is iet mis gegaan</p>}

                 <input type="file"
                        name="commentImage"
                 onChange={(e)=> {
                     handleFiles(e)
                 }}/>

            <Button
                onClick={handleClick}
                disable={comment === " "}>
                Plaats je reactie</Button> <br/> <br/>

            {loading === true && <p>Laden...</p>}

            {comments && comments.map((comment) => {
                return(
                    <div
                        key={comment.commentid}
                        className="comment-section">
                        <div className="comment-heading">
                            <p
                                className="username-comment">{comment.commentid}</p> <p>{username}</p> &nbsp;
                            <h6
                                className="delete-comment"
                                 onClick={()=> deleteComment(comment.commentid)}>
                                verwijder</h6>
                            <h6 className="adjust-comment">
                                pas aan</h6>
                        </div>
                        <div className="comment">
                            {comment.text}
                        </div>
                        <div className="comment-img">
                            {image !== null && <img src={image} alt="plaatje comment"/>}
                        </div>

                    </div>
                )
            })}
            </>
    );

}
export default Comment;
