import React from "react";
import Project_Cars_3_controls from '../../../assets/afbeeldingen/Project_Cars_3_controls.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const PCars3Controls = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Project_Cars_3_controls}
                     alt="Project Cars 3 controls"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Wat zijn de beste control-instellingen?</h3>
                <p>In de Project Car games zitten zoveel manieren om je controls aan te passen, maar wat zijn volgens jou de beste instellingen
                    voor het besturen van al die verschillende bolides?
                </p>
            </div>
                <Comment />
        </div>
            </>
    )
}

export default PCars3Controls;
