import React from "react";
import Forza_Horizon_4_Tips from '../../../assets/afbeeldingen/Forza_Horizon_4_Tips.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const FH4Tips = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={Forza_Horizon_4_Tips}
                         alt="Forza Horizon 4 tips"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Heb je nog meer tips voor Forza Horizon 4?</h3>
                    <p>Heb je nog handige tips voor Forza Horizon 4? Of loop je ergens vast en weet je jezelf geen raad meer?
                        Deel hier al je tips/ vragen met onze community!
                    </p>
                </div>
                <Comment />
            </div>
        </>
    )
}

export default FH4Tips;
