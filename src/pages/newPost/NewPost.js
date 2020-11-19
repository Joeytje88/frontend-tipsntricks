import React, {useState, useEffect} from "react";
import Navigation from "../../components/navbar/Navigation";
import axios from 'axios';
import "./newPost.css";
const NewPost = ()=> {

    const [info, setInfo] = useState(null);
    const [error, setError] = useState(false);

    const handlePostData = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/api/posts`)
            setInfo(result.data)
        } catch (error) {
            setError(error)
        }
    }


    useEffect(()=> {
        handlePostData()
    },[])

    return(
        <>
            <Navigation/>
        <div className="bericht-pagina">

            {info !== null && info.filter((post)=> {
            return (
                <div className="nieuws">
                    <h2 className="post-title"> {post.postTitle} </h2>
                    <h5 key={post.categories}>{info.categories}</h5>
                    <h5><em>{post.header}</em></h5>
                        <img
                            alt="post-img"
                            className="topic-img"
                            src={post.picture}/>
                    <p className="post-text">{post.postText}</p>

                    <p>{post.tags}</p></div>
            )})
            }


            </div>

</>
    )
}

export default NewPost;
