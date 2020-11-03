import React from "react";
import Image from "../../../components/image/Image";
import {Link} from "react-router-dom";
import Escape_from_Tarkov from "../../../assets/afbeeldingen/Escape_from_Tarkov.png";
import Escape_from_Tarkov_samenspelen from "../../../assets/afbeeldingen/Escape_from_Tarkov_samenspelen.png";
import Escape_from_Tarkov_controlls from "../../../assets/afbeeldingen/Escape_from_Tarkov_controlls.png";
import Escape_from_Tarkov_top from "../../../assets/afbeeldingen/Escape_from_Tarkov_top.png";
import Escape_from_Tarkov_verkooptips from "../../../assets/afbeeldingen/Escape_from_Tarkov_verkooptips.png";
import Navigation from "../../../components/navbar/Navigation";

const EscapeFromTarkov= () => {
    return (
        <>
            <Navigation/>
            <div className="game-page">

                <Image
                    alt="Escape from Tarkov"
                    link={Escape_from_Tarkov}
                    className="games-img"/>
                <div className="game-description">
                    <p className="paragraaf">Escape from Tarkov
                        <p>ontwikkelaar: Battlestate Games</p>
                        <p>uitgever: Battlestate Games</p>
                        <p> release: 27 juli 2017</p>
                        <p>platforms: pc</p> </p>
                </div>
            </div>

            <div className="tipsntrick">
                <Link to="/escape-from-tarkov/samenspelen"
                      className="link-item">
                    <Image
                        alt="Escape from Tarkov samenspelen"
                        link={Escape_from_Tarkov_samenspelen}
                        className="optional-img"
                        name="Op zoek naar teammaatjes?"/>
                </Link>
                <Link to="/escape-from-tarkov/controls"
                      className="link-item">
                    <Image
                        alt="Controls Escape from Tarkov"
                        link={Escape_from_Tarkov_top}
                        className="optional-img"
                        name="De beste tips voor besturing/tips"/>
                </Link>
            </div>
        </>
    )
}

export default EscapeFromTarkov;
