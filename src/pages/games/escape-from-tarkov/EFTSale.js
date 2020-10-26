import React from "react";
import Escape_from_Tarkov_verkooptips from "../../../assets/afbeeldingen/Escape_from_Tarkov_verkooptips.png"
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";


const EFTSale = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Escape_from_Tarkov_verkooptips}
                     alt="Escape from Tarkov verkooptips"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij op zoek naar teamgenoten?</h3>
                <p>In Call of Duty Warzone en Modern Warfare is teamplay erg belangrijk. Echter gebeurt het vaak genoeg dat als je met randoms gaat spelen
                    er niet of nauwelijks gecommuniceerd wordt. Mocht je daar ook vaak last van hebben, kun je eventueel hier je PSN ID/ gamertag of Activision ID achterlaten
                    of afspreken met andere leden van onze community.
                </p>
            </div>
             <Comment />
        </div>
            </>
    )
}

export default EFTSale;
