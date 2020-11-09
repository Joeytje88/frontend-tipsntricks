import React from "react";
import Image from "../../../components/image/Image";
import {Link} from "react-router-dom";
import Marvels_Avengers from '../../../assets/afbeeldingen/Marvels_Avengers.png';
import Marvels_Avengers_tips from '../../../assets/afbeeldingen/Marvels_Avengers_tips.png';
import Marvels_Avengers_screenshots from '../../../assets/afbeeldingen/Marvels_Avengers_screenshots.png';
import Marvels_Avengers_singleplayer from '../../../assets/afbeeldingen/Marvels_Avengers_singleplayer.png';
import Marvels_Avengers_play from '../../../assets/afbeeldingen/Marvels_Avengers_play.png';
import Navigation from "../../../components/navbar/Navigation";
import "../games.css"
const MarvelsAvengers = () => {

    return (
        <>
            <Navigation/>
            <div className="game-page">
                <div className="game-description">
                <img
                    alt="Marvel's Avengers"
                    src={Marvels_Avengers}
                    className="games-img"/>

                    <div className="paragraaf">Marvel's Avengers
                        <p>ontwikkelaar: Crystal Dynamics</p>
                        <p>uitgever: Square Enix</p>
                        <p> release: 4 september 2020 </p>
                        <p>platforms: pc. PlayStation 4, Xbox One</p></div>
                </div>

            <div className="tipsntrick">
                <Link to="/marvels-avengers/screenshots"
                      className="link-item">
                    <Image
                        alt="Marvel's Avengers screenshots"
                        link={Marvels_Avengers_screenshots}
                        className="optional-img"
                        name="De mooiste screenshots van Marvel's Avengers"/>
                </Link>
                <Link to="/marvels-avengers/singleplayer"
                      className="link-item">
                    <Image
                        alt="Marvel's Avengers singleplayer"
                        link={Marvels_Avengers_singleplayer}
                        className="optional-img"
                        name="Zit je ergens vast in de singleplayer?"/>
                </Link>
                <Link exact to="/marvels-avengers/tips"
                      className="link-item">
                    <Image
                        alt="Marvel's Avengers tips"
                        link={Marvels_Avengers_tips}
                        className="optional-img"
                        name="Deel hier jouw beste ervaringen"/>
                </Link>

                <Link exact to="/marvels-avengers/co-op"
                      className="link-item">
                    <Image
                        alt="Marvel's Avengers co-op"
                        link={Marvels_Avengers_play}
                        className="optional-img"
                        name="Deel hier je gamertag/ PSN om samen co-op missies te doen"/>
                </Link>
            </div>
            </div>

        </>
    )
}
export default MarvelsAvengers;
