import React from "react";
import Gears5_tips from '../../../assets/afbeeldingen/Sea_of_Thieves_Tips.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const Gears5Tips = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={Gears5_tips}
                         alt="Gears 5 tips"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Heb je nog handige tips voor Gears 5</h3>
                    <p>Heb je nog handige tips voor Gears 5? Of loop je ergens vast en weet je jezelf geen raad meer?
                        Deel hier al je tips/ vragen met onze community!
                    </p>
                </div>
                <Comment />
            </div>
        </>
    )
}

export default Gears5Tips;
