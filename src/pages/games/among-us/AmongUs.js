import React, {useEffect, useState} from 'react'
import Navigation from "../../../components/navbar/Navigation";
import axios from "axios";
import {Button} from "../../../components/button/Button";
import "../topics.css"


const AmongUs = () => {
    const[post, setPost] = useState(null)
    const [inputComment, setInputComment] = useState("")

    const userid = localStorage.getItem("user_id")

    const handleComment = (e) =>{
        setInputComment(e.target.value)
    }

    const getpost = async ()=> {
        try {
            const result = await axios.get(`http://localhost:8080/api/post/7`)
            setPost(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = async () =>{
        try {
            const placecomment = await axios.post(`http://localhost:8080/api/post/7/comment/${userid}`,{
                text: inputComment,
            }).then(function (response) {
                setInputComment("")
            })
        } catch (error){
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
                </div>}
                <div className="paragraaf"><strong>ontwikkelaar: </strong>InnerSloth
                <p><strong>uitgever:</strong> InnerSloth</p>
                <p><strong>release:</strong> 15 juni 2018</p>
                <p><strong>platforms:</strong> pc</p></div>

                {post !== null && <h5>{post.postText}</h5>}


                <textarea
                    className="comment-input"
                    value={inputComment}
                    onChange={handleComment}
                    placeholder="schrijf hier je reactie"/> <br/>
                {inputComment === "" && <p  className="error-message">Je moet eerst een reactie schrijven</p>}


                <Button
                    onClick={handleClick}
                    disabled={inputComment === " "}>
                    Plaats je reactie</Button> <br/> <br/>
            </div>
        </>
    )
}

export default AmongUs;
