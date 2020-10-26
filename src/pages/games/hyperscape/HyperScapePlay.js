import React from "react";
import HyperScape_samenspelen from "../../../assets/afbeeldingen/HyperScape_samenspelen.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const HyperScapePlay = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={HyperScape_samenspelen}
                     alt="HyperScape samen spelen"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij op zoek naar teamgenoten?</h3>
                <p>In HyperScape is teamplay erg belangrijk. Echter gebeurt het vaak genoeg
                    dat als je met randoms gaat spelen
                    er niet of nauwelijks gecommuniceerd wordt. Mocht je daar ook vaak last van hebben, kun je eventueel
                    hier je PSN ID/ gamertag achterlaten om af te spreken met andere leden van onze community.
                </p>
            </div>
            <Comment />
        </div>
            </>
    )
}
export default HyperScapePlay;
