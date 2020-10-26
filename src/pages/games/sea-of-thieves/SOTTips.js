import React from "react";
import Sea_of_Thieves_Tips from '../../../assets/afbeeldingen/Sea_of_Thieves_Tips.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const SOTTips = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={Sea_of_Thieves_Tips}
                         alt="Sea of Thieves Tips"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Heb je nog meer tips voor Sea of Thieves?</h3>
                    <p>Heb je nog handige tips voor Sea of Thieves? Of loop je ergens vast en weet je jezelf geen raad meer?
                        Deel hier al je tips/ vragen met onze community!
                    </p>
                </div>
                <Comment />
            </div>
        </>
    )
}

export default SOTTips;
