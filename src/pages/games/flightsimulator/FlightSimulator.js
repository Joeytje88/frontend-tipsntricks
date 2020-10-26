import React from 'react'
import Flight_Simulator_2020 from '../../../assets/afbeeldingen/Flight_Simulator_2020.png'
import Navigation from "../../../components/navbar/Navigation";
import Image from "../../../components/image/Image";
import Comment from "../../../components/comment/Comment";
import "../games.css";

const FlightSimulator = () => {
    return (
        <>
            <Navigation/>
            <div className="game-page">
                <div className="game-description">
                    <div className="games-img">
                        <Image
                            alt="Flight Simulator 2020"
                            link={Flight_Simulator_2020}/>
                    </div>
                    <p className="paragraaf">Flight Simulator
                        <p>ontwikkelaar: Asobo Studio</p>
                        <p>uitgever: Xbox Game Studios</p>
                        <p>release: 18 augustus 2020 </p>
                        <p>platforms: pc</p></p>
                </div>


            <h3>Heb je nog handige tips voor Flight Simulator 2020? Of wil je gewoon je ervaringen delen?
                Plaats dit dan in de reacties!</h3>
            <Comment/>
            </div>
        </>
    )
}

export default FlightSimulator;
