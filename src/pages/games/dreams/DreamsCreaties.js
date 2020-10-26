import React from "react";
import Dreams_creaties from '../../../assets/afbeeldingen/Dreams_creaties.png';
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const DreamsCreaties = () => {
    return (
        <>
            <Navigation/>
            <div className="topic-page">
                <div className="topic-image">
                    <img src={Dreams_creaties}
                         alt="Dreams creaties"
                         className="game-topic-img"/>
                </div>
                <div className="topic-text">
                    <h3>Deel hier jouw Dreams creatie(s)!</h3>
                    <p>In Dreams kun je de meest uiteenlopende creaties maken. Van grote huizen tot torenhoge gebouwen. Heb jij
                        iets unieks gebouwd? Deel het dan vooral in de reacties!
                    </p>
                </div>
                <Comment/>
            </div>
        </>
    )
}

export default DreamsCreaties;
