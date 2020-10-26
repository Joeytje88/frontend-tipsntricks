import React from 'react';
import Navigation from "../../components/navbar/Navigation";
import Image from "../../components/image/Image";
import Race_stuurtjes from "../../assets/afbeeldingen/Race_stuurtjes.png";
import Comment from "../../components/comment/Comment";

const Racewheel = ()=>{
    return(
        <>
            <Navigation/>
            <div className="games-img">
            <Image
                link={Race_stuurtjes}
                alt="Muis en toetsenbord"/>
            </div>
            <h3>Heb je tips/ vragen over welke racestuurtjes je het beste kunt halen?</h3>

            <p>Ben je van mening dat jij de beste racestuurtje hebt? Deel hier dan vooral je ervaringen
                met de community</p>

            <Comment/>
            </>
    )
}

export default Racewheel;
