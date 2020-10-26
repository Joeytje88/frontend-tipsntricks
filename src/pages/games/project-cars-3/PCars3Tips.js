import React from "react";
import Project_Cars_3_tips from '../../../assets/afbeeldingen/Project_Cars_3_tips.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const PCars3Tips = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Project_Cars_3_tips}
                     alt="Project Cars 3 tips"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Overige tips Project Cars 3</h3>
                <p>Tips zijn altijd welkom in deze community. Heb jij nog overige tips voor Project Cars 3? Of kom je ergens niet uit
                    en wil je weten hoe? Laat het dan vooral in de reacties weten!
                </p>
            </div>
                <Comment />
        </div>
            </>
    )
}

export default PCars3Tips;
