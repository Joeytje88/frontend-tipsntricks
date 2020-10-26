import React from "react";
import ZeldaBotWTips from '../../../assets/afbeeldingen/ZeldaBotWTips.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const ZBotWTips = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={ZeldaBotWTips}
                         alt="The Legend of Zelda Breath of the Wild tips"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Tips/ vragen over Breath of the Wild?!</h3>
                    <p>Tips zijn altijd welkom in deze community. Heb jij nog overige tips voor The Legend of Zelda: Breath
                        of the Wild? Of kom je ergens niet uit en wil je weten hoe je verder moet?
                        Laat het dan vooral in de reacties weten!
                    </p>
                </div>

              <Comment />
            </div>
        </>
    )
}

export default ZBotWTips;
