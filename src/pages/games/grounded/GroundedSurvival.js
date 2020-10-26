import React from "react";
import Grounded_survival from '../../../assets/afbeeldingen/Grounded_survival.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const GroundedSurvival = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Grounded_survival}
                     className="game-topic-img"
                    alt="Grounded Survival"/>
            </div>
            <div className="topic-text">
                <h3>Survival tips</h3>
                <p>In Grounded heb je diverse soorten ongedierte die je het leven zuur proberen te maken. Heb jij moeite met bepaalde
                    soorten beesten? Of juist tips om te overleven? Deel ze vooral in de reacties!
                </p>
            </div>
              <Comment />
        </div>
            </>
    )
}

export default GroundedSurvival;
