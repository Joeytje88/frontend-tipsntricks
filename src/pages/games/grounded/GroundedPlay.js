import React from "react";
import Grounded_play from '../../../assets/afbeeldingen/Grounded_play.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const GroundedPlay = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Grounded_play}
                     alt="Grounded samenspelen"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij op zoek naar teamgenoten?</h3>
                <p>In Grounded hoef je er niet in je eentje voor te staan. Je kunt namelijk samen met drie anderen het avontuur
                    aan gaan. Ben je op zoek naar andere spelers? Deel dan vooral je gamertag hieronder!
                </p>
            </div>
               <Comment />
        </div>
            </>
    )
}

export default GroundedPlay;
