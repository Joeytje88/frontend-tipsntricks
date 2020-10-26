import React from "react";
import Escape_from_Tarkov_controlls from "../../../assets/afbeeldingen/Escape_from_Tarkov_controlls.png"
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const EFTControls = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Escape_from_Tarkov_controlls}
                     alt="Escape from Tarkov controls"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij op zoek naar teamgenoten?</h3>
                <p>Controls worden vaak voor lief genomen, maar bepalen eigenlijk de manier waarop je speelt. Je kunt namelijk
                    diverse functies veranderen waardoor het bijvoorbeeld nog soepeler wordt om te mikken of juist minder soepel als
                    bij bijvoorbeeld een sniper rifle, waardoor je nog preciezer kunt schieten. Denk jij de ideale controls-instellingen
                    te hebben? Laat het dan vooral weten!
                </p>
            </div>
                <Comment />
        </div>
            </>
    )
}

export default EFTControls;
