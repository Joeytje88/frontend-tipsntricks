import React, {useState, useEffect} from "react"
import axios from "axios";
import "../games/topics.css"
import Navigation from "../../components/navbar/Navigation";
import Comment from "../../components/comment/Comment";

const Topic = () =>{

    const [topicData, setTopicData] = useState("")

    const handlePostData = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/api/topics`)
            setTopicData(result.data)
            console.log(result.data)
        } catch (error) {
            alert(error)
        }
    }


    useEffect(()=> {
        handlePostData()
    },[])
    return (
        <>
            <Navigation/>
                {topicData !== null && <div className="topic-page">
                    <h3>{topicData.topicTitle}</h3>
                    <img src={topicData.topicImage} alt = "plaatje bericht"/>
                    <p className="post-text">{topicData.postText}</p>
                </div>}
                <div className="comment-section">
                <Comment/>
                </div>
            </>

    )
}

export default Topic;
