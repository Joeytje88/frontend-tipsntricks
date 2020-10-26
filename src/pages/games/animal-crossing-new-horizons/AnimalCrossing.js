import React from "react";
import Image from "../../../components/image/Image";
import {Link} from "react-router-dom";
import Animal_Crossing_New_Horizons from '../../../assets/afbeeldingen/Animal_Crossing_New_Horizons.png';
import Animal_Crossing_New_Horizons_klingels
    from '../../../assets/afbeeldingen/Animal_Crossing_New_Horizons_klingels.png';
import Animal_Crossing_New_Horizons_DIY
    from "../../../assets/afbeeldingen/Animal_Crossing_New_Horizons_DIY.png";
import Animal_Crossing_New_Horizons_knollen
    from "../../../assets/afbeeldingen/Animal_Crossing_New_Horizons_knollen.png";
import Animal_Crossing_New_Horizons_samenspelen
    from '../../../assets/afbeeldingen/Animal_Crossing_New_Horizons_samenspelen.png';
import Navigation from "../../../components/navbar/Navigation";


const AnimalCrossing = () => {
    return (
        <>
            <Navigation/>
            <div className="game-page">
                <img
                    alt="Animal Crossing New Horizons"
                    src={Animal_Crossing_New_Horizons}
                    className="games-img"
                    />
                <div className="game-description">
                    <p className="paragraaf">Animal Crossing: New Horizons
                        <p>ontwikkelaar: Nintendo</p>
                        <p>uitgever: Nintendo</p>
                        <p>release: 20 maart 2020</p>
                        <p>platforms: Nintendo Switch</p> </p>
                </div>
            </div>

            <div className="tipsntrick">
                <Link to="/animal-crossing-new-horizons/samenspelen"
                className="link-item">
                    <Image
                        alt="Animal Crossing samenspelen"
                        link={Animal_Crossing_New_Horizons_samenspelen}
                        className="optional-img"
                        name="Wil je bij andere mensen op bezoek op jouw eiland of juist andere eilanden bezoeken?"/>
                </Link>
                <Link to="/animal-crossing-new-horizons/diy"
                      className="link-item">
                    <Image
                        alt="Animal Crossing New Horizon DIY"
                        link={Animal_Crossing_New_Horizons_DIY}
                        className="optional-img"
                        name="Heb je dubbele DIY's? Deel ze hier en wellicht maak je er een ander blij mee"/>
                </Link>
                <Link to="/animal-crossing-new-horizons/knollen"
                      className="link-item">
                    <Image
                        alt="Animal Crossing New Horizons knollen"
                        link={Animal_Crossing_New_Horizons_knollen}
                        className="optional-img"
                        name="Wat leveren de knollen op jouw eiland op?"/>
                </Link>

                <Link to="/animal-crossing-new-horizons/klingels"
                      className="link-item">
                    <Image
                        alt="Animal Crossing New Horizons"
                        link={Animal_Crossing_New_Horizons_klingels}
                        className="optional-img"
                        name="De makkelijkste en snelste manieren om knollen te verzamelen/"/>
                </Link>
            </div>
            </>
    )
}

export default AnimalCrossing;
