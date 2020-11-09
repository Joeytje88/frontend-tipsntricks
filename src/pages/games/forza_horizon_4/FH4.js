import React from "react";
import Forza_Horizon_4 from "../../../assets/afbeeldingen/Forza_Horizon_4.png"
import Navigation from "../../../components/navbar/Navigation";
import Image from "../../../components/image/Image";
import {Link} from "react-router-dom";
import Forza_Horizon_4_Play from "../../../assets/afbeeldingen/Forza_Horizon_4_play.png";
import Forza_Horizon_4_Tips from "../../../assets/afbeeldingen/Forza_Horizon_4_Tips.png";

const FH4 = () =>{
    return (
        <>
            <Navigation/>
            <div className="game-page">
                <div className="game-description">
                        <img
                            alt="Forza Horizon 4"
                            src={Forza_Horizon_4}
                            className="games-img"/>

                    <div className="paragraaf"><strong>Forza Horizon 4</strong>
                        <p><strong>ontwikkelaar:</strong> Playground Games</p>
                        <p><strong>uitgever:</strong> Xbox Game Studios</p>
                        <p><strong>release:</strong> 28 september 2018 </p>
                        <p><strong>platforms:</strong> pc, Xbox One</p></div>
                </div>
            </div>

            <div className="tipsntrick">
                <Link to="/forza-horizon-4/samenspelen"
                      className="link-item">
                    <Image
                        alt="Forza Horizon 4 samenspelen"
                        link={Forza_Horizon_4_Play}
                        className="optional-img"
                        name="Op zoek naar teamgenoten?"/>
                </Link>
                <Link to="/forza-horizon-4/tips"
                      className="link-item">
                    <Image
                        alt="Forza Horizon 4 tips"
                        link={Forza_Horizon_4_Tips}
                        className="optional-img"
                        name="Zit je ergens vast in de singleplayer? Of heb je nog goede tips?"/>
                </Link>
            </div>
        </>
    )
}

export default FH4;
