import React from "react";
import Call_of_Duty_Modern_Warfare_Warzone_samenspelen
    from "../../../assets/afbeeldingen/Call_of_Duty_Modern_Warfare_Warzone_samenspelen.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const CoDPlay = () => {

    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Call_of_Duty_Modern_Warfare_Warzone_samenspelen}
                     alt="Call of Duty Modern Warfare Warzone samenspelen"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij op zoek naar teamgenoten?</h3>
                <p>In Call of Duty Warzone en Modern Warfare is teamplay erg belangrijk. Echter gebeurt het vaak genoeg dat als je met randoms gaat spelen
                    er niet of nauwelijks gecommuniceerd wordt. Mocht je daar ook vaak last van hebben, kun je eventueel hier je PSN ID/ gamertag of Activision ID achterlaten
                    of afspreken met andere leden van onze community.
                </p>
            </div>
            <div className="comments">
                <Comment/>
            </div>
        </div>
            </>
    )
}
export default CoDPlay;
