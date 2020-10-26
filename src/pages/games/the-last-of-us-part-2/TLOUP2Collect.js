import React from "react";
import Last_of_Us_Part_2_collect
    from "../../../assets/afbeeldingen/Last_of_Us_Part_2_collect.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const TLOUP2Collect = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={Last_of_Us_Part_2_collect}
                         alt="The Last of Us Part 2 collectibles"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Heb je niet alle collectibles weten te vinden?</h3>
                    <p>Ben je nog op zoek naar collectibles en weet je niet meer waar je moet beginnen? Of heb je een handige
                        manier gevonden om ze op te zoeken? Deel het vooral met de community.
                    </p>
                </div>
                <Comment/>
            </div>
        </>
    )
}

export default TLOUP2Collect;
