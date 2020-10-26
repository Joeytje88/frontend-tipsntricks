import React from "react";
import Project_Cars_3_play from '../../../assets/afbeeldingen/Project_Cars_3_play.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const PCars3Play = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Project_Cars_3_play}
                     alt="Project Cars 3 samenspelen"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij op zoek naar een geduchte tegenstander?</h3>
                <p>Het is altijd leuk om een potje Project Cars 3 online te spelen, maar vind je normaliter in de online omgeving weinig
                    geduchte tegenstanders? Of juist alleen maar tegenstanders van een hoger niveau? Dan kun je hier eventueel
                    op zoek gaan naar iemand die ditzelfde ervaart. Laat dus vooral je PSN/ gamertag / Steam account achter!
                </p>
            </div>
                <Comment />
        </div>
            </>
    )
}

export default PCars3Play;
