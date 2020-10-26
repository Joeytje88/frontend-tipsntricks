import React from "react";
import ZeldaBotWscreenshot from '../../../assets/afbeeldingen/ZeldaBotWscreenshot.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const ZBotWScreenshots = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={ZeldaBotWscreenshot}
                         alt="The Legend of Zelda Breath of the Wild screenshots"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Heb je nog vette screenshots van Breath of the Wild?!</h3>
                    <p>The Legend of Zelda: Breath of the Wild is een waanzinnig mooie game en wij zijn benieuwd naar jullie meest
                        actievolle screenshots. Deel ze vooral hieronder in de comments!
                    </p>
                </div>

                <Comment />
            </div>
        </>
    )
}

export default ZBotWScreenshots;
