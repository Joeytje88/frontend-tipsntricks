import React from "react";
import Call_of_Duty_Modern_Warfare_Warzone_controls
    from "../../../assets/afbeeldingen/Call_of_Duty_Modern_Warfare_Warzone_controls.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";
const CoDControls = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Call_of_Duty_Modern_Warfare_Warzone_controls}
                     alt="Call of Duty Modern Warfare Warzone controls"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Heb jij nog handige tips voor de controls?</h3>
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


export default CoDControls;
