import React from "react";
import Apex_Legends_samenspelen from '../../../assets/afbeeldingen/Apex_Legends_samenspelen.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const ApexLegendsPlay = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Apex_Legends_samenspelen}
                     alt="Apex Legends"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij op zoek naar teamgenoten?</h3>
                <p>In Apex Legends is teamplay erg belangrijk. Echter gebeurt het vaak genoeg dat als je met randoms gaat spelen
                    er niet of nauwelijks gecommuniceerd wordt. Mocht je daar ook vaak last van hebben, kun je eventueel hier je PSN ID/ gamertag of Activision ID achterlaten
                    of afspreken met andere leden van onze community.
                </p>
            </div>
             <Comment />
        </div>
            </>
    )

}

export default ApexLegendsPlay;
