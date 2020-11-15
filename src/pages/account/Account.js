import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./Account.css";
import Navigation from "../../components/navbar/Navigation";

const Account = () => {
    const [data, setData] = useState(null);
    const [game, setGame] = useState("")
    const [platform, setPlatform] = useState("")
    const [error, setError] = useState (null);

    // const [isLoggedIn, setIsLoggedIn] = useState (false)
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
            const addGame = await axios.post (`http://localhost:8080/api/user/game/${userid}`, {
                name: game,
            }).then (function (response){
                alert("game toegevoegd")
                getInfo();
            })

        } catch (error){
            setError(error)
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
            setData(result.data)
            console.log(result.data)
        } catch (error) {
            setError(error)
        }
    }


    useEffect(()=> {
    getInfo();
    },[])



    return (
        <div className="account-page">
            <Navigation/>
             <h2>Account info</h2>
            {data !== null && <div>
            <h3>{data.username}</h3>
                {data.image &&
                <img
                   src={data.image}
                   alt="profiel-img"/>}
            </div>}

            <h3>Games</h3>
            <div className="game">

            {data !== null && data.currentGames && data.currentGames.map((game)=> {
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
            {error !== null && <p>Game al toegevoegd</p>}

            </div>
            <div className="platform">
                <h3>Platforms</h3>

            {/*{data !== null && data.platforms.map ((platform)=> {*/}
            {/*    return <p key={platform.platformName}>{platform.platformName}</p>*/}
            {/*})}*/}
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
    )

}
export default Account;
