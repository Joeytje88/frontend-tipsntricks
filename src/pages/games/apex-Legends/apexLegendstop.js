import React, {useEffect, useState} from "react";
import Apex_Legends_top from "../../../assets/afbeeldingen/Apex_Legends_top.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";
import axios from "axios";
import {Button} from "../../../components/button/Button";

const ApexLegendsTop = () => {
    const [post, setPost] = useState (null);
    const [inputComment, setInputComment] = useState ("")

    const userid = localStorage.getItem("user_id");

    const changeComment = (e)=>{
        setInputComment(e.target.value)
    }

    const handleClick = async () =>{
        try {
            const placecomment = await axios.post(`http://localhost:8080/api/comment/${userid}/post/9`,{
                text: inputComment,
            }).then(function (response) {
                setInputComment("")
            })
        } catch (error){
            console.log(error)
        }
    }

    const getpost = async ()=> {
        try {
            const result = await axios.get(`http://localhost:8080/api/post/9`)
            setPost(result.data)
        } catch (error) {
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
                    {post.categories !== null &&<h5>{post.categories}</h5>}
                    <div className="post-picture">
                        <img src={post.picture} alt = "plaatje bericht"/></div>
                    <p className="topic-text">{post.postText}</p>

                    <p>{post.tags}</p></div>}
                <textarea
                    className="comment-input"
                    value={inputComment}
                    onChange={changeComment}
                    placeholder="schrijf hier je reactie"/> <br/>
                {inputComment === "" && <p  className="error-message">Je moet eerst een reactie schrijven</p>}


                <Button
                    onClick={handleClick}
                    disabled={inputComment === " "}>
                    Plaats je reactie</Button> <br/> <br/>


                {/*{post !== null &&*/}
                {/*<div*/}
                {/*    className="comment-section">*/}
                {/*    <div className="comment-heading">*/}
                {/*        <p*/}
                {/*            className="username-comment">{post.postComments[0].commentid}</p>*/}
                {/*        <h6*/}
                {/*            className="delete-comment">*/}
                {/*            /!*onClick={()=> deleteComment(comment.commentid)}>*!/*/}
                {/*            verwijder</h6>*/}
                {/*        <h6 className="adjust-comment">*/}
                {/*            pas aan</h6>*/}
                {/*    </div>*/}
                {/*    <div className="comment">*/}
                {/*        {post.postComments[0].text}*/}
                {/*    </div>*/}
                {/*    /!*<div className="comment-img">*!/*/}
                {/*    /!*    {image !== null && <img src={image} alt="plaatje comment"/>}*!/*/}
                {/*    /!*</div>*!/*/}

                {/*</div>}*/}

            </div>

        </>
    )
}

export default ApexLegendsTop;
