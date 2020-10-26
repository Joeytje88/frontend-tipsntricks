import React from "react";
import Gears5_Play from '../../../assets/afbeeldingen/Gears5_Play.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const Gears5play = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={Gears5_Play}
                         alt="Marvel's Avengers samenspelen"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Ben jij op zoek naar teamgenoten/ een geduchte tegenstander?</h3>
                    <p>In Call of Duty Warzone en Modern Warfare is teamplay erg belangrijk. Echter gebeurt het vaak genoeg
                        dat als je met randoms gaat spelen
                        er niet of nauwelijks gecommuniceerd wordt. Mocht je daar ook vaak last van hebben, kun je eventueel
                        hier je PSN ID/ gamertag of Activision ID achterlaten
                        of afspreken met andere leden van onze community.
                    </p>
                </div>

                <div className="comment-container">
                   <Comment />
                </div>
            </div>
        </>
    )
}
export default Gears5play;
