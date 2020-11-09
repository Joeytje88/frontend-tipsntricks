import React from "react";
import Image from "../../../components/image/Image";
import {Link} from "react-router-dom";
import HyperScape_img from "../../../assets/afbeeldingen/HyperScape_img.png";
import HyperScape_samenspelen from "../../../assets/afbeeldingen/HyperScape_samenspelen.png";
import HyperScape_loadout from "../../../assets/afbeeldingen/HyperScape_loadout.png";
import Navigation from "../../../components/navbar/Navigation";
import "../games.css";

const HyperScape = () => {
    return (
        <>
            <Navigation/>
            <div className="game-page">
                <div className="game-description">
                <img
                    alt="HyperScape"
                    src={HyperScape_img}
                    className="games-img"/>

                    <div className="paragraaf">HyperScape
                        <p>ontwikkelaar: Ubisoft Montreal</p>
                        <p>uitgever: Ubisoft</p>
                        <p> release: 11 augustus 2020</p>
                        <p>platforms: pc, PlayStation 4, Xbox One</p> </div>
                </div>

            <div className="tipsntrick">
                <Link to="/hyperscape/samenspelen"
                      className="link-item">
                    <Image
                        alt="HyperScape"
                        link={HyperScape_samenspelen}
                        className="optional-img"
                        name="Op zoek naar teammaatjes?"/>
                </Link>

                <Link exact to="/hyperscape/loadouts"
                      className="link-item">
                    <Image
                        alt="Beste loadout Hyperscape"
                        link={HyperScape_loadout}
                        className="optional-img"
                        name="De beste loadouts"/>
                </Link>
            </div>
            </div>
        </>
    )
}

export default HyperScape;
