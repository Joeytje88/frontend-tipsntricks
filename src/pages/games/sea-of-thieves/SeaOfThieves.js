import React from "react";
import Image from "../../../components/image/Image";
import {Link} from "react-router-dom";
import Sea_of_Thieves from '../../../assets/afbeeldingen/Sea_of_Thieves.png';
import Sea_of_Thieves_Arena from '../../../assets/afbeeldingen/Sea_of_Thieves_Arena.png';
import Sea_of_Thieves_screenshots from '../../../assets/afbeeldingen/Sea_of_Thieves_screenshots.png';
import Sea_of_Thieves_Play from '../../../assets/afbeeldingen/Sea_of_Thieves_Play.png';
import Sea_of_Thieves_Tips from '../../../assets/afbeeldingen/Sea_of_Thieves_Tips.png';
import Navigation from "../../../components/navbar/Navigation";
import '../games.css';

const SeaOfThieves = () => {
    return (
        <>
            <Navigation/>
            <div className="game-page">
                <div className="game-description">
                    <div className="games-img">
                        <Image
                            alt="Sea Of Thieves"
                            link={Sea_of_Thieves}/>
                    </div>

                    <p className="paragraaf">Sea of Thieves
                        <p>ontwikkelaar: Rare</p>
                        <p>uitgever: Xbox Game Studios</p>
                        <p> release: 20 april 2017</p>
                        <p>platforms: pc, Xbox One</p> </p>
                </div>
            </div>

            <div className="tipsntrick">
                <Link to="/sea-of-thieves/samenspelen"
                      className="link-item">
                    <Image
                        alt="Sea of Thieves samenspelen"
                        link={Sea_of_Thieves_Play}
                        className="game-img"
                        name="Op zoek naar teammaatjes/ een geduchte tegenstander?"/>
                </Link>
                <Link to="/sea-of-thieves/arena"
                      className="link-item">
                    <Image
                        alt="Sea of Thieves Arena"
                        link={Sea_of_Thieves_Arena}
                        className="optional-img"
                        name="Heb je handige tips voor in de Arena?"/>
                </Link>
                <Link to="/sea-of-thieves/tips"
                      className="link-item">
                    <Image
                        alt="Sea of Thieves Tips"
                        link={Sea_of_Thieves_Tips}
                        className="optional-img"
                        name="Loop je ergens vast? Of heb je juist goede tips?"/>
                </Link>

                <Link exact to="/sea-of-thieves/screenshots"
                      className="link-item">
                    <Image
                        alt="Sea of Thieves Screenshots"
                        link={Sea_of_Thieves_screenshots}
                        className="optional-img"
                        name="Deel hier jouw mooiste screenshots van Sea of Thieves!"/>
                </Link>
            </div>
        </>
    )
}


export default SeaOfThieves;
