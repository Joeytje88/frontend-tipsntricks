import React from 'react'
import Navigation from "../../components/navbar/Navigation";
import Image from "../../components/image/Image";
import Headsets from "../../assets/afbeeldingen/Headsets.png";
import Comment from "../../components/comment/Comment";

const pc = () =>{
    return(
        <>
            <Navigation/>
            <div className="hardware-container">
                <div className="hardware-img">
                    <Image
                        link={Headsets}
                        alt="Headsets"/>
                </div>
                <h3>De beste manier om een pc samen te stellen?</h3>

                <p className="">Ben je van plan een game-pc te bouwen, maar weet je niet waar je moet beginnen. Of
                    heb je er zelf een gebouwt en wil je jouw ervaringen delen Laat dat vooral weten in de reacties</p>
                <Comment/>
                <br/>
            </div>
            </>
    )
}

export default pc;
