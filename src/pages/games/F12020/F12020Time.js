import React from "react";
import F1_2020_time from '../../../assets/afbeeldingen/F1_2020_time.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const F12020Time = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={F1_2020_time}
                     alt="F1 2020 snelste rondes"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij een recordbreker?</h3>
                <p>De snelste ronde tijden rijden wordt natuurlijk een stuk leuker als je wat meer uitdaging hebt. Heb jij
                    op een bepaald circuit al de ronde tijden doen sneuvelen? Laat ons het dan weten en wellicht is er iemand
                    die dit record weer kan verbreken!
                </p>
            </div>
                <Comment />
        </div>
            </>
    )
}
export default F12020Time;
