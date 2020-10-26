import React from "react";
import Image from "../../../components/image/Image";
import {Link} from "react-router-dom";
import Fortnite_img
    from "../../../assets/afbeeldingen/Fortnite_img.png";
import Fortnite_samenspelen
    from "../../../assets/afbeeldingen/Fortnite_samenspelen.png";
import Fortnite_controls from '../../../assets/afbeeldingen/Fortnite_controls.jpg';
import Fortnite_top
    from "../../../assets/afbeeldingen/Fortnite_top.png";
import Fortnite_loadout from  '../../../assets/afbeeldingen/Fortnite_loadout.png';
import Navigation from "../../../components/navbar/Navigation";
import "../games.css"

const Fortnite = () =>{
    return (
        <>
            <Navigation/>
            <div className="game-page">
                <div className="game-description">
                <div className="games-img">
                <Image
                    alt="Fortnite"
                    link={Fortnite_img}/>
                </div>

                    <p className="paragraaf">Fortnite
                        <p>ontwikkelaar: Epic Games</p>
                        <p>uitgever: Epic Games</p>
                        <p> release: 27 juli 2017</p>
                        <p>platforms: pc, PlayStation 4, Xbox One</p> </p>
                </div>
            </div>

            <div className="tipsntrick">
                <Link to="/fortnite/samenspelen"
                      className="link-item">
                    <Image
                        alt="Fortnite"
                        link={Fortnite_samenspelen}
                        className="optional-img"
                        name="Op zoek naar teammaatjes?"/>
                </Link>
                <Link to="/fortnite/controls"
                      className="link-item">
                    <Image
                        alt="Fortnite controls"
                        link={Fortnite_controls}
                        className="optional-img"
                        name="De beste tips voor besturing/controls"/>
                </Link>
                <Link to="/fortnite/top"
                      className="link-item">
                    <Image
                        alt="Fortnite"
                        link={Fortnite_top}
                        className="optional-img"
                        name="Deel hier jouw beste ervaringen"/>
                </Link>

                <Link exact to="/fortnite/loadout"
                      className="link-item">
                    <Image
                        alt="Fortnite"
                        link={Fortnite_loadout}
                        className="optional-img"
                        name="De beste loadouts"/>
                </Link>
            </div>
        </>
    )
}
export default Fortnite;
