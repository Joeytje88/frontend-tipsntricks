import React from "react";
import F1_2020_controls from '../../../assets/afbeeldingen/F1_2020_controls.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const F12020Controls = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={F1_2020_controls}
                     alt="F1 2020 controls"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Wat zijn de beste control-instellingen?</h3>
                <p>In de F1 games zitten zoveel manieren om je controls aan te passen, maar wat zijn volgens jou de beste instellingen
                    voor het besturen van de F1-bolides?
                </p>
            </div>
               <Comment />
        </div>
            </>
    )
}
export default F12020Controls;
