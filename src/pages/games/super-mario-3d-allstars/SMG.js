import React from "react";
import SuperMarioGalaxy
    from "../../../assets/afbeeldingen/SuperMarioGalaxy.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const SMG = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={SuperMarioGalaxy}
                         alt="Super Mario Galaxy"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Heb je nog handige tips voor Super Mario Galaxy?</h3>
                    <p>Heb je nog handige tips voor Super Mario Galaxy? Of loop je ergens vast en weet je jezelf geen raad meer?
                        Deel hier al je tips/ vragen met onze community!
                    </p>
                </div>
                <Comment/>
            </div>
        </>
    )
}

export default SMG;
