import React from 'react'
import ZeldaBotW1 from '../../../assets/afbeeldingen/ZeldaBotW1.png';
import Navigation from "../../../components/navbar/Navigation";
import Image from "../../../components/image/Image";
import ZeldaBotWTips from '../../../assets/afbeeldingen/ZeldaBotWTips.png';
import {Link} from "react-router-dom";
import ZeldaBotWscreenshot from '../../../assets/afbeeldingen/ZeldaBotWscreenshot.png';


const ZeldaBotW = () =>{
return (
    <>
    <Navigation/>
    <div className="game-page">
        <div className="game-description">
            <div className="games-img">
                <Image
                    alt="Zelda Breath of the Wild"
                    link={ZeldaBotW1}/>
            </div>
            <p className="paragraaf">The Legend of Zelda: Breath of the Wild
                <p>ontwikkelaar: Nintendo</p>
                <p>uitgever: Nintendo</p>
                <p>release: 3 maart 2017</p>
                <p>platforms: Nintendo Switch</p></p>
        </div>
        <div className="tipsntrick">
            <Link to="/breath-of-the-wild/tips">
                <Image
                    alt="The Legend of Zelda Breath of the Wild tips"
                    link={ZeldaBotWTips}
                    className="optional-img"
                    name="Heb je nog handige tips voor the Last of Us Part 2?"/>
            </Link>
            <Link to="/breath-of-the-wild/screenshots">
                <Image
                    alt="The Legend of Zelda Breath of the Wild screenshots"
                    link={ZeldaBotWscreenshot}
                    className="optional-img"
                    name="Deel hier jouw screenshots van Breath of the Wild"/>
            </Link>

        </div>
    </div>
    </>
)
}
export default ZeldaBotW;
