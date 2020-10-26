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
        <div className="games-img">
            <Image
                alt="Gears 5"
                link={Gears_5}/>
        </div>
            <p className="paragraaf">Gears 5
                <p>ontwikkelaar: The Iniative</p>
                <p>uitgever: Xbox Game Studios</p>
                <p> release: 6 september 2019 </p>
                <p>platforms: pc, Xbox One</p></p>
        </div>
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
        <Link to="/marvels-avengers/singleplayer"
              className="link-item">
            <Image
                alt="Marvel's Avengers singleplayer"
                link={Gears_5_tips}
                className="optional-img"
                name="Zit je ergens vast in de singleplayer?Of heb je nog goede tips?"/>
        </Link>
    </div>
            </>
    )
}

export default Gears5;
