import React, {useEffect, useState} from 'react'
import Navigation from "../../../components/navbar/Navigation";
import axios from "axios";
import "../topics.css"
import InputComment from "../../../components/comments/TopicComment";
import Among_Us
    from "../../../assets/afbeeldingen/Among_Us.png";

const AmongUs = () => {

    const[post, setPost] = useState(null)
    const [inputComment, setInputComment] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState (false)
    const [inputPicture, setInputPicture] = useState(null)
    const username= localStorage.getItem("username")
    const userid = localStorage.getItem("user_id")
    // aanpassen input van reactie
    const changeComment = (e) =>{
        setInputComment(e.target.value)
    }

// afbeeelding  omzetten naar base64
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

   //post ophalen
    const getpost = async ()=> {
        try {
            const result = await axios.get(`http://localhost:8080/api/post/105`)
            setPost(result.data)
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }

// reactie plaatsen
    const handleClick = async () =>{
        try {
            const placecomment = await axios.post(`http://localhost:8080/api/comment/${userid}/post/105`,{
                text: inputComment,
                image: inputPicture
            }).then(function (response) {
                setInputComment("")
                setInputPicture(null)
                getpost();
            })
        } catch (error){
            console.log(error)
        }
    }

// reactie aanpassen
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

    //reactie verwijderen
    const deleteComment = async (commentid) => {
        try {
            const deleteMessage = axios.delete(`http://localhost:8080/api/comment/${commentid}`);
            getpost();
        } catch (error) {
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
                {post !== null &&
            <div className="new-post">
                    <h2 className="post-title"> {post.postTitle} </h2>

                        <img
                            src={Among_Us}
                            alt ="Among Us"
                            className="topic-img"/>

                <div className="paragraaf">
                <strong>ontwikkelaar: </strong>InnerSloth
                <p><strong>uitgever:</strong> InnerSloth</p>
                <p><strong>release:</strong> 15 juni 2018</p>
                <p><strong>platforms:</strong> pc</p></div>

                <h4 className="topic-text">{post.postText}</h4>
            </div>}
                {isLoggedIn === false && <p className="warning">je moet ingelogd zijn om te kunnen reageren</p>}
                {isLoggedIn !== false && <div className="comment-section">
                    <InputComment/>
                <input
                    type="file"
                    name="picture"
                    className="input-picture"
                    onChange={(e)=> {handleFiles(e)}}/>
                {inputPicture !== null && <div className="comment-img"><img src={inputPicture} alt="comment-img"/></div> }
                {isLoggedIn !== false &&
                <textarea
                    className="comment-input"
                    value={inputComment}
                    onChange={changeComment}
                    placeholder="schrijf hier je reactie"/>}
                {inputComment === "" && <p  className="error-message">Je moet eerst een reactie schrijven</p>}

                <button
                    onClick={handleClick}
                    disabled={inputComment <1}
                    className="comment-button">
                    Plaats je reactie</button>    </div>}

                {post !== null && post.postComments.map((entry) => {
                    return (
                        <div
                            className="comment-section">
                            <div className="comment-heading">
                                <p className="username-comment">{username}</p>
                                {entry.user.username === localStorage.username &&<h6
                                    className="delete-comment"
                                    onClick={()=> deleteComment(entry.commentid)}>
                                    verwijder</h6>}
                                {entry.user.username === localStorage.username &&
                                <h6
                                    className="adjust-comment"
                                    onClick={()=> (adjustComment(entry.commentid))}>
                                    pas aan</h6>}
                            </div>
                            <div className="comment"
                                 key={entry.text}>
                                <p>{entry.text}</p>
                            </div>
                            <div className="comment-img">
                                {entry.image !== null && <img src={entry.image} alt="plaatje comment"/>}
                            </div>

                        </div>)
                })}
            <a href="https://clk.tradedoubler.com/click?p=303217&a=2878273&g=24754130">
                <img
                    src="https://impnl.tradedoubler.com/imp?type(img)g(24754130)a(2878273)955393499"
                    className="advertentie"/></a>
            </div>
        </div>
    )
}

export default AmongUs;
