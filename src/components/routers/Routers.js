import React from 'react';
import { Route, Switch} from "react-router-dom";
import Home from "../../pages/home/Home";
import Hardware from "../../pages/hardware/Hardware";
import Contact from "../../pages/contact/Contact";
import About from "../../pages/about/About";
import Login from "../../pages/login/Login";
import Registreer from "../../pages/registreer/Registreer";
import Profile from "../../pages/profiel/Profile";
import Post from "../../components/new-post/Post";
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
    CoDLoadouts,
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
    EFTtop,
    EFTSale,
    EFTControls
} from '../../pages/games/escape-from-tarkov';


import {
    F12020Play,
    F12020Controls,
    F12020Time,
    F12020Tips
} from '../../pages/games/F12020';

import {
    FIFA21Play,
    FIFA21Volta,
    FIFA21Controls,
    FIFA21Fut
} from '../../pages/games/fifa21';

import {
    FortnitePlay,
    FortniteControls,
    FortniteLoadout,
    FortniteTop
} from '../../pages/games/fortnite';

import {
    FH4Play,
    FH4Tips,
} from '../../pages/games/forza_horizon_4';

import {
    HyperScapePlay,
    HyperScapeControls,
    HyperScapeLoadout,
    HyperScapeTop} from '../../pages/games/hyperscape';

import {
    Gears5Play,
    Gears5Tips,
} from '../../pages/games/gears5'

import {
    GroundedPlay,
    GroundedCreaties,
    GroundedSurvival,
    GroundedTips
} from '../../pages/games/grounded'


import {
    GoTTop,
    GoTS,
    GoTScreenshot,
    GoTLegends
}  from '../../pages/games/ghost-of-tsushima';

import {
    AvengersTip,
    AvengersScreenshot,
    AvengersPlay,
    AvengersSingleplayer
} from '../../pages/games/marvels-avengers';

import {
    PCars3Play,
    PCars3Controls,
    PCars3Tips,
    PCars3Singleplayer
} from '../../pages/games/project-cars-3';

import {
    SOTPlay,
    SOTArena,
    SOTTips,
    SOTScreenshots
} from '../../pages/games/sea-of-thieves'

import {
    SMG,
    SM64,
    SMS
} from '../../pages/games/super-mario-3d-allstars'

import {
    TLOUP2Tips,
    TLOUP2Collect
} from '../../pages/games/the-last-of-us-part-2'

import {
    ZBotWTips,
    ZBotWScreenshots
} from '../../pages/games/zelda-botw';

import {
    Headset,
    Racewheel,
    pc,
    MuisTB
} from '../../pages/hardware';
import XboxOne from "../../pages/xboxone/XboxOne";
import PlayStation4 from "../../pages/playstation4/PlayStation4";
import PlayStation5 from "../../pages/playstation5/PS5";
import GamesPage from "../../pages/gamePage/GamesPage";
import NintendoSwitch from "../../pages/switch/NintendoSwitch";
import PC from "../../pages/pc/PC";
import XboxSeriesXS from "../../pages/xboxseriesx/XboxSeriesXS";
import NewPost from "../../pages/newPost/NewPost";
import Nieuws from "../../pages/nieuws/Nieuws"

const Routers = () => {
    // const [url, setURL] = useState("");
    //
    // const getUrl = async () =>{
    //     try {const result = await axios.get(`http://localhost:8080/posts`)
    //         console.log(result)
    // } catch (error){
    //     alert (error)}
    // }

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/nieuw-bericht">
                <Post/>
            </Route>

            <Route exact path="/nieuws">
                <Nieuws/>
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
            <Route exact path="/hardware/pc">
                <pc />
            </Route>
            <Route exact path="/hardware/racewheels">
                <Racewheel />
            </Route>
            <Route exact path="/hardware/muis-toetsenbord">
                <MuisTB />
            </Route>
            <Route exact path="/hardware/headsets">
                <Headset />
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

            <Route exact path="/call-of-duty-warzone-modern-warfare">
                <CallofDutyWarzone /></Route>
            <Route exact path="/call-of-duty-warzone-modern-warfare/samenspelen">
                <CoDPlay /></Route>
            <Route exact path="/call-of-duty-modern-warfare-warzone/loadouts">
                <CoDLoadouts />
            </Route>
            <Route exact path="/call-of-duty-warzone-modern-warfare/top">
                <CoDTop />
            </Route>
            <Route exact path="/call-of-duty-warzone-modern-warfare/controls">
                <CoDControls/>
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
            <Route exact path="/escape-from-tarkov/controls">
                <EFTControls/>
            </Route>
            <Route exact path="/escape-from-tarkov/top">
                <EFTtop/>
            </Route>
            <Route exact path="/escape-from-tarkov/verkooptips">
                <EFTSale/>
            </Route>

            <Route exact path="/f1-2020">
                <F12020 />
            </Route>
            <Route exact path="/f1-2020/samenspelen">
                <F12020Play/>
            </Route>
            <Route exact path="/f1-2020/controls">
                <F12020Controls />
            </Route>
            <Route exact path="/f1-2020/snelle-tijden">
                <F12020Time />
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
            <Route exact path="/fifa-21/controls">
                <FIFA21Controls />
            </Route>

            <Route exact path="/fortnite">
                <Fortnite />
            </Route>
            <Route exact path="/fortnite/samenspelen">
                <FortnitePlay />
            </Route>
            <Route exact path="/fortnite/controls">
                <FortniteControls />
            </Route>
            <Route exact path="/fortnite/top">
                <FortniteTop />
            </Route>
            <Route exact path="/fortnite/loadout">
                <FortniteLoadout />
            </Route>


            <Route exact path="/flight-simulator">
                <FlightSimulator />
            </Route>

            <Route exact path="/forza-horizon-4">
                <FH4 />
            </Route>
            <Route exact path="/forza-horizon-4/samenspelen">
                <FH4Play />
            </Route>
            <Route exact path="/forza-horizon-4/tips">
                <FH4Tips />
            </Route>


            <Route exact path="/gears-5">
                <Gears5 />
            </Route>
            <Route exact path="/gears-5/samenspelen">
                <Gears5Play />
            </Route>
            <Route exact path="/gears-5/tips">
                <Gears5Tips />
            </Route>

            <Route exact path="/ghost-of-tsushima">
                <GhostofTsushima/>
            </Route>
            <Route exact path="/ghost-of-tsushima/screenshots">
                <GoTScreenshot/>
            </Route>
            <Route exact path="/ghost-of-tsushima/singleplayer">
                <GoTS/>
            </Route>
            <Route exact path="/ghost-of-tsushima/top">
                <GoTTop/>
            </Route>
            <Route exact path="/ghost-of-tsushima/legends">
                <GoTLegends/>
            </Route>

            <Route exact path="/grounded">
                <Grounded />
            </Route>
            <Route exact path="/grounded/samenspelen">
                <GroundedPlay />
            </Route>
            <Route exact path="/grounded/creaties">
                <GroundedCreaties />
            </Route>
            <Route exact path="/grounded/survival">
                <GroundedSurvival />
            </Route>
            <Route exact path="/grounded/tips">
                <GroundedTips />
            </Route>

            <Route exact path="/hyperscape">
                <HyperScape />
            </Route>
            <Route exact path="/hyperscape/samenspelen">
                <HyperScapePlay />
            </Route>
            <Route exact path="/hyperscape/controls">
                <HyperScapeControls />
            </Route>
            <Route exact path="/hyperscape/top">
                <HyperScapeTop />
            </Route>
            <Route exact path="/hyperscape/loadout">
                <HyperScapeLoadout />
            </Route>

            <Route exact path="/insurgency-sandstorm">
                <InsurgencySandStorm />
            </Route>


            <Route exact path="/marvels-avengers">
                <MarvelsAvengers />
            </Route>
            <Route exact path="/marvels-avengers/co-op">
                <AvengersPlay />
            </Route>
            <Route exact path="/marvels-avengers/screenshots">
                <AvengersScreenshot />
            </Route>
            <Route exact path="/marvels-avengers/singleplayer">
                <AvengersSingleplayer />
            </Route>
            <Route exact path="/marvels-avengers/tip">
                <AvengersTip />
            </Route>

            <Route exact path="/paper-mario-the-origami-king">
                <PaperMario/>
            </Route>
            <Route exact path="/project-cars-3">
                <ProjectCars3 />
            </Route>
            <Route exact path="/project-cars-3/samenspelen">
                <PCars3Play />
            </Route>
            <Route exact path="/project-cars-3/controls">
                <PCars3Controls />
            </Route>

            <Route exact path="/project-cars-3/singleplayer">
                <PCars3Singleplayer />
            </Route>
            <Route exact path="/project-cars-3/tips">
                <PCars3Tips />
            </Route>

            <Route exact path="/sea-of-thieves">
                <SeaOfThieves />
            </Route>

            <Route exact path="/sea-of-thieves/samenspelen">
                <SOTPlay/>
            </Route>
            <Route exact path="/sea-of-thieves/tips">
                <SOTTips/>
            </Route>
            <Route exact path="/sea-of-thieves/screenshots">
                <SOTScreenshots/>
            </Route>
            <Route exact path="/sea-of-thieves/arena">
                <SOTArena/>
            </Route>

            <Route exact path="/super-mario-3d-allstars">
                <SM3DA />
            </Route>
            <Route exact path="/super-mario-3d-allstars/64">
                <SM64 />
            </Route>
            <Route exact path="/super-mario-3d-allstars/sunshine">
                <SMS />
            </Route>
            <Route exact path="/super-mario-3d-allstars/galaxy">
                <SMG />
            </Route>

            <Route exact path="/the-last-of-us-part-2">
                <TLOUP2/>
            </Route>
            <Route exact path="/the-last-of-us-part-2/collectibles">
                <TLOUP2Collect/>
            </Route>
            <Route exact path="/the-last-of-us-part-2/tips">
                <TLOUP2Tips/>
            </Route>

            <Route exact path="/breath-of-the-wild">
                <ZBotW/>
            </Route>
            <Route exact path="/breath-of-the-wild/tips">
                <ZBotWTips/>
            </Route>
            <Route exact path="/breath-of-the-wild/screenshots">
                <ZBotWScreenshots />
            </Route>
        </Switch>
    )
}
export default Routers;
