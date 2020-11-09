import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navigation from "../navbar/Navigation";
import "./posts.css"

const PostOverview = () => {
    const [postData, setPostData] = useState("")
    const [loading, toggleLoading] = useState(false);

    useEffect(()=>{
        fetchposts();
    },[])

    const deletePost = (postId) => {
        try{
        const deleteBericht = axios.delete(`http://localhost:8080/api/post/${postId}`);
    } catch (error){
        console.log(error)
        }
    }

    const fetchposts = async () => {
        toggleLoading(true);
        try {
            const result = await axios.get(`http://localhost:8080/api/posts`);
            setPostData(result.data)
            toggleLoading(false);
        } catch (error) {
            console.log(error)
            // toggleError(error);
        }
    }
    return (
        <>
            <Navigation/>
            {postData !== "" && postData.map((post)=> {
                return(
                <div
                    className="berichten"
                    key={post.post}>
                    <h5 key={post.postTitle}>
                        {post.postTitle}
                    </h5>
                    <p
                        key={post.postId}> id:&nbsp;
                        {post.postId}
                    </p>
                    <p
                        key={post.postText}>
                        {post.postText}</p>
                    <button
                        className="delete-post"
                        type="submit"
                        onClick={deletePost}>
                        verwijder
                    </button>
                </div>)})
            }

            </>
    )
}

export default PostOverview;
