import React from "react";
import Sea_of_Thieves_play from '../../../assets/afbeeldingen/Sea_of_Thieves_Play.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const SOTPlay = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={Sea_of_Thieves_play}
                         alt="Sea of Thieves samenspelen"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Ben jij op zoek naar teamgenoten?</h3>
                    <p>In Sea of Thieves hoef je er niet in je eentje voor te staan. Je kunt namelijk samen met tot drie anderen het avontuur
                        aan gaan. Ben je op zoek naar andere spelers? Deel dan vooral je gamertag hieronder!
                    </p>
                </div>
            <Comment />
            </div>
        </>
    )
}

export default SOTPlay;
