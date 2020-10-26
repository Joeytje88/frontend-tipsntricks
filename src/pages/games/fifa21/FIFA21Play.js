import React from "react";
import FIFA_21_play from '../../../assets/afbeeldingen/FIFA_21_Play.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const FIFA21Play = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={FIFA_21_play}
                     alt="FIFA 21 samen spelen"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij op zoek naar een geduchte tegenstander?</h3>
                <p>Het is altijd leuk om een potje FIFA online te spelen, maar vind je normaliter in de online omgeving weinig
                    geduchte tegenstanders? Of juist alleen maar tegenstanders van een hoger niveau? Dan kun je hier eventueel
                    op zoek gaan naar iemand die ditzelfde ervaart. Laat dus vooral je PSN/ gamertag / Origin account achter!
                </p>
            </div>
            <Comment />
        </div>
            </>
    )
}

export default FIFA21Play;
