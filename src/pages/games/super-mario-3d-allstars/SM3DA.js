import React from "react";
import '../games.css';
import Image from '../../../components/image/Image';
import {Link} from "react-router-dom";
import SuperMario3D from "../../../assets/afbeeldingen/SuperMario3D.png";
import SuperMarioGalaxy
    from "../../../assets/afbeeldingen/SuperMarioGalaxy.png";
import SuperMario64
    from "../../../assets/afbeeldingen/SuperMario64.png";
import SuperMarioSunshine
    from "../../../assets/afbeeldingen/SuperMarioSunshine.png";
import Navigation from "../../../components/navbar/Navigation";

const SM3DA =() => {
    return (
        <>
            <Navigation/>
            <div className="game-page">
                <div className="game-description">
                    <div className="games-img">
                        <Image
                            alt="Super Mario 3D All-Stars"
                            link={SuperMario3D}/>
                    </div>
                    <p className="paragraaf">Super Mario 3D All-Stars
                        <p>ontwikkelaar: Nintendo</p>
                        <p>uitgever: Nintendo</p>
                        <p> release: 18 september 2020</p>
                        <p>platforms: Nintendo Switch</p></p>
                </div>
            </div>

            <div className="tipsntrick">
                <Link to="/super-mario-3d-allstars/64"
                      className="link-item">
                    <Image
                        alt="Super Mario 64 tips"
                        link={SuperMario64}
                        className="optional-img"
                        name="Heb je nog tips of vragen over Super Mario 64?"/>
                </Link>
                <Link to="/super-mario-3d-allstars/sunshine"
                      className="link-item">
                    <Image
                        alt="Super Mario Sunshine"
                        link={SuperMarioSunshine}
                        className="optional-img"
                        name="Heb je nog tips of vragen over Super Mario Sunshine?"/>
                </Link>
                <Link to="/super-mario-3d-allstars/galaxy"
                      className="link-item">
                    <Image
                        alt="super Mario Galaxy"
                        link={SuperMarioGalaxy}
                        className="center-img"
                        name="Heb je nog tips of vragen over Super Mario Galaxy?"/>
                </Link>
            </div>
        </>
    )
}

export default SM3DA;
