import React from 'react'
import Navigation from "../../components/navbar/Navigation";
import Image from "../../components/image/Image";
import Headsets from "../../assets/afbeeldingen/Headsets.png";
import Comment from "../../components/comment/Comment";
import "./Hardware.css";

const Headset = ()=>{
    return(
        <>
            <Navigation/>
            <div className="hardware-container">
            <div className="hardware-img">
            <Image
                link={Headsets}
                alt="Headsets"/>
            </div>
            <h3>Heb je tips/ vragen over welke headset je het beste kunt halen?</h3>

            <p className="">Ben je van mening dat jij de headset hebt? Deel hier dan vooral je ervaringen
                met de community</p>

            <Comment/>
            <br/>
            </div>
        </>

    )
}

export default Headset;
