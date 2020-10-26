import React from "react";
import '../games.css';
import Image from '../../../components/image/Image';
import {Link} from "react-router-dom";
import Dreams_ from "../../../assets/afbeeldingen/Dreams_.png";
import Dreams_creaties
    from "../../../assets/afbeeldingen/Dreams_creaties.png";
import Dreams_tips
    from "../../../assets/afbeeldingen/Dreams_tips.png";
import Navigation from "../../../components/navbar/Navigation";

const Dreams =() => {
    return (
        <>
            <Navigation/>
            <div className="game-page">
                <div className="game-description">
                    <div className="games-img">
                        <Image
                            alt="Dreams"
                            link={Dreams_}/>
                    </div>
                    <p className="paragraaf">Dreams
                        <p>ontwikkelaar: Media Molecule</p>
                        <p>uitgever: Sony</p>
                        <p> release: 14 februari 2020</p>
                        <p>platforms: PlayStation 4</p></p>
                </div>
            </div>

            <div className="tipsntrick">
                <Link to="/dreams/tips"
                      className="link-item">
                    <Image
                        alt="Dreams tips"
                        link={Dreams_tips}
                        className="optional-img"
                        name="Heb je nog handige tips voor Days Gone?"/>
                </Link>
                <Link to="/dreams/screenshots"
                      className="link-item">
                    <Image
                        alt="Dreams creaties"
                        link={Dreams_creaties}
                        className="optional-img"
                        name="Heb je vette creaties in Dreams gemaakt?"/>
                </Link>

            </div>
        </>
    )
}

export default Dreams;
