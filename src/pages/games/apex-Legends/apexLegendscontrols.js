import React from "react";
import Apex_Legends_controls from "../../../assets/afbeeldingen/Apex_Legends_controls.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const ApexLegendsControls = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Apex_Legends_controls}
                     alt="Apex Legens Controls"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Heb je nog handige tips voor de controls van Apex Legends?</h3>
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

export default ApexLegendsControls;
