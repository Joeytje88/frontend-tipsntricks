import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import "./AllAccount.css"
import Navigation from "../../components/navbar/Navigation";
import Account from "./Account";
const AllAccounts = () => {

    const [accounts, setAccounts] = useState("")
    const [loading, toggleLoading] = useState(false);

    useEffect(()=>{
        getAccounts()
    },[])

    const getAccounts = async () => {
        toggleLoading(true);
        try {
            const result = await axios.get(`http://localhost:8080/api/users`);
            setAccounts(result.data)
            toggleLoading(false);
        } catch (error) {
            console.log(error)
            // toggleError(error);
        }
    }


    return (
        <div className="account-overzicht">
            <Navigation/>

            {accounts !== "" && accounts.map(({ username, gamertag, userid, picture, currentGames, platforms}, x )=> {
                return(
                     <div
                        className="accounts"
                        key={x}>
                        <div className="username"><h4>Username</h4>
                           <h5
                                className="text"
                                key={username}>
                                {username}
                            </h5></div>
                        <div className="user-games"><h4>Games</h4>{currentGames.map((game)=>{
                                return(<p className="text">{game.name}</p>)})
                        }</div>
                        <div className="user-platforms">
                            <h4>Platforms</h4>
                            {platforms.map((platform)=>{
                                return( <p className="text">{platform.platformName}</p>)
                            })}</div>
                        <div className="user-gamertag">
                            <h4>Gamertag</h4>
                            <p
                                className="text"
                                key={gamertag}>{gamertag}</p></div>

                        <div className="user-picture">
                        {picture !== null &&<img
                            key={picture}
                            src={picture}
                            className="account-picture"
                            alt="account.img"/>}
                        </div>
                         {localStorage.username === username && <Link
                                                                    to="/account"
                                                                    className="adjust">wijzig account</Link>}

                      </div> )})}


        </div>
    )
}

export default AllAccounts;
