import React from 'react'
import Among_Us from '../../../assets/afbeeldingen/Among_Us.png'
import Navigation from "../../../components/navbar/Navigation";
import Image from "../../../components/image/Image";
import Comment from "../../../components/comment/Comment";

const InsurgencySandStorm = () => {
    return (
        <>
            <Navigation/>
            <div className="game-page">
                <div className="game-description">
                    <div className="games-img">
                        <Image
                            alt="Among Us"
                            link={Among_Us}/>
                    </div>
                    <p className="paragraaf">Among Us
                        <p>ontwikkelaar: New World Interactive</p>
                        <p>uitgever: Focus Home Interactive</p>
                        <p>release: 12 december 2018 </p>
                        <p>platforms: pc</p></p>
                </div>
            <h3>Ben je op zoek naar gamers om Insurgency Sandstorm mee te spelen? Laat het hier dan weten in de reacties!</h3>
            <Comment/>
            </div>
        </>
    )
}

export default InsurgencySandStorm;
