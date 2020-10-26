import React from "react";
import Apex_Legends_loadout from "../../../assets/afbeeldingen/Apex_Legends_loadout.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const ApexLegendsLoadout = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Apex_Legends_loadout}
                     alt="Apex Legends Loadout"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij op zoek naar teamgenoten?</h3>
                <p>Loadouts in Apex zijn natuurlijk niet standaard te kiezen, maar moet je die zien te vinden. Welke combinatie
                    van wapens gebruik jij het liefst in Apex Legends? En welke attachments horen daarbij?
                </p>
            </div>
               <Comment />
        </div>
            </>
    )

}

export default ApexLegendsLoadout;
