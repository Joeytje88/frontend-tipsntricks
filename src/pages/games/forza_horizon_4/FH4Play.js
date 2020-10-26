import React from "react";
import Forza_Horizon_4_play from '../../../assets/afbeeldingen/Forza_Horizon_4_play.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const FH4Play = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={Forza_Horizon_4_play}
                         alt="Marvel's Avengers samenspelen"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Ben jij op zoek naar teamgenoten/ geduchte tegenstander?</h3>
                    <p>Racen in Forza Horizon 4 is nog leuker als je een beetje geduchte tegenstanders hebt, toch? Ben je
                        op zoek naar een uitdaging? Deel dan vooral je gamertag!
                    </p>
                </div>
                <Comment />
            </div>
        </>
    )
}
export default FH4Play;
