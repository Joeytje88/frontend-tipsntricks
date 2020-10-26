import Ghost_of_Tsushima_legends from '../../../assets/afbeeldingen/Ghost_of_Tsushima_legends.png';
import React from "react";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const GotLegends = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Ghost_of_Tsushima_legends}
                     alt="Ghost of Tsushima Legends"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ghost of Tsushima legends samenspelen?</h3>
                <p>Later dit najaar zal Ghost of Tsushima worden voorzien van een co-op modus door middel van de Legends uitbreiding.
                    Ben je op zoek naar mensen om deze co-op missies mee te spelen? Deel hier dan alvast je PSN, zodat je straks meteen
                    aan de slag kunt!
                </p>
            </div>
               <Comment />

        </div>
            </>
    )
}
export default GotLegends;
