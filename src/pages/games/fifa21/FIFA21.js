import React from "react";
import Image from "../../../components/image/Image";
import {Link} from "react-router-dom";
import FIFA_21 from '../../../assets/afbeeldingen/FIFA_21.png';
import FIFA_21_play from '../../../assets/afbeeldingen/FIFA_21_Play.png';
import FIFA_21_Volta from '../../../assets/afbeeldingen/FIFA_21_Volta.png';
import FIFA_21_FUT from '../../../assets/afbeeldingen/FIFA_21_FUT.png';
import FIFA_21_Controls from '../../../assets/afbeeldingen/FIFA_21_Controls.jpg';
import Navigation from "../../../components/navbar/Navigation";

const FIFA21 = () => {
    return (
        <>
            <Navigation/>
            <div className="game-page">
                <div className="game-description">
                <div className="games-img">
                    <Image
                        alt="FIFA 21"
                        link={FIFA_21}/>
                </div>

                    <p className="paragraaf">FIFA 21
                        <p>ontwikkelaar: EA Sports</p>
                        <p>uitgever: EA</p>
                        <p> release: 9 oktober 2020</p>
                        <p>platforms: pc, PlayStation 4, Xbox One</p> </p>
                </div>
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
                <Link to="/f1-2020/controls"
                      className="link-item">
                    <Image
                        alt="FIFA 21 controls"
                        link={FIFA_21_Controls}
                        className="optional-img"
                        name="De beste tips voor besturing/controls"/>
                </Link>
                <Link to="/fifa-21/volta"
                      className="link-item">
                    <Image
                        alt="FIFA 21 Volta"
                        link={FIFA_21_Volta}
                        className="optional-img"
                        name="Heb jij nog tips voor Volta? Of wil je graag wat meer weten erover?"/>
                </Link>

                <Link exact to="/fifa-21/fut"
                      className="link-item">
                    <Image
                        alt="FIFA 21 FUT tips"
                        link={FIFA_21_FUT}
                        className="optional-img"
                        name="Heb jij vragen over FUT? Of juist goede tips?"/>
                </Link>
            </div>
        </>
    )
}

export default FIFA21;
