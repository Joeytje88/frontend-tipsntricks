import React, {useEffect, useState} from 'react'
import Navigation from "../../../components/navbar/Navigation";
import "../games.css";
import axios from "axios";
import InputComment from "../../../components/comments/TopicComment";
import Flight_Simulator_2020 from '../../../assets/afbeeldingen/Flight_Simulator_2020.png';

const FlightSimulator = () => {
    const[post, setPost] = useState(null)
    const [inputComment, setInputComment] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState (false)
    const [inputPicture, setInputPicture] = useState(null)
    const username= localStorage.getItem("username")
    const userid = localStorage.getItem("user_id")


    const changeComment = (e)=>{
        setInputComment(e.target.value)
    }

    const handleFiles = async (e) => {

        const file = e.target.files[0]
        const base64 = await convertBase64(file)
        setInputPicture(base64)

    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = (() => {
                resolve(fileReader.result)
            });
            fileReader.onerror = ((error) => {
                reject(error)
            })
        })
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
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }


    const getpost = async ()=> {
        try {
            const result = await axios.get(`http://localhost:8080/api/post/22`)
            setPost(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = async () =>{
        try {
            const placecomment = await axios.post(`http://localhost:8080/api/post/22/comment/${userid}`,{
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
        if (username !== null){
            setIsLoggedIn(true);
        }
    }, [])


    return (
        <div className="full-page">
        <Navigation/>
        <div className="topic-page">

            {post !== null && <div className="new-post">
                <h2 className="post-title"> {post.postTitle} </h2>
                    <img
                        src={Flight_Simulator_2020}
                        className="topic-img"
                        alt = "plaatje bericht"/>
            </div>}
                    <div className="paragraaf">
                        <p><strong>ontwikkelaar:</strong>Asobo Studio</p>
                        <p><strong>uitgever:</strong>Xbox Game Studios</p>
                        <p><strong>release:</strong> 18 augustus 2020 </p>
                        <p><strong>platforms:</strong> pc</p></div>

        {post !== null && <h5 className="topic-text">{post.postText}</h5>}
            {isLoggedIn !== false && <div className="new-comment">
                <InputComment/>
                <input
                    type="file"
                    name="picture"
                    className="input-picture"
                    onChange={(e)=> {handleFiles(e)}}/>
                {inputPicture !== null && <div className="comment-img"><img src={inputPicture} alt="comment-img"/></div> }
                <textarea
                    className="comment-input"
                    value={inputComment}
                    onChange={changeComment}
                    placeholder="schrijf hier je reactie"/>
                {inputComment === "" && <p  className="error-message">Je moet eerst een reactie schrijven</p>}

                <button
                    onClick={handleClick}
                    disabled={inputComment <1}
                    className="comment-button">
                    Plaats je reactie</button>    </div>}
            {post !== null &&
            post.postComments.map((entry) => {
                return (
                    <div
                        className="comment-section"
                        key={entry.commentid}>
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
                        <div className="comment"
                             key={entry.text}>
                            {entry.text}
                        </div>
                        <div className="comment-img">
                            {entry.image !== null && <img src={entry.image} alt="plaatje comment"/>}
                        </div>

                    </div>)
            })}


        </div>

        </div>
    )
}

export default FlightSimulator;
