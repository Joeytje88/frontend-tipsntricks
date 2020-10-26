import React from "react";
import Escape_from_Tarkov_top from "../../../assets/afbeeldingen/Escape_from_Tarkov_top.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const EFTtop = () =>{
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Escape_from_Tarkov_top}
                     alt="Escape from Tarkov ervaringen"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Je beste Escape from Tarkov momenten!</h3>
                <p>Het is altijd leuk om ervaringen te delen. Vooral door die bitterzoete herrineringen aan die ene overwinning of dat moment
                    waarop alles verloren leek, maar je toch het tij hebt doen laten keren. Deel hier vooral screenshots, video's of
                    een omschrijving van die gebeurtenissen!
                </p>
            </div>
                <Comment />
        </div>
            </>
    )
}
export default EFTtop;
