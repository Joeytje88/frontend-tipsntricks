import React from "react";
import FIFA_21_FUT from "../../../assets/afbeeldingen/FIFA_21_FUT.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const FIFA21Fut = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={FIFA_21_FUT}
                     alt="FIFA 21 FUT"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>FIFA FUT Tips</h3>
                <p>FUT is een modus waarbij je jouw meest ideale team kunt samenstellen. Echter kan deze modus overweldigend zijn.
                    Kom je er niet uit? Laat het dan vooral weten! Of heb je juist tips voor FUT? Ook dan ben je hier op het juiste adres!
                </p>
            </div>
            <Comment />
        </div>
            </>
    )
}

export default FIFA21Fut;
