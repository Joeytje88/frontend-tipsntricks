import React from "react";
import apexLegends from '../../../assets/afbeeldingen/ApexLegends.png'
import Image from "../../../components/image/Image";
import {Link} from "react-router-dom";
import Apex_Legends_top from '../../../assets/afbeeldingen/Apex_Legends_top.png';
import Apex_Legends_loadout from '../../../assets/afbeeldingen/Apex_Legends_loadout.png';
import Apex_Legends_samenspelen from '../../../assets/afbeeldingen/Apex_Legends_samenspelen.png';
import Navigation from "../../../components/navbar/Navigation";
import "../games.css"


const ApexLegends = () => {
    return (
        <>
            <Navigation/>
        <div className="game-page">
            <div className="game-description">
        <img
            alt="Apex Legends"
            src={apexLegends}
            className="games-img"/>

            <div className="paragraaf">
                <strong>Apex Legends</strong>
                <p><strong>ontwikkelaar:</strong> Respawn Entertainment</p>
                <p><strong>uitgever:</strong> EA</p>
                <p><strong>release:</strong> 4 februari 2019</p>
                <strong>platforms:</strong> pc, PlayStation 4, Xbox One</div>
            </div>

            <div className="tipsntrick">
                <Link to="/apex-legends/samenspelen"
                      className="link-item">
                    <Image
                        alt="Apex Legends samenspelen"
                        link={Apex_Legends_samenspelen}
                        name="Op zoek naar teammaatjes?"/>
                </Link>

                <Link to="/apex-legends/top"
                      className="link-item">
                    <Image
                        alt="Apex Legends ervaringen"
                        link={Apex_Legends_top}
                        name="Deel hier jouw beste ervaringen"/>
                </Link>
            </div>
            <div
                className="extra-img">
                <Link to="/apex-legends/loadout"
                      className="link-item">
                    <Image
                        alt="Apex Legends loadouts"
                        link={Apex_Legends_loadout}
                        name="De beste loadouts"/>
                </Link>
            </div>
        </div>
</>


    )

}
export default ApexLegends;
