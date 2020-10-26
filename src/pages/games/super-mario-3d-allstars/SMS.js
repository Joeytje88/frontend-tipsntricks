import React from "react";
import SuperMarioSunshine
    from "../../../assets/afbeeldingen/SuperMarioSunshine.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const SMS = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={SuperMarioSunshine}
                         alt="Super Mario Sunshine"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Heb je nog handige tips voor Super Mario Sunshine?</h3>
                    <p>Heb je nog handige tips voor Super Mario Sunshine? Of loop je ergens vast en weet je jezelf geen raad meer?
                        Deel hier al je tips/ vragen met onze community!
                    </p>
                </div>
                <Comment/>
            </div>
        </>
    )
}

export default SMS;
