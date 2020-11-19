import React, {useState, useEffect} from "react";
import axios from "axios";
import './Comment.css';

const InputComments = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const[inputPicture, setInputPicture] = useState(null);
    const [inputComment, setInputComment] = useState ("");
    const username = localStorage.getItem("username")
    const userid = localStorage.getItem("user_id");

    const changeComment = (e) =>{
        setInputComment(e.target.value)
    }
    useEffect(()=>{
        const username = localStorage.getItem('username');
        if (username !== null) {
            setIsLoggedIn(true);
        }
    },[])

    const handleClick = async () =>{
        try {
            const placecomment = await axios.post(`http://localhost:8080/api/comment/${userid}/post/61`,{
                text: inputComment,
                image: inputPicture,
            }).then(function (response) {
                setInputComment("")
                window.location.reload();
            })
        } catch (error){
            console.log(error)
        }
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

    return (
        <div className="comment">
            {isLoggedIn === false && <p className="warning">je moet ingelogd zijn om te kunnen reageren</p>}
            {isLoggedIn !== false && <div
            className="comment-section">
            <div className="comment-heading">
                <p className="username-comment">{username}</p>
            </div>
                {isLoggedIn !== false &&
                <input
                    type="file"
                    name="picture"
                    className="input-picture"
                    onChange={(e)=> {handleFiles(e)}}/>}
            {inputPicture !== null && <div className="comment-img"><img src={inputPicture} alt="comment-img" className="upload-img"/></div> }
           </div>}


            {isLoggedIn !== false &&
            <textarea
                className="comment-input"
                value={inputComment}
                onChange={changeComment}
                placeholder="schrijf hier je reactie"/>}
            {isLoggedIn !== false && inputComment === "" && <p  className="error-message">Je moet eerst een reactie schrijven</p>}
            <button
                onClick={handleClick}
                disabled={inputComment <1}
                className="comment-button">
                Plaats je reactie</button>
            </div>
    )
}

export default InputComments;
