import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './GamePage.css';
import FIFA21 from '../../assets/afbeeldingen/FIFA21.png';
import CallofDutyWarzoneModernWarfare from '../../assets/afbeeldingen/CallofDutyModernWarfareWarzone.jpg';
import F12020 from '../../assets/afbeeldingen/F12020.jpg';
import MarvelsAvengers from '../../assets/afbeeldingen/MarvelsAvengers.png';
import HyperScape from '../../assets/afbeeldingen/HyperScape.jpg';
import ApexLegends from '../../assets/afbeeldingen/ApexLegends.png';
import AnimalCrossingNewHorizons from '../../assets/afbeeldingen/AnimalCrossingNewHorizons.png'
import EscapeFromTarkov from '../../assets/afbeeldingen/EscapeFromTarkov.png';
import Fortnite from '../../assets/afbeeldingen/Fortnite.png';
import Grounded from '../../assets/afbeeldingen/Grounded.png'
import GhostofTsushima from '../../assets/afbeeldingen/GhostofTsushima.png';
import ProjectCars3 from '../../assets/afbeeldingen/ProjectCars3.png'
import Image from "../../components/image/Image";
import Navigation from "../../components/navbar/Navigation"



const Gamepage = (props) => {

    return (
        <>
            <Navigation/>
        <div className="homepage">
            <div className="games-container">
            <div className="games-title">
                <h1>Games</h1>
            </div>
            <div className="games">
               <Link exact to="/call-of-duty-warzone-modern-warfare">
                    <Image
                        className="game-img"
                        alt="Call of Duty Warzone/ Modern Warfare"
                        link={CallofDutyWarzoneModernWarfare}
                        name="Call of Duty Warzone/ Modern Warfare"/>
               </Link>

                <Link exact to="/f1-2020">
                         <Image
                             className="game-img"
                             alt="F1 2020"
                             link={F12020}
                             name="F1 2020"/>
                </Link>

                <Link exact to="/apex-legends/">
                        <Image
                            className="game-img"
                            alt="Apex Legends"
                            link={ApexLegends}
                            name="Apex Legends"/>
                    </Link>

                <Link exact to="/fortnite">
                    <Image
                        className="game-img"
                        alt="Fortnite"
                        link={Fortnite}
                        name="Fortnite"/>
                </Link>

                <Link exact to="/marvels-avengers">
                    <Image
                        className="game-img"
                        alt="Marvel Avengers"
                        link={MarvelsAvengers}
                        name="Marvel's Avengers"/>
                </Link>

                <Link exact to="/hyperscape">
                    <Image
                        className="game-img"
                        alt="HyperScape"
                        link={HyperScape}
                        name="HyperScape"/>
                </Link>

                <Link exact to="/fifa-21">
                <Image
                    className="game-img"
                    alt="FIFA 21"
                    link={FIFA21}
                    name="FIFA 21"/>
                </Link>

                <Link exact to="/fifa-21/volta">
                    <Image
                        className="game-img"
                        alt="FIFA 21 volta"
                        link={EscapeFromTarkov}
                        name="Escape from Tarkov"/>
                </Link>

                <Link exact to="/animal-crossing-new-horizons">
                    <Image
                        className="game-img"
                        alt="Animal Crossing New Horizons"
                        link={AnimalCrossingNewHorizons}
                        name="Animal Crossing: New Horizons"/>
                </Link>

                <Link exact to="/ghost-of-tsushima">
                    <Image
                        className="game-img"
                        alt="Ghost of Tsushima"
                        link={GhostofTsushima}
                        name="Ghost of Tsushima"/>
                </Link>

                <Link exact to="/grounded">
                    <Image
                        className="game-img"
                        alt="grounded"
                        link={Grounded}
                        name="Grounded"/>
                </Link>

                <Link exact to="/project-cars-3">
                    <Image
                        className="game-img"
                        alt="Project Cars 3"
                        link={ProjectCars3}
                        name="Project Cars 3"/>
                </Link>
            </div>
        </div>
    </div>
</>
    )
}
export default Gamepage;
