import React from "react";
import SuperMario64
    from "../../../assets/afbeeldingen/SuperMario64.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const SM64 = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={SuperMario64}
                         alt="Super Mario 64?"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Heb je nog handige tips voor Super Mario 64?</h3>
                    <p>Heb je nog handige tips voor Super Mario 64? Of loop je ergens vast en weet je jezelf geen raad meer?
                        Deel hier al je tips/ vragen met onze community!
                    </p>
                </div>
                <Comment/>
            </div>
        </>
    )
}

export default SM64;
