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
                        <img
                            alt="Super Mario 3D All-Stars"
                            src={SuperMario3D}
                            className="games-img"/>
                    <div className="paragraaf"><strong>Super Mario 3D All-Stars</strong>
                        <p><strong>ontwikkelaar:</strong> Nintendo</p>
                        <p><strong>uitgever:</strong> Nintendo</p>
                        <p><strong>release:</strong> 18 september 2020</p>
                        <p><strong>platforms:</strong> Nintendo Switch</p></div>
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
            </div>
              <div className="extra-img">
                <Link to="/super-mario-3d-allstars/galaxy"
                      className="link-item">
                    <Image
                        alt="super Mario Galaxy"
                        link={SuperMarioGalaxy}
                        className="center-img"
                        name="Heb je nog tips of vragen over Super Mario Galaxy?"/>
                </Link>
             </div>
        </div>

        </>
    )
}

export default SM3DA;
