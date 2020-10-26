import React from "react";
import Ghost_of_tsushima_singleplayer from '../../../assets/afbeeldingen/Ghost_of_Tsushima_singleplayer.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const GoTS = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Ghost_of_tsushima_singleplayer}
                     alt="Ghost of Tsushima singleplayer"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Loop je ergens vast in de singleplayer?</h3>
                <p>De combat in Ghost of Tsushima moet je eerst even onder de knie krijgen om het je eigen te maken. Is het echter niet de combat
                    maar iets anders waar je op vastloopt? Laat het hier dan vooral weten!
                </p>
            </div>

            <div className="comment-container">
              <Comment />
            </div>
        </div>
            </>
    )
}

export default GoTS;
