import React from "react";
import Ghost_of_Tsushima_Top from '../../../assets/afbeeldingen/Ghost_of_Tsushima_Top.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const GoTTop = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Ghost_of_Tsushima_Top}
                     alt="Ghost of Tsushima ervaringen"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Je beste momenten in Ghost of Tsushima</h3>
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

export default GoTTop;
