import React from "react";
import HyperScape_loadout from "../../../assets/afbeeldingen/HyperScape_loadout.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";


const HyperScapeLoadout = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={HyperScape_loadout}
                     alt="HyperScape loadout"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Jouw favoriete HyperScape loadout</h3>
                <p>Loadouts in HyperScape zijn natuurlijk niet standaard te kiezen, maar moet je die zien te vinden. Welke combinatie
                    van wapens gebruik jij het liefst in HyperScape? En waar vind je deze over het algemeen?
                </p>
            </div>
               <Comment />
        </div>
            </>
    )
}
export default HyperScapeLoadout;
