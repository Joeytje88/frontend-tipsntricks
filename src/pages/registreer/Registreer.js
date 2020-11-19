import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import axios from 'axios';
import Navigation from "../../components/navbar/Navigation";
import './Registreer.css';

function Registreer () {
    const history = useHistory();
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // eslint-disable-next-line no-unused-vars
            const result = await axios.post('http://localhost:8080/api/auth/signup', {
                username: username,
                email: email,
                password: password,
                repeatPassword: repeatPassword,
            }).then (function (response) {
                alert ("account is aangemaakt");
                history.push ("/login");
            })
        } catch (error) {
            // eslint-disable-next-line no-lone-blocks
            {error.contains === "status code 400" && alert ("gebruikersnaam of email wordt al gebruikt")}
            alert(error);
        }
    }

    return (
        <div className="registreer-pagina">
            <Navigation/>

                <h2>Registreer</h2>


                <div className="registreer-container">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            gebruikersnaam:</label><br/>
                        <input
                            type="text"
                            name="username"
                            className="input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="gebruikersnaam"/><br/>
                        {username === "" && <p>Voer een gebruikersnaam in</p> }
                        <label
                            htmlFor="emailadres"
                            className="registreer-label"
                        >emailadres:</label>
                        <br/>
                        <input
                            type="email"
                            name="email"
                            className="input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="emailadres"/><br/>
                        {email === "" && <p>Voer een geldig emailadres in</p>}
                        <label
                            htmlFor="password"
                            className="registreer-label">
                            wachtwoord:</label><br/>
                        <input
                            type="password"
                            name="password"
                            className="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="wachtwoord"/><br/>
                        <label
                            htmlFor="password"
                            className="registreer-label">herhaal wachtwoord:</label><br/>
                        {password === "" && <p>Voer een wachtwoord in</p>}
                        <input
                            type="password"
                            name="repeatPassword"
                            className="password"
                            value={repeatPassword}
                            onChange={(e)=> setRepeatPassword(e.target.value)}
                            placeholder="wachtwoord"/>
                            <br/>
                        {repeatPassword === "" && <p>Voer hetzelfde wachtwoord in</p>}
                        {repeatPassword !== password &&<p>Wachtwoorden komen niet overeen</p>}
                        <button className="registreer-button"
                                type="submit"
                                disabled={password !== repeatPassword ||
                                password === "" ||
                                repeatPassword === "" ||
                                password <=6 ||
                                username === ""}
                                onClick={handleSubmit}
                                >registreer
                        </button>
                    </form>
                    <br/>
                    {password >= 20 &&
                    <label className=" color-red">wachtwoord mag niet meer dan 20 karakters zijn</label>}
                </div>
        </div>
    )
}
export default Registreer;
