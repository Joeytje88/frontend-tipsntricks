import React from "react";
import Sea_of_Thieves_Arena from '../../../assets/afbeeldingen/Sea_of_Thieves_Arena.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const SOTArena = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={Sea_of_Thieves_Arena}
                         alt="Sea of Thieves tips"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Heb je tips om in de Arena te overleven?</h3>
                    <p>Heb je nog handige tips om in de Arena te overleven? Of zoek je iemand die alleen deze modus speelt
                        om samen mee te spelen?</p>
                </div>
            <Comment />
            </div>
        </>
    )
}

export default SOTArena;
