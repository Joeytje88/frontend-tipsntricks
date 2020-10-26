import React from "react";
import Animal_Crossing_New_Horizons_knollen
    from "../../../assets/afbeeldingen/Animal_Crossing_New_Horizons_knollen.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const ACNHKnollen = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Animal_Crossing_New_Horizons_knollen}
                     alt="Animal Crossing New Horizons knollen"
                     className="game-topic-img"/>

            </div>
            <div className="topic-text">
                <h3>Heb jij dubbele DIY's? Wellicht kun je ze aan iemand verkopen/ geven!</h3>
                <p>In Animal Crossing: New Horizons kun je op verschillende manieren aan DIY's (Do It Yourself) komen.
                    Zo kun je bijvoorbeeld aan andere eilandbewonders vragen wanneer zij bezig zijn met het maken van
                    een item,
                    door ze te kopen in de winkel of het stadshuis of met een beetje mazzel schiet je ze uit de lucht in
                    de balonnen
                    die over het eiland zweven. Heb je nou toevallig dubbele DIY's? Dan kun je ze hier met andere leden
                    van onze community
                    ruilen of verkopen.
                </p>
            </div>
               <Comment />
        </div>
            </>
    )
}
export default ACNHKnollen;
