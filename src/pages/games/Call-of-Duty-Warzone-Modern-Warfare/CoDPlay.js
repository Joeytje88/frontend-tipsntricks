import React,{useState, useEffect} from "react";
import Navigation from "../../../components/navbar/Navigation";
import axios from "axios";
import "../topics.css";
import InputComment from "../../../components/comments/InputComment";


const CoDPlay = () => {
   const [post, setPost] = useState (null);
    const userid = localStorage.getItem("user_id")
    const username= localStorage.getItem("username");

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
               const result = await axios.get(`http://localhost:8080/api/post/1`)
               setPost(result.data)
               console.log(result.data)
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
                    <div className="post-picture">
                        <img src={post.picture} alt = "plaatje bericht"/></div>
                    <p className="topic-text">{post.postText}</p><br/>

                    <InputComment/>


                    {post.postComments.map((entry) => {
                    return (
                        <div
                            className="comment-section">
                            <div className="comment-heading">
                                <p className="username-comment">{entry.username}</p>
                                {userid === userid && <h6
                                    className="delete-comment"
                                    onClick={()=> deleteComment(entry.commentid)}>
                                    verwijder</h6>}
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

            </div>}
            </div>
            </>
    )
}
export default CoDPlay;
