import React from "react";
import Fortnite_samenspelen
    from "../../../assets/afbeeldingen/Fortnite_samenspelen.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const FortnitePlay = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Fortnite_samenspelen}
                     alt="Fortnite samenspelen"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij op zoek naar teamgenoten?</h3>
                <p>In Fortnite is teamplay erg belangrijk. Echter gebeurt het vaak genoeg dat als je met randoms gaat spelen
                    er niet of nauwelijks gecommuniceerd wordt. Mocht je daar ook vaak last van hebben, kun je eventueel hier je PSN ID/ gamertag of Activision ID achterlaten
                    of afspreken met andere leden van onze community.
                </p>
            </div>
            <Comment />
        </div>
            </>
    )

}

export default FortnitePlay;
