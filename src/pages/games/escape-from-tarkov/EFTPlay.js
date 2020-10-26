import React from "react";
import Escape_from_Tarkov_samenspelen from "../../../assets/afbeeldingen/Escape_from_Tarkov_samenspelen.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const EFTPlay = () => {

    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Escape_from_Tarkov_samenspelen}
                     alt="Escape from Tarkov samenspelen"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij op zoek naar teamgenoten?</h3>
                <p>In Escape from Tarkov kun je samen de strijd aan gaan. Echter moet je natuurlijk wel dubbel opletten, want
                    je friendly fire staat natuurlijk wel aan. Echter is het natuurlijk wel een stuk leuker om dit avontuur samen
                    aan te gaan. Ben je op zoek naar iemand die dat wil? Deel dan vooral hier je accountgegevens!
                </p>
            </div>

            <div className="comment-container">
               <Comment />
            </div>
        </div>
            </>
    )
}
export default EFTPlay;
