import React from 'react';
import Days_Gone_screenshots
    from "../../../assets/afbeeldingen/Days_Gone_screenshots.png";
import Comment from "../../../components/comment/Comment";
import Navigation from "../../../components/navbar/Navigation";

const DGscreenshots = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={Days_Gone_screenshots}
                         alt="Days Gone screenshots"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>De mooie omgevingen/ screenshots van Days Gone</h3>
                    <p>Days Gone is zo'n game waarbij je jezelf geregeld zult betrappen op het bekijken van de omgeving. Gelukkig
                        is het mogelijk om deze vast te leggen met de fotomodus. Deel deze foto's vooral in de reacties!
                    </p>
                </div>

             <Comment />
            </div>
        </>
    )
}

export default DGscreenshots;
