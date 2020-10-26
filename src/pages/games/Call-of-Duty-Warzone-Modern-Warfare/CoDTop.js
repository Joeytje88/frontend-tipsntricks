import React from "react";
import Call_of_Duty_Modern_Warfare_Warzone_Top
    from "../../../assets/afbeeldingen/Call_of_Duty_Modern_Warfare_Warzone_Top.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const CoDTop = () =>{
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Call_of_Duty_Modern_Warfare_Warzone_Top}
                     alt="Call of Duty Modern Warfare Warzone Top"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij op zoek naar teamegenoten?</h3>
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
export default CoDTop;
