import React from "react";
import Marvels_Avengers_play from '../../../assets/afbeeldingen/Marvels_Avengers_play.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const AvengersPlay = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Marvels_Avengers_play}
                     alt="Marvel's Avengers samenspelen"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij op zoek naar teamgenoten?</h3>
                <p>In Avengers kun je onder andere de War Table missies met andere spelers doen. Heeft niemand in je vriendenkring
                    deze game, maar zoek je wel teamgenoten? Deel het hier in deze topic!
                </p>
            </div>
            <Comment />
        </div>
            </>
    )
}
export default AvengersPlay;
