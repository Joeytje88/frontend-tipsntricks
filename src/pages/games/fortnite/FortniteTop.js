import React from "react";
import Fortnite_samenspelen from "../../../assets/afbeeldingen/Fortnite_samenspelen.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const FortniteTop = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Fortnite_samenspelen}
                     alt="Fortnite samenspelen"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Je beste Fortnite momenten</h3>
                <p>Het is altijd leuk om ervaringen te delen. Vooral door die bitterzoete herrineringen aan die ene overwinning of dat moment
                    waarop alles verloren leek, maar je toch het tij hebt doen laten keren. Deel hier vooral screenshots, video's of
                    een omschrijving van die gebeurtenissen!
                </p>
            </div>
            <Comment />
        </div>
            </>
    )

}

export default FortniteTop;
