import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./Account.css";
import Navigation from "../../components/navbar/Navigation";

const Account = () => {
    const [image, setImage] = useState(null);
    const [game, setGame] = useState("")
    const [games, setGames] = useState ("")
    const [platform, setPlatform] = useState("")
    const [platforms, setPlatforms] = useState ("")
    const username = localStorage.getItem("username");
    const userid = localStorage.getItem("user_id")

    const handleGameChange = (e) => {
        setGame(e.target.value)
    }

    const handlePlatformChange = (e) =>{
        setPlatform(e.target.value)
    }
    const handleGame = async () => {
        try {
            // eslint-disable-next-line no-unused-vars
            const addGame = await axios.put (`http://localhost:8080/api/user/game/${userid}`, {
                name: game,
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
            const addPlatform = await axios.post(`http://localhost:8080/api/user/platform/${userid}`,{
                platformName: platform
            }).then(function (response) {
                alert("platform toegevoegd")
                window.location.reload();
            })
        } catch (error){
            console.log(error)
        }
    }

    const getInfo = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/api/user/${userid}`)
            setImage(result.data.picture)
            setGames(result.data.currentGames)
        } catch (error) {
            alert(error)
        }
    }


    useEffect(()=> {
    getInfo();
    },[])



    return (
        <div className="account-page">
            <Navigation/>
            <h2>Account info</h2>
            <h3>{username}</h3>

            {image !== undefined &&
             <img
                src={image}
                alt="profile"
                    />}
            <h3>Games</h3>


            {games && games.map((game)=> {
               return (<p key ={game.name}>{game.name}</p>)
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

                <h3>Platforms</h3>

            {platforms && platforms.map ((platform)=> {
                return <p key={platform.platformName}>{platform.platformName}</p>
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
    )

}
export default Account;
