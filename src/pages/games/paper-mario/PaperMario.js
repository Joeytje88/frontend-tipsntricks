import React from 'react'
import PaperMarioOrigamiKing from '../../../assets/afbeeldingen/PaperMarioOrigamiKing.png'
import Navigation from "../../../components/navbar/Navigation";
import Image from "../../../components/image/Image";
import Comment from "../../../components/comment/Comment";

const PaperMario = () => {
    return (
        <>
            <Navigation/>
            <div className="game-page">
                <div className="game-description">
                    <div className="games-img">
                        <Image
                            alt="Paper Mario: The Origami King"
                            link={PaperMarioOrigamiKing}/>
                    </div>
                    <p className="paragraaf">Paper Mario: The Origami King
                        <p>ontwikkelaar: Nintendo</p>
                        <p>uitgever: Nintendo</p>
                        <p>release: 18 juli 2020</p>
                        <p>platforms: Nintendo Switch</p></p>
                </div>
            </div>

            <h3>Heb je vragen of tips over Paper Mario: the Origami King? Deel deze dan hier!</h3>
            <Comment/>
</>
            )
}

export default PaperMario;
