import React from "react";
import Last_of_Us_Part_2_survival
    from "../../../assets/afbeeldingen/Last_of_Us_Part_2_survival.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const TLOUP2Tips = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={Last_of_Us_Part_2_survival}
                         className="game-topic-img"
                         alt="the Last of Us Part 2 tips"/>
                </div>
                <div className="topic-text">
                    <h3>Heb je nog handige tips voor The Last of Us Part 2</h3>
                    <p>Heb je nog handige tips voor The Last of Us Part 2? Of loop je ergens vast en weet je jezelf geen raad meer?
                        Deel hier al je tips/ vragen met onze community!
                    </p>
                </div>
            <Comment/>
            </div>
        </>
    )
}

export default TLOUP2Tips;
