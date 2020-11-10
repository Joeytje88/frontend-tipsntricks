import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./Comment.css"


const Comment = () => {
    const [error, toggleError] = useState(false)
    const [loading, toggleLoading] = useState(false);
    const [comment, setComment] = useState("");

    const fetchPosts = async () => {
        toggleLoading(true);
        try {
            const result = await axios.get(`http://localhost:8080/api/posts`);
            setComment(result.data)
            toggleLoading(false);
        } catch (error) {
            console.log(error)
            // toggleError(error);
        }
    }

   const handleChange = (e) =>{
       setComment(e.target.value)
   }


    // const deleteComment = async (commentid) => {
    //     toggleLoading(true)
    //     try {
    //         const deleteMessage = axios.delete(`http://localhost:8080/api/comment/${commentid}`);
    //         toggleLoading(false);
    //         window.location.reload()
    //     } catch (error) {
    //         console.log(error)
    //         toggleLoading(false);
    //     }
    // }

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


    useEffect(() => {
        fetchPosts();

    },[]);

    return (
        <>


            {loading === true && <p>Laden...</p>}

            {comment !== "" && comment.map((comment)=>{
                return (
                    <div key={comment.postComments}>
                    {/*<p key={comment.postComments}>*/}
                    {/*    {comment.postComments.commentid}</p>*/}
                    <p key={comment.postComments.text}>
                        {comment.postComments.text}</p>
                        </div>)

            })
            }

            </>
    );

}
export default Comment;
