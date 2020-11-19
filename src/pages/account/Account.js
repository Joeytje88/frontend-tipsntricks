import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./Account.css";
import Navigation from "../../components/navbar/Navigation";

const Account = () => {
    const [data, setData] = useState(null);
    const [game, setGame] = useState("")
    const [platform, setPlatform] = useState("")
    const [error, setError] = useState (null);
    const [image, setImage] =useState(undefined);
    const [gamertag, setGamertag] = useState ("")
    const [isLoggedIn, setIsLoggedIn] = useState (false)
    const username = localStorage.getItem("username");
    const userid = localStorage.getItem("user_id")

    const handleGameChange = (e) => {
        setGame(e.target.value)
    }

    const handlePlatformChange = (e) =>{
        setPlatform(e.target.value)
    }

    const handleGamertagChange = (e) =>{
        setGamertag(e.target.value)
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
            const addGamertag = await axios.put (`http://localhost:8080/api/user/game/${userid}`, {
                name: game,
            }).then (function (response){
                window.location.reload();
            })

        } catch (error){
            console.log(error)
        }
    }

    const handleAccount = async () =>{
        try {
            // eslint-disable-next-line no-unused-vars
            const result = await axios.put(`http://localhost:8080/api/user/${userid}`, {
                username: username,
                picture: image,
                gamertag: gamertag
            }).then(function (response) {
                setImage(null)
                getInfo();
                window.location.reload();
            })
        } catch (error){
            console.log(error)
        }
    }

    const handlePlatform = async () =>{
        try{
            // eslint-disable-next-line no-unused-vars
            const addPlatform = await axios.post(`http://localhost:8080/api/user/platform/${userid}`,{
                platformName: platform
            }).then(function (response) {
                getInfo()
            })
        } catch (error){
            console.log(error)
        }
    }

    const getInfo = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/api/user/${userid}`)
            setData(result.data)
        } catch (error) {
            setError(error)
        }
    }


    useEffect(()=> {
    getInfo();
    if (username !== null){
        setIsLoggedIn(true)
    }
    },[])



    return (
       <div className="account-page">
            <Navigation/>
           {isLoggedIn === false && <p>Je moet eerst een account registreren</p>}
           {isLoggedIn === true &&
           <div
               className="user-account">
           <h2 className="account">Account info</h2>
            {data !== null && <div className="user-img">
                <h4>{data.username}</h4>
                {<h4>{data.gamertag}</h4>}

                {data.picture &&
                <img
                    src={data.picture}
                    alt="profiel-img"/>}
                {gamertag === null && <h4>Voeg hier je gamertag/ Steam/ PSN account/ Nintendo Switch friendcode in</h4>}
                {gamertag === null &&<input
                    type="text"
                    value={gamertag}
                    className="input-gamertag"
                    onChange={(e)=>{
                        handleGamertagChange(e)
                    }}/>}
                <div className="user-img"> <h4>Voeg hier een afbeelding toe</h4>
                    <input
                        type="file"
                        name="picture"
                        className="file-input"
                        onChange={(e)=>{
                            handleFiles(e)
                        }}/>

                        {image !== undefined &&
                        <img
                            src={image}
                            alt="plaatje"
                            className="profile-img"/>}


                    <button
                        className="comment-button"
                        onClick={handleAccount}>
                        Sla gegevens op! </button> <br/>

            </div>
            <div className="game-platform">
                <div className="game">
            <h3 className="subtitel">Games</h3>

            {data.currentGames && data.currentGames.map((game)=> {
               return (<p
                   className="subtitel"
                   key ={game.name}>
                   {game.name}</p>)
            })}

            <input
                type="text"
                value={game}
                className="input-game"
                onChange={(e) => {
                    handleGameChange(e)
                }}/>
            <button
                type="submit"
                onClick={handleGame}
                className="game-button">
                Voeg game toe
            </button>
            {error !== null && <p>Game al toegevoegd</p>}

            </div>
            <div className="platform">
                <h3  className="subtitel">Platforms</h3>

            {data.platforms.map((platform) => {
                return <p
                    key={platform.platformName}
                    className="subtitel">
                    {platform.platformName}
                </p>
            })}
            <input
                type="text"
                value={platform}
                className="input-game"
                onChange={(e) => {
                    handlePlatformChange(e)
                }}/>
                <button
                    type="submit"
                    className="game-button"
                    onClick={handlePlatform}>Voeg platform toe</button>
            </div>
            </div>

           </div>}
        </div>}
       </div>
               )
           }

export default Account;
