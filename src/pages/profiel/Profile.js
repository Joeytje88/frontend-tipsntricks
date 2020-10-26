import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "./Profile.css";
import Navigation from "../../components/navbar/Navigation";
import axios from'axios';

const Profile = () =>{

    const [image, setImage] =useState(undefined);
    const [inputGame, setInputGame]= useState("");
    const [inputPlatform, setInputPlatform] = useState ("")

    const userid = localStorage.getItem("user_id")
    const username = localStorage.getItem("username");
    const URL = "http://localhost:3000/account/"+username;
    const history = useHistory();

    const handleGameChange = (e)=>{
        setInputGame(e.target.value);
    }
    const handlePlatformChange = (e)=>{
        setInputPlatform(e.target.value);
    }


    const handleFiles = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertBase64(file)
        setImage(base64)
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
    const handleGame = async () => {
        try {
            // eslint-disable-next-line no-unused-vars
            const addGame = await axios.put (`http://localhost:8080/api/game/user/${userid}`, {
                name: inputGame,
            }).then (function (response){
                alert("game toegevoegd")
                window.location.reload();
            })

        } catch (error){
            alert(error)
        }
    }

    const handlePlatform = async () =>{
        try{
            // eslint-disable-next-line no-unused-vars
            const addPlatform = await axios.put(`http://localhost:8080/api/platform/user/${userid}`,{
                platformName: inputPlatform
            }).then(function (response) {
                alert("platform toegevoegd")
                window.location.reload();
            })
        } catch (error){
            alert (error)
        }
    }

    const handleAccount = async () =>{
        try {
            // eslint-disable-next-line no-unused-vars
            const result = await axios.put(`http://localhost:8080/api/user/${userid}`, {
                username,
                Url: URL,
                picture: image
            }).then(function (response) {
                setImage(undefined);
                alert("account aangemaakt")
                history.push("/account")
            })
        } catch (error){
            console.log(error)
        }
    }

    return(
        <div className="account-page">
            <Navigation/>
            <h3>Maak hier je account aan!</h3>

            <h4>Gebruikersnaam</h4>
            {username !== undefined && <h3>{username}</h3>}

            <h4>Voeg hier een afbeelding toe</h4>
            <input
                type="file"
                name="picture"
                className="file-input"
                onChange={(e)=>{
                    handleFiles(e)
                }}/>
                <div>
            {image !== undefined &&
            <img
                src={image}
                alt="plaatje"
                className="profile-img"/>}
                </div>



            <h4>Voeg hier je games toe!</h4>
            <input
                type="text"
                value={inputGame}
                onChange={handleGameChange}
                placeholder="voer hier je games in"
                className="game-input"
            /> <br/>


            <h4>Voeg hier je platforms toe!</h4>
            <input
                type="text"
                value={inputPlatform}
                onChange={((e)=> handlePlatformChange(e))}
                placeholder="voer hier je platforms in"
                className="game-input"
            />
            <br/>
            <button
             className="save-button"
             onClick={handleAccount}>
                Sla gegevens op!
            </button>
        </div>

    )
}

export default Profile;
