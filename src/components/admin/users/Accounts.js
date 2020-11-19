import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navigation from "../../navbar/Navigation";
import AdminNavbar from "../../navbar/AdminNavbar";
import "./Accounts.css"
const Accounts = () => {
    const [accountData, setAccountData] = useState("")
    const [loading, toggleLoading] = useState(false);

    useEffect(()=>{
       getAccounts()
    },[])

    const deleteUser= (userid) => {
        alert("Weet u zeker dat u de gebruiker wilt verwijderen?")
        try{
            const deleteAccount = axios.delete(`http://localhost:8080/api/user/${userid}`);
            window.location.reload()
        } catch (error){
            console.log(error)
        }
    }

    const getAccounts = async () => {
        toggleLoading(true);
        try {
            const result = await axios.get(`http://localhost:8080/api/users`);
            console.log(result.data)
            setAccountData(result.data)
            toggleLoading(false);
        } catch (error) {
            console.log(error)
            // toggleError(error);
        }
    }


    return (
        <>
            <Navigation/>
            <AdminNavbar/>

            {accountData !== "" && accountData.map(({ username, gamertag, userid, picture, currentGames, platforms}, x )=> {
        return(
            <div
                className="accounts"
                key={x}>
                    <h5 key={username}>
                        {username}
                   </h5>


                {picture !== null &&<img
                            key={picture}
                            src={picture}
                            className="account-picture"
                            alt="account.img"/>}
                            <br/>
                {currentGames.map((game)=>{
                return(<h5>{game.name}</h5>)})
                }
                {platforms.map((platform)=>{
                    return( <p>{platform.platformName}</p>)
                })}
                <h4 key={gamertag}>{gamertag}</h4>

                            <button
                            className="delete-post"
                            type="submit"
                            onClick={()=>{deleteUser(userid)}}>
                             verwijder gebruiker
                            </button>
             </div>)})}


        </>
    )
}

export default Accounts;
