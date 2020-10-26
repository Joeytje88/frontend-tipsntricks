import React from "react";
import Marvels_Avengers_singleplayer from '../../../assets/afbeeldingen/Marvels_Avengers_singleplayer.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const AvengersSingleplayer = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Marvels_Avengers_singleplayer}
                     alt="Marvel's Avengers singleplayer"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Loop je ergens vast in de singleplayer?</h3>
                <p>Lukt het je maar niet om door dat ene level te komen? Of heb je juist tips voor de singleplayer? Deel ze dan
                    vooral met de community!
                </p>
            </div>
              <Comment />
            </div>
            </>
    )
}
export default AvengersSingleplayer;
