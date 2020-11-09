import React from "react";
import '../games.css';
import Image from '../../../components/image/Image';
import {Link} from "react-router-dom";
import Ghost_of_Tsushima from '../../../assets/afbeeldingen/Ghost_of_Tsushima .png';
import Ghost_of_Tsushima_screenshots from '../../../assets/afbeeldingen/Ghost_of_Tsushima_screenshots.png';
import Ghost_of_Tsushima_legends from '../../../assets/afbeeldingen/Ghost_of_Tsushima_legends.png';
import Ghost_of_tsushima_Top from '../../../assets/afbeeldingen/Ghost_of_Tsushima_Top.png';
import Navigation from "../../../components/navbar/Navigation";



const GhostofTsushima = () => {

    return (
            <>
                <Navigation/>
                <div className="game-description">
                    <img
                        alt="Ghost of Tsushima"
                        src={Ghost_of_Tsushima}
                        className="games-img"/>

                        <div className="paragraaf">Ghost of Tsushima
                            <p>ontwikkelaar: Sucker Punch</p>
                            <p>uitgever: Sony</p>
                            <p> release: 19 juli 2020 </p>
                            <p>platforms: PlayStation 4</p></div>
                </div>

                <div className="tipsntrick">
                    <Link exact to="/ghost-of-tsushima/screenshots"
                          className="link-item">
                        <Image
                            alt="Ghost of Tsushima screenshots"
                            link={Ghost_of_Tsushima_screenshots}
                            className="optional-img"
                            name="De mooiste screenshots van Ghost of Tsushima"/>
                    </Link>
                    <Link to="/ghost-of-tsushima/singleplayer"
                          className="link-item">
                        <Image
                            alt="Ghost of Tsushima Top"
                            link={Ghost_of_tsushima_Top}
                            className="optional-img"
                            name="Zit je ergens vast in de singleplayer?"/>
                    </Link>
                </div>
                <div className="extra-img">
                    <Link exact to="/ghost-of-tsushima/legends"
                          className="link-item">
                        <Image
                            alt="Ghost of Tsushima Legends"
                            link={Ghost_of_Tsushima_legends}
                            className="optional-img"
                            name="Zoek een co-op maatje voor Legends"/>
                    </Link>
                </div>
            </>
        )
    }

    export default GhostofTsushima;
