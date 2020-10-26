import React from "react";
import Apex_Legends_top from "../../../assets/afbeeldingen/Apex_Legends_top.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const ApexLegendsTop = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Apex_Legends_top}
                     alt="Apex Legends ervaringen"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Je beste Apex Legends ervaringen</h3>
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

export default ApexLegendsTop;
