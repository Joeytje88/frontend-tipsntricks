import React from "react";
import Image from "../../../components/image/Image";
import {Link} from "react-router-dom";
import FIFA_21 from '../../../assets/afbeeldingen/FIFA_21.png';
import FIFA_21_play from '../../../assets/afbeeldingen/FIFA_21_Play.png';
import FIFA_21_Volta from '../../../assets/afbeeldingen/FIFA_21_Volta.png';
import FIFA_21_FUT from '../../../assets/afbeeldingen/FIFA_21_FUT.png';
import Navigation from "../../../components/navbar/Navigation";
import "../games.css"

const FIFA21 = () => {
    return (
        <>
            <Navigation/>
            <div className="game-page">
                <div className="game-description">
                    <img
                        alt="FIFA 21"
                        src={FIFA_21}
                        className="games-img"/>

                    <p className="paragraaf">FIFA 21
                        <p>ontwikkelaar: EA Sports</p>
                        <p>uitgever: EA</p>
                        <p> release: 9 oktober 2020</p>
                        <p>platforms: pc, PlayStation 4, Xbox One</p> </p>
                </div>


            <div className="tipsntrick">
                <Link to="/fifa-21/samenspelen"
                      className="link-item">
                    <Image
                        alt="FIFA 21 samenspelen"
                        link={FIFA_21_play}
                        className="optional-img"
                        name="Op zoek naar teammaatjes/ een geduchte tegenstander?"/>
                </Link>

                <Link to="/fifa-21/volta"
                      className="link-item">
                    <Image
                        alt="FIFA 21 Volta"
                        link={FIFA_21_Volta}
                        className="optional-img"
                        name="Heb jij nog tips voor Volta? Of wil je graag wat meer weten erover?"/>
                </Link>
            </div>
                <div className="extra-img">
                <Link exact to="/fifa-21/fut"
                      className="link-item">
                    <Image
                        alt="FIFA 21 FUT tips"
                        link={FIFA_21_FUT}
                        className="optional-img"
                        name="Heb jij vragen over FUT? Of juist goede tips?"/>
                </Link>
                </div>
            </div>
        </>
    )
}

export default FIFA21;
