import React from "react";
import Call_of_Duty_Modern_Warfare_loadouts
    from "../../../assets/afbeeldingen/Call_of_Duty_Modern_Warfare_loadouts.png";
import Navigation from "../../../components/navbar/Navigation";
import Comment from "../../../components/comment/Comment";

const CoDLoadouts = () => {
    return (
        <>
            <Navigation/>
        <div className="topic-page">
            <div className="topic-image">
                <img src={Call_of_Duty_Modern_Warfare_loadouts}
                     alt="Call of Duty Warzone/ Modern Warfare loadouts"
                     className="game-topic-img"/>
            </div>
            <div className="topic-text">
                <h2>De beste loadouts</h2>
                <p>Je loadout in Call of Duty Modern Warfare en Warzone is misschien wel doorslaggevend om de winst te behalen.
                    Nadeel is dat de wapens om de zoveel tijd worden gebuffd op generfed. Welke wapens zijn er op dit moment het beste
                    om te kiezen? En welke attachments doe je erop?
                </p>
            </div>
                <Comment />
        </div>
            </>
    )
}

export default CoDLoadouts;
