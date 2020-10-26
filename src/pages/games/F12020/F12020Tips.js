import React from "react";
import F1_2020_tips from '../../../assets/afbeeldingen/F1_2020_tips.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const F12020Tips = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={F1_2020_tips}
                     alt="F1 2020 tips"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Nog meer tips voor F1 2020?</h3>
                <p>Tips zijn altijd welkom in deze community. Heb jij nog overige tips voor F1 2020? Of kom je ergens niet uit
                    en wil je weten hoe? Laat het dan vooral in de reacties weten!
                </p>
            </div>
              <Comment />
        </div>
            </>
    )
}
export default F12020Tips;
