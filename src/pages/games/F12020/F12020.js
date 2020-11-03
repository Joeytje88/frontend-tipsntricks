import React from "react";
import Image from "../../../components/image/Image";
import {Link} from "react-router-dom";
import F1_2020_tips from '../../../assets/afbeeldingen/F1_2020_tips.png';
import F1_2020 from '../../../assets/afbeeldingen/F1_2020.jpg'
import F1_2020_samenspelen from '../../../assets/afbeeldingen/F1_2020_samenspelen.jpg';
import Navigation from "../../../components/navbar/Navigation";

const F12020 = () => {
    return (
        <>
            <Navigation/>
            <div className="game-page">
                <div className="game-description">
                <div className="games-img">
                    <Image
                        alt="F1 2020"
                        link={F1_2020}/>
                </div>

                    <p className="paragraaf">F1 2020
                        <p>ontwikkelaar: Codemasters</p>
                        <p>uitgever: Koch Media</p>
                        <p> release: 10 juli 2020</p>
                        <p>platforms: pc, PlayStation 4, Xbox One</p> </p>
                </div>
            </div>

            <div className="tipsntrick">
                <Link to="/f1-2020/samenspelen"
                      className="link-item">
                    <Image
                        alt="F1 2020 samenspelen"
                        link={F1_2020_samenspelen}
                        className="optional-img"
                        name="Op zoek naar teammaatjes/ een geduchte tegenstander?"/>
                </Link>

                <Link exact to="/f1-2020/tips"
                      className="link-item">
                    <Image
                        alt="F1 2020 tips"
                        link={F1_2020_tips}
                        className="optional-img"
                        name="Heb jij nog handige tips voor F1 2020? Of juist vragen over bepaalde dingen?"/>
                </Link>
            </div>
        </>
    )
}
export default F12020;
