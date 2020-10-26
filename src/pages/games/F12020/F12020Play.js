import React from "react";
import F1_2020_samenspelen from '../../../assets/afbeeldingen/F1_2020_samenspelen.jpg';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const F12020play = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={F1_2020_samenspelen}
                     alt="F1 2020 samenspelen"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij op zoek naar een geduchte tegenstander?</h3>
                <p>Het is altijd leuk om een potje F1 2020 online te spelen, maar vind je normaliter in de online omgeving weinig
                    geduchte tegenstanders? Of juist alleen maar tegenstanders van een hoger niveau? Dan kun je hier eventueel
                    op zoek gaan naar iemand die ditzelfde ervaart. Laat dus vooral je PSN/ gamertag / Steam account achter!
                </p>
            </div>
                <Comment />
        </div>
            <br/>
            </>
    )
}
export default F12020play;
