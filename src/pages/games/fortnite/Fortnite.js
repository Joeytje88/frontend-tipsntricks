import React from "react";
import Image from "../../../components/image/Image";
import {Link} from "react-router-dom";
import Fortnite_img
    from "../../../assets/afbeeldingen/Fortnite_img.png";
import Fortnite_samenspelen
    from "../../../assets/afbeeldingen/Fortnite_samenspelen.png";
import Fortnite_loadout from  '../../../assets/afbeeldingen/Fortnite_loadout.png';
import Navigation from "../../../components/navbar/Navigation";
import "../games.css"

const Fortnite = () =>{
    return (
        <>
            <Navigation/>
            <div className="game-page">
                <div className="game-description">
                <img
                    alt="Fortnite"
                    src={Fortnite_img}
                    className="games-img"/>

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
