import React from "react";
import Image from "../../../components/image/Image";
import {Link} from "react-router-dom";
import Grounded1 from '../../../assets/afbeeldingen/Grounded1.png';
import Grounded_play from '../../../assets/afbeeldingen/Grounded_play.png';
import Grounded_survival from '../../../assets/afbeeldingen/Grounded_survival.png';
import Grounded_creaties from '../../../assets/afbeeldingen/Grounded_creaties.png';
import Grounded_tips from '../../../assets/afbeeldingen/Grounded_tips.png';
import Navigation from "../../../components/navbar/Navigation";
import '../games.css';

const Grounded = () => {
    return (
        <>
            <Navigation/>
        <div className="game-page">
                <div className="game-description">
                    <img
                        alt="Grounded"
                        src={Grounded1}
                        className="games-img"/>

                    <p className="paragraaf">Grounded
                        <p>ontwikkelaar: Obsidian Entertainment</p>
                        <p>uitgever: Xbox Game Studios</p>
                        <p> release: 28 juli 2020 (early access)</p>
                        <p>platforms: Xbox one</p> </p>
                </div>


            <div className="tipsntrick">
                <Link to="/grounded/samenspelen"
                      className="link-item">
                    <Image
                        alt="Grounded samenspelen"
                        link={Grounded_play}
                        className="game-img"
                        name="Op zoek naar teammaatjes/ een geduchte tegenstander?"/>
                </Link>
                <Link to="/grounded/creaties"
                className="link-item">
                    <Image
                        alt="Grounded creaties"
                        link={Grounded_creaties}
                        className="optional-img"
                        name="Toon hier je mooiste creaties"/>
                </Link>
                <Link to="/grounded/survival"
                      className="link-item">
                    <Image
                        alt="Grounded survival"
                        link={Grounded_survival}
                        className="optional-img"
                        name="Hoe kun je het best overleven in Grounded?"/>
                </Link>

                <Link exact to="/grounded/tips"
                      className="link-item">
                    <Image
                        alt="Grounded tips"
                        link={Grounded_tips}
                        className="optional-img"
                        name="Heb jij nog meer tips voor Grounded?"/>
                </Link>
            </div>
        </div>
        </>
    )
}


export default Grounded;
