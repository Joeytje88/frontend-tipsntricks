import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import './Login.css'
import Navigation from "../../components/navbar/Navigation";
import {Button} from "../../components/button/Button";
import axios from "axios";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // eslint-disable-next-line no-unused-vars
            const result = await axios.post('http://localhost:8080/api/auth/signin', {
                username: username,
                password: password,
                loginRoles: loginRoles,
                userid: userid
            }).then (function (response) {
                localStorage.setItem("roles", response.data.roles)
                localStorage.setItem("username", response.data.username)
                localStorage.setItem("token", response.data.accessToken)
                localStorage.setItem("user_id", response.data.id)
                alert ("Je bent ingelogd");
                history.push("/profiel");
            })
        } catch (error) {
            alert(error);
        }
    }

    const loginRoles = localStorage.getItem("roles")
    const userid = localStorage.getItem("user_id")

return (
    <>
    <Navigation />
    <div className="login-page">

        <div className="login-container">
            <h1>Login</h1>
            <form>
        <label htmlFor="emailadres">gebruikersnaam:</label><br/>
            <input
                name="username"
                type="text"
                className="input"
                placeholder="gebruikersnaam"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/><br/>


            <label htmlFor="password">wachtwoord:</label><br/>
            <input
                name="password"
                type="password"
                className="input"
                placeholder="wachtwoord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <br/>

            <Button
                className="button"
                type="submit"
                disabled={username === undefined}
                onClick={handleSubmit}>login</Button>
        </form>

            {username === undefined && <p>Je hebt geen gebruikersnaam ingevoerd!</p>}
        </div>
    </div>
</>
);
}

export default Login;
