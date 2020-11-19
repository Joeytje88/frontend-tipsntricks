import React,{useState, useEffect} from "react";
import Navigation from "../../../components/navbar/Navigation";
import axios from "axios";
import "../topics.css";
import InputComments from "../../../components/comments/InputComment";
import Call_of_Duty_Modern_Warfare_Warzone_samenspelen
    from "../../../assets/afbeeldingen/Call_of_Duty_Modern_Warfare_Warzone_samenspelen.png";

const CoDPlay = () => {
   const [post, setPost] = useState (null);
   const username= localStorage.getItem("username");
   const [inputComment, setInputComment] = useState ("")
   const [inputPicture, setInputPicture] = useState(null)

   const getpost = async ()=> {
           try {
               const result = await axios.get(`http://localhost:8080/api/post/61`)
               setPost(result.data)
               console.log(result.data)
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
            getpost();
        } catch (error) {
            console.log(error)
        }
    }


   useEffect(()=>{
   getpost();
   }, [])


    return (
        <div className="full-page">
            <Navigation/>
            <div className="topic-page">
                {post !== null &&
                <div className="new-post">
                    <h2 className="post-title">
                        {post.postTitle}
                    </h2>
                        <img
                            src={Call_of_Duty_Modern_Warfare_Warzone_samenspelen}
                            className="topic-img"
                            alt = "Call of Duty Modern Warfare en Warzone"/>
                        <h5 className="topic-text">{post.header}</h5>
                    <p className="topic-text">{post.postText}</p>
                </div>}
                    <InputComments/>

                    {post !== null && post.postComments.map((entry) => {
                        return (
                            <div
                                className="comment-section">
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
                                <div>
                                    <p  key={entry.text}
                                        className="comment-text">
                                        {entry.text}</p>
                                </div>
                                {entry.image !== null && <div className="comment-img">
                                   <img src={entry.image} alt="plaatje comment"/>
                                </div>}

                            </div>)
                    })}

            </div>}
            </div>
    )
}
export default CoDPlay;
