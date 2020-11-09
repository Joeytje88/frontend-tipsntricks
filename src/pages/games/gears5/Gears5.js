import React from "react";
import Gears_5 from "../../../assets/afbeeldingen/Gears_5.png"
import Navigation from "../../../components/navbar/Navigation";
import Image from "../../../components/image/Image";
import {Link} from "react-router-dom";
import Gears_5_Play from "../../../assets/afbeeldingen/Gears5_Play.png";
import Gears_5_tips from "../../../assets/afbeeldingen/Gears5_tips.png";

const Gears5 = () =>{
    return (
        <>
        <Navigation/>
    <div className="game-page">
        <div className="game-description">
            <img
                alt="Gears 5"
                src={Gears_5}
                className="games-img"/>

            <p className="paragraaf"><strong>Gears 5</strong>
                <p><strong>ontwikkelaar:</strong> The Iniative</p>
                <p><strong>uitgever:</strong> Xbox Game Studios</p>
                <p><strong>release: </strong>6 september 2019 </p>
                <p><strong>platforms:</strong> pc, Xbox One</p></p>
        </div>

    <div className="tipsntrick">
        <Link to="/gears-5/samenspelen"
              className="link-item">
            <Image
                alt="Gears 5 samensen"
                link={Gears_5_Play}
                className="optional-img"
                name="Op zoek naar teamgenoten?"/>
        </Link>
        <Link to="/gears-5/tips"
              className="link-item">
            <Image
                alt="Gears 5 tips"
                link={Gears_5_tips}
                className="optional-img"
                name="Zit je ergens vast in de singleplayer? Of heb je nog goede tips?"/>
        </Link>
    </div>

    </div>

        </>
    )
}

export default Gears5;
