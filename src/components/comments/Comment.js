import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./Comment.css"
import Navigation from "../navbar/Navigation";
import AdminNavbar from "../navbar/AdminNavbar";


const Comment = () => {
    const [loading, toggleLoading] = useState(false);
    const [post, setPost] = useState(null);

    const fetchPosts = async () => {
        toggleLoading(true);
        try {
            const result = await axios.get(`http://localhost:8080/api/posts`);
            setPost(result.data)
            toggleLoading(false);
        } catch (error) {
            console.log(error)
            // toggleError(error);
        }
    }


    const deleteComment = async (commentid) => {
        toggleLoading(true)
        try {
            const deleteMessage = axios.delete(`http://localhost:8080/api/comment/${commentid}`);
            toggleLoading(false);
            fetchPosts();
        } catch (error) {
            console.log(error)
            toggleLoading(false);
        }
    }


    useEffect(() => {
        fetchPosts();

    },[]);

    return (
        <>

            <Navigation/>
            {localStorage.roles === "ROLE_ADMIN" && <AdminNavbar/>}

            {loading === true && <p>Laden...</p>}

            {post !== null &&
            post.map((entry) => {
                return (
                    <div
                        className="comment-section"
                        key={entry.postComments.commentid}>
                        <div className="comment-heading">
                            {/*<p>{entry.username}</p>*/}
                            <h6
                                className="delete-comment"
                                onClick={()=> deleteComment(entry.postComments.commentid)}>
                                verwijder</h6>
                            <h6 className="adjust-comment">
                                pas aan</h6>
                        </div>
                        <div className="comment"
                             key={entry.postComments.text}>
                            {entry.postComments.text}
                        </div>
                        {entry.postComments.image !== null && <div className="comment-img">
                           <img src={entry.postComments.image} alt="plaatje comment"/>
                        </div>}

                    </div>)
            })}

            </>
    );

}
export default Comment;
