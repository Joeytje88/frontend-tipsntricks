import React from "react";
import '../games.css';
import Image from '../../../components/image/Image';
import {Link} from "react-router-dom";
import Days_Gone from "../../../assets/afbeeldingen/DaysGone.png";
import Days_Gone_screenshots
    from "../../../assets/afbeeldingen/Days_Gone_screenshots.png";
import Days_Gone_tips
    from "../../../assets/afbeeldingen/Days_Gone_tips.png";
import Navigation from "../../../components/navbar/Navigation";

const DaysGone =() => {
    return (
        <>
            <Navigation/>
            <div className="game-page">
                <div className="game-description">
                        <img
                            alt="Days Gone"
                            src={Days_Gone}
                            className="games-img"/>

                    <p className="paragraaf">Days Gone
                        <p>ontwikkelaar: Sony Bend</p>
                        <p>uitgever: Sony</p>
                        <p> release: 26 april 2020</p>
                        <p>platforms: pc, PlayStation 4, Xbox One</p></p>
                </div>
            </div>

            <div className="tipsntrick">
                <Link to="/days-gone/tips">
                    <Image
                        alt="Days Gone tips"
                        link={Days_Gone_tips}
                        name="Heb je nog handige tips voor Days Gone?"/>
                </Link>
                <Link to="/days-gone/screenshots">
                    <Image
                        alt="Days Gone screenshots"
                        link={Days_Gone_screenshots}
                        name="Heb je vette screenshots in Days Gone gemaakt?"/>
                </Link>

            </div>
        </>
    )
}

export default DaysGone;
