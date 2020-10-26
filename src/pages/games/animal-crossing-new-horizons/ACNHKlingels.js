import React from "react";
import Animal_Crossing_New_Horizons_klingels from "../../../assets/afbeeldingen/Animal_Crossing_New_Horizons_klingels.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const ACNHKlingels = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Animal_Crossing_New_Horizons_klingels}
                     alt="Animal Crossing New Horizons klingels"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Heb jij goede tips om makkelijk klingels te verdienen?</h3>
                <p>In Animal Crossing: New Horizons kun je op verschillende manieren aan klingels komen. Zo kun je ze makkelijk verdienen
                    door klingels te verkopen. Echter zijn er nog veel meer manieren om je bankrekening te spekken. Heb jij een manier gevonden?
                    Laat het de community dan vooral weten!
                </p>
            </div>
               <Comment />
        </div>
            </>
    )
}

export default ACNHKlingels;
