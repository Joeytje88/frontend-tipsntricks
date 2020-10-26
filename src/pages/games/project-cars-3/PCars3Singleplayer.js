import React from "react";
import Project_Cars_3_singleplayer from '../../../assets/afbeeldingen/Project_Cars_3_singleplayer.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const PCars3Singleplayer = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Project_Cars_3_singleplayer}
                     alt="Project Cars 3 singleplayer"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Loop je ergens vast in de singleplayer?</h3>
                <p>Project Cars 3 heeft wat veranderingen doorgevoerd, maar gelukkig is de uitgebreide singleplayer gebleven. Echter kan het zijn
                    dat je in een bepaalde race maar niet weet te slagen. Schroom vooral niet om het met de community te delen! Ook niet
                    als je gewoon een goede tip hebt.
                </p>
            </div>
             <Comment />
        </div>
            </>
    )
}

export default PCars3Singleplayer;
