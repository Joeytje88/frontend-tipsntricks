import React from "react";
import FIFA_21_play from "../../../assets/afbeeldingen/FIFA_21_Play.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const FIFA21Controls = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={FIFA_21_play}
                     alt="FIFA 21 controls"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>Ben jij op zoek naar teamgenoten?</h3>
                <p>Controls worden vaak voor lief genomen, maar bepalen eigenlijk de manier waarop je speelt. Je kunt namelijk
                    diverse functies veranderen waardoor het bijvoorbeeld nog soepeler wordt om te mikken, te dribbelen of op doel te schieten Denk jij de ideale controls-instellingen
                    te hebben? Laat het dan vooral weten!
                </p>
            </div>
                <Comment />
        </div>
            </>
    )
}

export default FIFA21Controls;
