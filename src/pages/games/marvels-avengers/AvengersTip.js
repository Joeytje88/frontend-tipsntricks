import React from "react";
import Marvels_Avengers_tips from "../../../assets/afbeeldingen/Marvels_Avengers_tips.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const AvengersTip = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
        <div className="topic-image">
        <img src={Marvels_Avengers_tips}
             alt="Marvel's Avengers tips"
    className="game-topic-img"/>
        </div>
    <div className="topic-text">
        <h3>Handige tips voor Marvel's Avengers</h3>
        <p>Heb jij nog overige tips voor Marvel's Avengers? Zoals tips over welke vaardigheden je het beste bij een bepaald
            personage kunt ontgrendelen of hoe je een bepaalde vijand het beste kunt uitschakelen? Laat het dan weten in de reacties!
        </p>
    </div>
    <Comment />
</div>
            </>
    )
}
export default AvengersTip;
