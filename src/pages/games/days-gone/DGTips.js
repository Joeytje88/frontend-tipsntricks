import React from "react";
import Dreams_tips
    from "../../../assets/afbeeldingen/Dreams_tips.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const DGTips = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={Dreams_tips}
                         alt="Dreams tips"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Heb je nog handige tips voor Dreams</h3>
                    <p>Heb je nog handige tips voor Dreams? Of loop je ergens vast en weet je jezelf geen raad meer?
                        Deel hier al je tips/ vragen met onze community!
                    </p>
                </div>
                <Comment/>
            </div>
        </>
    )
}

export default DGTips;
