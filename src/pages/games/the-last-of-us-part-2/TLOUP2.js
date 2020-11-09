import React from "react";
import '../games.css';
import Image from '../../../components/image/Image';
import {Link} from "react-router-dom";
import Last_of_Us_Part_2 from "../../../assets/afbeeldingen/Last_of_Us_Part_2.png";
import Last_of_Us_Part_2_collect
    from "../../../assets/afbeeldingen/Last_of_Us_Part_2_collect.png";
import Last_of_Us_Part_2_survival
    from "../../../assets/afbeeldingen/Last_of_Us_Part_2_survival.png";
import Navigation from "../../../components/navbar/Navigation";

const TLOUP2 =() => {
    return (
        <>
            <Navigation/>
        <div className="game-page">
                <div className="game-description">
                        <img
                            alt="The Last of Us Part 2"
                            src={Last_of_Us_Part_2}
                            className="games-img"/>
                    <p className="paragraaf">The Last of Us Part 2
                        <p>ontwikkelaar: Naughty Dog</p>
                        <p>uitgever: Sony</p>
                        <p> release: 19 juni 2020</p>
                        <p>platforms: pc, PlayStation 4, Xbox One</p></p>
                </div>


            <div className="tipsntrick">
                <Link to="/the-last-of-us-part-2/tips"
                      className="link-item">
                    <Image
                        alt="The Last of Us Part 2 tips"
                        link={Last_of_Us_Part_2_survival}
                        className="optional-img"
                        name="Heb je nog handige tips voor the Last of Us Part 2?"/>
                </Link>
                <Link to="/the-last-of-us-part-2/collectibles"
                      className="link-item">
                    <Image
                        alt="The last of Us Part 2 collectibles"
                        link={Last_of_Us_Part_2_collect}
                        className="optional-img"
                        name="Heb je moeite met het zoeken naar de collectibles van The Last of Us Part 2"/>
                </Link>

            </div>
        </div>
        </>
    )
}

export default TLOUP2;
