import React from "react";
import Grounded_tips from '../../../assets/afbeeldingen/Grounded_tips.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";
const GroundedTips = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Grounded_tips}
                     className="game-topic-img"
                     alt="Grounded Tips"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij op zoek naar teamgenoten?</h3>
                <p>In Call of Duty Warzone en Modern Warfare is teamplay erg belangrijk. Echter gebeurt het vaak genoeg
                    dat als je met randoms gaat spelen
                    er niet of nauwelijks gecommuniceerd wordt. Mocht je daar ook vaak last van hebben, kun je eventueel
                    hier je PSN ID/ gamertag of Activision ID achterlaten
                    of afspreken met andere leden van onze community.
                </p>
            </div>
              <Comment />
        </div>
            </>
    )
}

export default GroundedTips;
