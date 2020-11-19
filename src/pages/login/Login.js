import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import './Login.css'
import Navigation from "../../components/navbar/Navigation";
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
                history.push("/account");
            })
        } catch (error) {
            console.log(error)
            alert("wachtwoord en/of gebruikersnaam kloppen niet");
        }
    }

    const loginRoles = localStorage.getItem("roles")
    const userid = localStorage.getItem("user_id")

return (
    <div className="login-page">
    <Navigation />


        <div className="login-container">
            <h1>Login</h1>
            <form>
        <label htmlFor="emailadres">gebruikersnaam:</label><br/>
            <input
                name="username"
                type="text"
                className="input"
                placeholder="Iron Man"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/><br/>
                {username === "" && <p>Je hebt geen gebruikersnaam ingevoerd!</p>}

            <label htmlFor="password">wachtwoord:</label><br/>
            <input
                name="password"
                type="password"
                className="input"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <br/>

            <button
                className="login-button"
                type="submit"
                disabled={username === undefined}
                onClick={handleSubmit}>login</button>
        </form>


        </div>
</div>
);
}

export default Login;
