import React from 'react'
import Navigation from "../../components/navbar/Navigation";
import Comment from "../../components/comment/Comment";
import PC_mouse_keyboard from "../../assets/afbeeldingen/PC_mouse_keyboard.png";
import Image from "../../components/image/Image";

const MuisTB = ()=>{
    return(
        <>
            <Navigation/>
            <div className="games-img">
            <Image
                link={PC_mouse_keyboard}
                alt="Muis en toetsenbord"/>
            </div>
        <h3>Heb je tips/ vragen over welke muis en/ of toetsenbord je het beste kunt halen?</h3>

            <p>Ben je van mening dat jij de beste muis en/ of toetsenbord hebt? Deel hier dan vooral je ervaringen
            met de community</p>

            <Comment/>
            </>
    )
}

export default MuisTB;
