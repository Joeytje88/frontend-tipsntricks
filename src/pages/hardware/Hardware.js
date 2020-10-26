import React from "react";
import '../games/topics.css';
import Navigation from "../../components/navbar/Navigation";
import PlatformSection from "../../components/platformSection/platformSection";
import {gameSectionFour, gameSectionOne, gameSectionThree, gameSectionTwo} from "./Data";



const Hardware = () => {
    return (
        <>
            <Navigation/>
        <div className="hardware-page">
    <h2>Hardware tips</h2>

            <PlatformSection {...gameSectionOne}/>
            <PlatformSection {...gameSectionTwo}/>
            <PlatformSection {...gameSectionThree}/>
            <PlatformSection {...gameSectionFour}/>
        </div>
            </>

    )
}

export default Hardware;
