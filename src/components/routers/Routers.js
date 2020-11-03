import React from 'react';
import { Route, Switch} from "react-router-dom";
import Home from "../../pages/home/Home";
import Hardware from "../../pages/hardware/Hardware";
import Contact from "../../pages/contact/Contact";
import About from "../../pages/about/About";
import Login from "../../pages/login/Login";
import Registreer from "../../pages/registreer/Registreer";
import Profile from "../../pages/profiel/Profile";
import Post from "../nieuw-bericht/Post";
import Account from "../../pages/account/Account";
import Vacature from "../../pages/vacature/Vacature"


import {
    AnimalCrossing,
    AmongUs,
    ApexLegends,
    CallofDutyWarzone,
    DaysGone,
    Dreams,
    EscapeFromTarkov,
    F12020,
    FIFA21,
    FlightSimulator,
    Fortnite,
    FH4,
    Gears5,
    GhostofTsushima,
    Grounded,
    HyperScape,
    InsurgencySandStorm,
    MarvelsAvengers,
    PaperMario,
    ProjectCars3,
    SeaOfThieves,
    SM3DA,
    TLOUP2,
    ZBotW
} from "../../pages/games";

import {
    ACNHPlay,
    ACNHKnollen,
    ACNHKlingels,
    ACNHDiy,
} from '../../pages/games/animal-crossing-new-horizons';


import {
    ApexLegendsTop,
    ApexLegendsControls,
    ApexLegendsLoadout,
    ApexLegendsPlay
} from '../../pages/games/apex-Legends';


import {
    Loadouts,
    CoDTop,
    CoDControls,
    CoDPlay}
    from '../../pages/games/Call-of-Duty-Warzone-Modern-Warfare';

import {
    DGTips,
    DGscreenshots
} from '../../pages/games/days-gone';

import  {
    DreamsCreaties,
    DreamsTips
} from  '../../pages/games/dreams';

import {
    EFTPlay,
    EFTTips
} from '../../pages/games/escape-from-tarkov';


import {
    FIFA21Play,
    FIFA21Volta,
    FIFA21Fut
} from '../../pages/games/fifa21';


import {
    F12020Play,
    F12020Controls,
    F12020Time,
    F12020Tips
} from '../../pages/games/F12020';



import XboxOne from "../../pages/xboxone/XboxOne";
import PlayStation4 from "../../pages/playstation4/PlayStation4";
import PlayStation5 from "../../pages/playstation5/PS5";
import GamesPage from "../../pages/gamePage/GamesPage";
import NintendoSwitch from "../../pages/switch/NintendoSwitch";
import PC from "../../pages/pc/PC";
import XboxSeriesXS from "../../pages/xboxseriesx/XboxSeriesXS";
import NewPost from "../../pages/newPost/NewPost";



const Routers = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/nieuw-bericht">
                <Post/>
            </Route>


            <Route exact path="/games">
                <GamesPage/>
            </Route>

            <Route exact path="/xbox-one">
                <XboxOne />
            </Route>

            <Route exact path="/xbox-series-x">
                <XboxSeriesXS />
            </Route>

            <Route exact path="/playstation4">
                <PlayStation4 />
            </Route>

            <Route exact path="/playstation5">
                <PlayStation5 />
            </Route>

            <Route exact path="/nintendo-switch">
                <NintendoSwitch />
            </Route>

            <Route exact path="/pc">
                <PC />
            </Route>

            <Route exact path="/hardware">
                <Hardware />
            </Route>

            <Route exact path="/contact">
                <Contact/>
            </Route>
            <Route exact path="/vacature">
                <Vacature />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/profiel">
                <Profile />
            </Route>
            <Route exact path="/account">
                <Account/>
            </Route>
            <Route exact path ="/bericht">
                <NewPost/>
            </Route>
            <Route exact path="/registreer">
                <Registreer />
            </Route>



            <Route exact path="/among-us/">
                <AmongUs />
            </Route>

            <Route exact path="/animal-crossing-new-horizons">
                <AnimalCrossing />
            </Route>
            <Route exact path="/animal-crossing-new-horizons/samenspelen">
                <ACNHPlay />
            </Route>
            <Route exact path="/animal-crossing-new-horizons/knollen">
                <ACNHKnollen/>
            </Route>
            <Route exact path="/animal-crossing-new-horizons/diy">
                <ACNHDiy />
            </Route>
            <Route exact path="/animal-crossing-new-horizons/klingels">
                <ACNHKlingels />
            </Route>


            <Route exact path="/apex-legends/">
                <ApexLegends />
            </Route>

            <Route exact path="/apex-legends/samenspelen">
                <ApexLegendsPlay />
            </Route>
            <Route exact path="/apex-legends/top">
                <ApexLegendsTop />
            </Route>
            <Route exact path="/apex-legends/loadout">
                <ApexLegendsLoadout />
            </Route>
            <Route exact path="/apex-legends/controls">
                <ApexLegendsControls />
            </Route>


            <Route exact path="/call-of-duty-warzone-modern-warfare">
                <CallofDutyWarzone />
            </Route>
            <Route exact path="/call-of-duty-warzone/samenspelen">
            <CoDPlay/>
            </Route>
            <Route exact path="/call-of-duty-warzone-modern-warfare/controls">
                <CoDControls/>
            </Route>
            <Route exact path="/call-of-duty-warzone-modern-warfare/top">
                <CoDTop/>
            </Route>
            <Route exact path="/call-of-duty-modern-warfare-warzone/loadouts">
                <Loadouts/>
            </Route>


            <Route exact path="/days-gone">
                <DaysGone />
            </Route>
            <Route exact path="/days-gone/tips">
                <DGTips />
            </Route>
            <Route exact path="/days-gone/screenshots">
                <DGscreenshots />
            </Route>


            <Route exact path="/dreams">
                <Dreams />
            </Route>

            <Route exact path="/dreams/tips">
                <DreamsTips />
            </Route>
            <Route exact path="/dreams/creaties">
                <DreamsCreaties />
            </Route>


            <Route exact path="/escape-from-tarkov">
                <EscapeFromTarkov/>
            </Route>
            <Route exact path="/escape-from-tarkov/samenspelen">
                <EFTPlay/>
            </Route>

            <Route exact path="/escape-from-tarkov/tips">
                <EFTTips/>
            </Route>


            <Route exact path="/f1-2020">
                <F12020 />
            </Route>
            <Route exact path="/f1-2020/samenspelen">
                <F12020Play />
            </Route>
            <Route exact path="/f1-2020/tips">
                <F12020Tips />
            </Route>

            <Route exact path="/fifa-21">
                <FIFA21 />
            </Route>
            <Route exact path="/fifa-21/samenspelen">
                <FIFA21Play />
            </Route>
            <Route exact path="/fifa-21/fut">
                <FIFA21Fut />
            </Route>
            <Route exact path="/fifa-21/volta">
                <FIFA21Volta />
            </Route>


            <Route exact path="/fortnite">
                <Fortnite />
            </Route>



            <Route exact path="/flight-simulator">
                <FlightSimulator />
            </Route>

            <Route exact path="/forza-horizon-4">
                <FH4 />
            </Route>


            <Route exact path="/gears-5">
                <Gears5 />
            </Route>

            <Route exact path="/ghost-of-tsushima">
                <GhostofTsushima/>
            </Route>

            <Route exact path="/grounded">
                <Grounded />
            </Route>

            <Route exact path="/hyperscape">
                <HyperScape />
            </Route>

            <Route exact path="/insurgency-sandstorm">
                <InsurgencySandStorm />
            </Route>

            <Route exact path="/marvels-avengers">
                <MarvelsAvengers />
            </Route>

            <Route exact path="/paper-mario-the-origami-king">
                <PaperMario/>
            </Route>
            <Route exact path="/project-cars-3">
                <ProjectCars3 />
            </Route>


            <Route exact path="/sea-of-thieves">
                <SeaOfThieves />
            </Route>

            <Route exact path="/super-mario-3d-allstars">
                <SM3DA />
            </Route>

            <Route exact path="/the-last-of-us-part-2">
                <TLOUP2/>
            </Route>

            <Route exact path="/breath-of-the-wild">
                <ZBotW/>
            </Route>

        </Switch>
    )
}
export default Routers;
