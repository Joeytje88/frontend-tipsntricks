import React, {useState, useEffect} from "react";
import Navigation from "../../components/navbar/Navigation";
import axios from 'axios';
import "./newPost.css";
const NewPost = ()=> {

    const [info, setInfo] = useState(null);
    const [error, setError] = useState(false);

    const handlePostData = async (postid) => {
        try {
            const result = await axios.get(`http://localhost:8080/api/post/4`)
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

            {info !== null && <div className="new-post">
                <h2 className="post-title"> {info.postTitle} </h2>
                <h5 key={info.categories}>{info.categories}</h5>
                <h5><em>{info.header}</em></h5>
                <div className="post-picture">
                <img src={info.picture} alt = "plaatje bericht"/></div>
                <p className="post-text">{info.postText}</p>

                    <p>{info.tags}</p></div>}
            {error != null && <p></p>}


            </div>

</>
    )
}

export default NewPost;
