import React from "react";
import Dreams_tips from '../../../assets/afbeeldingen/Dreams_tips.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const DreamsTips = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={Dreams_tips}
                         alt="Dreams creaties"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Deel hier jouw Dreams tip(s)!</h3>
                    <p>Dreams is zo'n game waarin je jezelf helemaal kwijt kunt raken. Heb je nog goede tips voor de community
                        of vragen? Deel dat hier dan met de community.
                    </p>
                </div>
                <Comment/>
            </div>
        </>
    )
}

export default DreamsTips;
