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
                    <div className="games-img">
                        <Image
                            alt="Forza Horizon 4"
                            link={Forza_Horizon_4}/>
                    </div>
                    <p className="paragraaf">Forza Horizon 4
                        <p>ontwikkelaar: Playground Games</p>
                        <p>uitgever: Xbox Game Studios</p>
                        <p> release: 28 september 2018 </p>
                        <p>platforms: pc, Xbox One</p></p>
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
