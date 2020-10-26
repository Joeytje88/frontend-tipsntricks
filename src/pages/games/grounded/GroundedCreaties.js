import React from "react";
import Grounded_creaties from '../../../assets/afbeeldingen/Grounded_creaties.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const GroundedCreaties = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Grounded_creaties}
                     className="game-topic-img"
                     alt="Grounded creaties"/>
            </div>
            <div className="topic-text">
                <h3>Grounded creaties!</h3>
                <p>In Grounded kun je de meest uiteenlopende creaties maken. Van grote huizen tot torenhoge gebouwen. Heb jij
                    iets unieks gebouwd? Deel het dan vooral in de reacties!
                </p>
            </div>

            <div className="comment-container">
                <Comment />
            </div>
        </div>
            </>
    )
}

export default GroundedCreaties;
