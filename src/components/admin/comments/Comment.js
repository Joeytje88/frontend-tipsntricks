import React, {useState, useEffect} from "react";
import axios from 'axios';
import "../../comments/Comment.css"
import Navigation from "../../navbar/Navigation";
import AdminNavbar from "../../navbar/AdminNavbar";


const Comment = () => {
    const [loading, toggleLoading] = useState(false);
    const [comments, setComments] = useState(null);
    const [inputComment, setInputComment] = useState("")

    const changeComment = (e) =>{
        setInputComment(e.target.value)
    }
    const fetchComments = async () => {
        toggleLoading(true);
        try {
            const result = await axios.get(`http://localhost:8080/api/comments`);
            setComments(result.data)
            toggleLoading(false);
        } catch (error) {
            console.log(error)
           alert(error)
        }
    }
    const adjustComment = async (commentid) => {
        try {
            const changeText = axios.put(`http://localhost:8080/api/comment/${commentid}`,{
                text: inputComment,
            });
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    const deleteComment = async (commentid) => {
        toggleLoading(true)
        try {
            const deleteMessage = axios.delete(`http://localhost:8080/api/comment/${commentid}`);
            toggleLoading(false);
            fetchComments();
        } catch (error) {
            console.log(error)
            toggleLoading(false);
        }
    }


    useEffect(() => {
        fetchComments();

    },[]);

    return (
        <>

            <Navigation/>
            {localStorage.roles === "ROLE_ADMIN" && <AdminNavbar/>}
            <div className="accounts-container">
            {loading === true && <p>Laden...</p>}
            {comments === null && <p>Er zijn nog geen reacties!</p>}
               <div className="comment-section">
                <textarea
                    className="comment-input"
                    value={inputComment}
                    onChange={changeComment}
                    placeholder="schrijf hier je reactie"/>
                  </div>


            {comments !== null && comments.map((comment) => {
                return (

                    <div
                        className="comment-section"
                        key={comment.commentid}>
                        <div className="comment-heading">
                            <p>{comment.username}</p>
                           <h6
                                className="delete-comment"
                                onClick={()=> deleteComment(comment.commentid)}>
                                verwijder</h6>
                            <h6
                                className="adjust-comment"
                                onClick={()=> (adjustComment(comment.commentid))}>
                                pas aan</h6>
                        </div>
                        <div className="comment"
                             key={comment.text}>
                            {comment.text}
                        </div>
                        {comment.image !== null && <div className="comment-img">
                           <img src={comment.image} alt="plaatje comment"/>
                        </div>}

                    </div>)
            })}
                    </div>
            </>
    );

}
export default Comment;
