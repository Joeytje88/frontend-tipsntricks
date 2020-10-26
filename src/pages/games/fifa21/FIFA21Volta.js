import React from "react";
import FIFA_21_Volta from '../../../assets/afbeeldingen/FIFA_21_Volta.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const FIFA21Volta = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={FIFA_21_Volta}
                     alt="FIFA 21 Volta"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Heb je nog tips voor Volta?</h3>
                <p>FIFA Volta is een relatief nieuwe feature die bij FIFA 20 voor het eerst geïntroduceerd werd. Heb je vragen
                    over deze modus? Of juist een goede tip? Laat het vooral weten in de reacties!
                </p>
            </div>
             <Comment />
        </div>
            </>
    )
}

export default FIFA21Volta;
