import React from "react";
import Marvels_Avengers_screenshots from '../../../assets/afbeeldingen/Marvels_Avengers_screenshots.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const AvengersScreenshot = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Marvels_Avengers_screenshots}
                     alt="Marvel's Avengers screenshots"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Jouw mooiste Marvel's Avengers screenshots</h3>
                <p>Marvel's Avengers kan soms wat chaotisch zijn door alle actie die er om je heen gebeurd. Het maakt het wel uitdagender
                    om een gave screenshot te maken. Is jouw dit gelukt? Deel dat vooral in de reacties!
                </p>
            </div>
            <Comment/>
        </div>
            </>
    )
}
export default AvengersScreenshot;
