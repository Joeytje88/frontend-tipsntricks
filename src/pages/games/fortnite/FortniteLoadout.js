import React from "react";
import Fortnite_loadout from  '../../../assets/afbeeldingen/Fortnite_loadout.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const FortniteLoadout = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Fortnite_loadout}
                     alt="Fortnite loadout"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Welke wapens gebruik jij het liefst in Fortnite?</h3>
                <p>Loadouts in Fortnite zijn natuurlijk niet standaard te kiezen, maar moet je die zien te vinden. Welke combinatie
                    van wapens gebruik jij het liefst in Fortnite? En waar vind je deze over het algemeen?
                </p>
            </div>
            <Comment />
        </div>
            </>
    )

}

export default FortniteLoadout;
