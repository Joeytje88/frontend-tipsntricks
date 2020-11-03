import React,{useState} from "react";
import axios from 'axios';
import "./Post.css";
import {Button} from "../button/Button";

const Post = () => {
    const [posttitle, setPosttitle] = useState("");
    const [header, setHeader] = useState("")
    const [inputUrl, setInputUrl] = useState ("")
    const [inputTag, setInputTag] = useState("");
    const [inputCategory, setInputCategory] = useState("");
    const [inputpicture, setInputPicture] = useState(undefined);
    const [text, setText] = useState("");

    const username = localStorage.getItem("username")

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

    const changeCategory = (e) =>{
        setInputCategory(e.target.value);
    }
    const changeTitle = (e)=> {
        setPosttitle(e.target.value);
    }
    const changeUrl = (e)=>{
        setInputUrl(e.target.value);
    }
    const changeTag = (e)=>{
        setInputTag(e.target.value);
    }

    const changeHeader = (e)=>{
        setHeader(e.target.value)
    }
    const changeText = (e)=>{
        setText(e.target.value)
    }

    const handlePost = async (e) =>{
        e.preventDefault();
        try {
            // eslint-disable-next-line no-unused-vars
            const postbericht = await axios.post(`http://localhost:8080/api/post`,{
                postURL: inputUrl,
                postTitle: posttitle,
                postText: text,
                header: header,
                picture: inputpicture,
                category: inputCategory,
                author: username
            }).then(function (response){
                alert("bericht aangemaakt")
            })} catch (error){
            console.log(error)
        }
    }

    const changePost = async () => {
        try {
            const editPost = await axios.put(`http://localhost:8080/api/post/29`,{
                postURL: inputUrl,
                postTitle: posttitle,
                postText: text,
                header: header,
                picture: inputpicture,
                category: inputCategory,
                author: username
        }).then(function (response){
            alert("bericht gewijzigd")
        })} catch (error){
            console.log(error)
        }
    }
    return (
       <div
            className="new-post">
            <h2 className="post-url">De url van de post</h2>
            <input
                name="input-url"
                className="input-url"
                type="text"
                value={inputUrl}
                onChange={(e)=>{
                    changeUrl(e)
                }}/>

           <h2
               className="post-title">titel van bericht</h2>
           <input
               name="posttitle"
               type="text"
               value={posttitle}
               className="posttitle"
               onChange={(e)=>{changeTitle(e)}}/>
            <h2>Inleiding bericht:</h2>
            <textarea
                name="postheader"
                className="post-header"
                value={header}
                placeholder="Schrijf hier de inleiding van het bericht"
                onChange={(e)=> {changeHeader(e)}}
                    />

                <input
                    type="file"
                    name="picture"
                    className="picture"
                    onChange={(e)=> {handleFiles(e)}}/>

           <div className="post-img">
               {inputpicture !== undefined &&
           <img src={inputpicture}
                alt="plaatje"
                className="picture"/>}</div>

            <h3>Schrijf hier je bericht</h3>

            <textarea
               name="posttext"
               value={text}
               rows="15"
               className="new-text"
               onChange={(e)=>{
                   changeText(e)
               }}>
                </textarea>
            <h4>Voer hier de tags in</h4>
            <input
                type="text"
                value={inputTag}
                className="tag-input"
                onChange={(e)=> {changeTag(e)}}/>
            <h4>Categoriën</h4>
            <input
                type="text"
                value={inputCategory}
                onChange={(e)=>{changeCategory(e)}}/>

                <Button
                 type="submit"
                 onClick={handlePost}>Plaats bericht
                </Button>

           <Button
               type="submit"
               onClick={changePost}>Wijzig bericht
           </Button>

       </div>


    )
}
export default Post;
