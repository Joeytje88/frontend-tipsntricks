import React from "react";
import Animal_Crossing_New_Horizons_samenspelen
from '../../../assets/afbeeldingen/Animal_Crossing_New_Horizons_samenspelen.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const ACNHPlay = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Animal_Crossing_New_Horizons_samenspelen}
                     alt="Animal Crossing New Horizons samenspelen"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben je op zoek naar andere Animal Crossing spelers? </h3>
                <p>In Animal Crossing: New Horizons kun je op elkaars eiland bezoeken. Niet alleen om knollen te verkopen,
                    maar ook om DIY's te ruilen of om inspiratie op te doen voor je eigen eiland. Op zoek naar iemand om
                    elkaars eiland te bezoeken? Laat hieronder dan je vriendcode achter!
                </p>
            </div>>
                <Comment />
        </div>
            </>
    )
}

export default ACNHPlay;
