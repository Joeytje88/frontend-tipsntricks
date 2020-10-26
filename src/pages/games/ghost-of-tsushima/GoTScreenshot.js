import React from 'react';
import Ghost_of_Tsushima_screenshots from '../../../assets/afbeeldingen/Ghost_of_Tsushima_screenshots.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const GoTScreenshot = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Ghost_of_Tsushima_screenshots}
                     alt="Ghost of Tsushima screenshots"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h3>De mooie omgevingen/ screenshots van Ghost of Tsushima</h3>
                <p>Ghost of Tsushima is zo'n game waarbij je jezelf geregeld zult betrappen op het bekijken van de omgeving. Gelukkig
                    is het mogelijk om deze vast te leggen met de fotomodus. Deel deze foto's vooral in de reacties!
                </p>
            </div>
               <Comment />
        </div>
            </>
    )
}

export default GoTScreenshot;
