import React from "react";
import apexLegends from '../../../assets/afbeeldingen/ApexLegends.png'
import Image from "../../../components/image/Image";
import {Link} from "react-router-dom";
import Apex_Legends_top from '../../../assets/afbeeldingen/Apex_Legends_top.png';
import Apex_Legends_controls from '../../../assets/afbeeldingen/Apex_Legends_controls.png';
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
                <div className="games-img">
        <Image
            alt="Apex Legends"
            link={apexLegends}/>
                </div>
            <p className="paragraaf">
                Apex Legends
                <p>ontwikkelaar: Respawn Entertainment</p>
            <p>uitgever: EA</p>
            <p> release: 4 februari 2019</p>
            platforms: pc, PlayStation 4, Xbox One</p>
            </div>
        </div>
            <div className="tipsntrick">
                <Link to="/apex-legends/samenspelen"
                      className="link-item">
                    <Image
                        alt="Apex Legends samenspelen"
                        link={Apex_Legends_samenspelen}
                        className="optional-img"
                        name="Op zoek naar teammaatjes?"/>
                </Link>
                <Link to="/apex-legends/controls"
                      className="link-item">
                    <Image
                        alt="Controls Apex Legends"
                        link={Apex_Legends_controls}
                        className="optional-img"
                        name="De beste tips voor besturing/controls"/>
                </Link>
                <Link to="/apex-legends/top"
                      className="link-item">
                    <Image
                        alt="Apex Legends ervaringen"
                        link={Apex_Legends_top}
                        className="optional-img"
                        name="Deel hier jouw beste ervaringen"/>
                </Link>

                <Link to="/apex-legends/loadout"
                      className="link-item">
                    <Image
                        alt="Apex Legends loadouts"
                        link={Apex_Legends_loadout}
                        className="optional-img"
                        name="De beste loadouts"/>
                </Link>
            </div>
</>


    )

}
export default ApexLegends;
