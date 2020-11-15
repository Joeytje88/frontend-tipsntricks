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
                <img
                    alt="Zelda Breath of the Wild"
                    src={ZeldaBotW1}
                    className="games-img"/>

            <div className="paragraaf"><strong>The Legend of Zelda: Breath of the Wild</strong>
                <p>  <strong>ontwikkelaar:</strong> Nintendo</p>
                <p>  <strong>uitgever:</strong> Nintendo</p>
                <p>  <strong>release:</strong> 3 maart 2017</p>
                <p>  <strong>platforms:</strong> Nintendo Switch</p></div>
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
