import React from "react";
import Sea_of_Thieves_screenshots from '../../../assets/afbeeldingen/Sea_of_Thieves_screenshots.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const SOTScreenshots = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={Sea_of_Thieves_screenshots}
                         alt="Sea of Thieves screenshots"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Jouw mooiste Sea of Thieves screenshots</h3>
                    <p>Sea of Thieves is een game die van een rustig vaartje een heel avontuur kan veranderen.
                        Heb je een gave screenshot die dat avontuur goed in beeld brengen? Deel dat vooral in de reacties!
                    </p>
                </div>
                <Comment/>
            </div>
        </>
    )
}
export default SOTScreenshots;
