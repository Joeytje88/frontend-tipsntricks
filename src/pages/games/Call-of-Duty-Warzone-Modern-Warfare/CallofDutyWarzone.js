import React from "react";
import '../games.css';
import Image from '../../../components/image/Image';
import {Link} from "react-router-dom";
import Call_of_Duty_Warzone_Modern_Warfare from "../../../assets/afbeeldingen/Call_of_Duty_Warzone_Modern_Warfare.png";
import Call_of_Duty_Modern_Warfare_Warzone_samenspelen
    from "../../../assets/afbeeldingen/Call_of_Duty_Modern_Warfare_Warzone_samenspelen.png";
import Call_of_Duty_Modern_Warfare_Warzone_controls
    from "../../../assets/afbeeldingen/Call_of_Duty_Modern_Warfare_Warzone_controls.png";
import Call_of_Duty_Modern_Warfare_Warzone_Top
    from "../../../assets/afbeeldingen/Call_of_Duty_Modern_Warfare_Warzone_Top.png";
import Call_of_Duty_Modern_Warfare_loadouts
    from "../../../assets/afbeeldingen/Call_of_Duty_Modern_Warfare_loadouts.png";
import Navigation from "../../../components/navbar/Navigation";

const CallofDutyWarzone =() => {
    return (
        <>
            <Navigation/>
            <div className="game-page">
                <div className="game-description">
                <img
                    alt="Call of Duty Warzone/ Modern Warfare Season 5"
                    src={Call_of_Duty_Warzone_Modern_Warfare}
                    className="games-img"/>


                    <div className="paragraaf"><strong>Call of Duty Warzone / Modern Warfare</strong>
                        <p><strong>ontwikkelaar:</strong> Infinity Ward</p>
                        <p><strong>uitgever:</strong> Activision</p>
                        <p><strong>release:</strong> 25 oktober 2019</p>
                        <p><strong>platforms:</strong> pc, PlayStation 4, Xbox One</p></div>
                </div>


            <div className="tipsntrick">
                <Link to="/call-of-duty-warzone/samenspelen"
                      className="link-item">
                    <Image
                        alt="Controls CoDWarzone"
                        link={Call_of_Duty_Modern_Warfare_Warzone_samenspelen}
                        className="optional-img"
                        name="Op zoek naar teammaatjes?"/>
                </Link>
                <Link to="/call-of-duty-warzone-modern-warfare/controls"
                      className="link-item">
                    <Image
                        alt="Controls CoDWarzone"
                        link={Call_of_Duty_Modern_Warfare_Warzone_controls}
                        className="optional-img"
                        name="De beste tips voor besturing/controls"/>
                </Link>
                <Link to="/call-of-duty-warzone-modern-warfare/top"
                      className="link-item">
                    <Image
                        alt="Controls CoDWarzone"
                        link={Call_of_Duty_Modern_Warfare_Warzone_Top}
                        className="optional-img"
                        name="Deel hier jouw beste ervaringen"/>
                </Link>

                <Link to="/call-of-duty-modern-warfare-warzone/loadouts"
                      className="link-item">
                    <Image
                        alt="Controls CoDWarzone"
                        link={Call_of_Duty_Modern_Warfare_loadouts}
                        className="optional-img"
                        name="De beste loadouts"/>
                </Link>
            </div>
            </div>
        </>
    )
}

export default CallofDutyWarzone;
