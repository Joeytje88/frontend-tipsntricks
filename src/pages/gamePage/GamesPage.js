import React from "react";
import Navigation from "../../components/navbar/Navigation";
import PlatformSection from "../../components/platformSection/platformSection";

import {gameSection1,
        gameSection2,
        gameSection3,
        gameSection4,
        gameSection5,
        gameSection6,
        gameSection7,
        gameSection8}
        from "./Data";

const GamesPage = () => {
    return (
        <>
            <Navigation />
            <PlatformSection {...gameSection1}/>
            <PlatformSection {...gameSection2}/>
            <PlatformSection {...gameSection3}/>
            <PlatformSection {...gameSection4}/>
            <PlatformSection {...gameSection5}/>
            <PlatformSection {...gameSection6}/>
            <PlatformSection {...gameSection7}/>
            <PlatformSection {...gameSection8}/>
            </>
    )
}
export default GamesPage;
