import React from "react"
import Navigation from "../../components/navbar/Navigation";
import {gameSectionOne, gameSectionTwo, gameSectionThree, gameSectionFour} from "./Data";
import PlatformSection from "../../components/platformSection/platformSection";

const PC = () =>{
    return(
        <>
            <Navigation />
            <PlatformSection {...gameSectionOne}/>
            <PlatformSection {...gameSectionTwo}/>
            <PlatformSection {...gameSectionThree}/>
            <PlatformSection {...gameSectionFour}/>
        </>
    )
}

export default PC;
