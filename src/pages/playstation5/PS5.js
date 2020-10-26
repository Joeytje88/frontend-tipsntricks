import React from "react";
import comingsoon from "../../assets/afbeeldingen/comingsoon.png"
import "./PS5.css"
import Navigation from "../../components/navbar/Navigation";

const PlayStation5 = ()=>{
    return(
        <div className="coming-soon">
            <Navigation/>
            <div className="coming-soon-page">
        <img
            className="coming-soon-img"
            alt="komt binnenkort"
            src={comingsoon}
           />
            </div>
        </div>



    )
}

export default PlayStation5;
