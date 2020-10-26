import React from "react";
import Animal_Crossing_New_Horizons_Diys from '../../../assets/afbeeldingen/Animal_Crossing_New_Horizons_Diys.png'
import Comment from "../../../components/comment/Comment";
import '../topics.css';
import Navigation from "../../../components/navbar/Navigation";

const ACNHDiy = (props) => {

    return (
        <>
            <Navigation/>
            <div className="topic-page">

        <img src={Animal_Crossing_New_Horizons_Diys}
             alt="Animal Crossing New Horizons Diys"
        className="game-topic-img"/>
            <div className="topic-text">
            <h3>Heb jij dubbele DIY's? Wellicht kun je ze aan iemand verkopen/ geven!</h3>
            <p>In Animal Crossing: New Horizons kun je op verschillende manieren aan DIY's (Do It Yourself) komen.
                Zo kun je bijvoorbeeld aan andere eilandbewonders vragen wanneer zij bezig zijn met het maken van een item,
                door ze te kopen in de winkel of het stadshuis of met een beetje mazzel schiet je ze uit de lucht in de balonnen
                die over het eiland zweven. Heb je nou toevallig dubbele DIY's? Dan kun je ze hier met andere leden van onze community
                ruilen of verkopen.
            </p>
            </div>
             <Comment />
        </div>
</>
    )
}
export default ACNHDiy;
