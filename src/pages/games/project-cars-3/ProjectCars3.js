import React from "react";
import Image from "../../../components/image/Image";
import {Link} from "react-router-dom";
import Project_Cars_3 from '../../../assets/afbeeldingen/Project_Cars_3.png';
import Project_Cars_3_play from '../../../assets/afbeeldingen/Project_Cars_3_play.png';
import Project_Cars_3_tips from '../../../assets/afbeeldingen/Project_Cars_3_tips.png';
import Project_Cars_3_singleplayer from '../../../assets/afbeeldingen/Project_Cars_3_singleplayer.png';
import Project_Cars_3_controls from '../../../assets/afbeeldingen/Project_Cars_3_controls.png';
import Navigation from "../../../components/navbar/Navigation";

const ProjectCars3 = () => {
    return (
        <>
            <Navigation/>
            <div className="game-description">
            <div className="game-page">
                <div className="games-img">
                    <Image
                        alt="Project Cars 3"
                        link={Project_Cars_3}/>
                </div>
                    <p className="paragraaf">Project Cars 3
                        <p>ontwikkelaar: Slightly Mad Studios</p>
                        <p>uitgever: Bandai Namco</p>
                        <p> release: 28 augustus 2020</p>
                        <p>platforms: pc, PlayStation 4, Xbox One</p> </p>
                </div>
            </div>

            <div className="tipsntrick">
                <Link exact to="/project-cars-3/samenspelen"
                      className="link-item">
                    <Image
                        alt="Project Cars 3 samenspelen"
                        link={Project_Cars_3_play}
                        className="optional-img"
                        name="Op zoek naar een geduchte tegenstander?"/>
                </Link>
                <Link to="/project-cars-3/controls"
                      className="link-item">
                    <Image
                        alt="Project Cars 3 controls"
                        link={Project_Cars_3_controls}
                        className="optional-img"
                        name="De beste tips voor besturing/controls"/>
                </Link>
                <Link to="/project-cars-3/singleplayer"
                      className="link-item">
                    <Image
                        alt="Project Cars 3 singleplayer"
                        link={Project_Cars_3_singleplayer}
                        className="optional-img"
                        name="Zit je ergens vast in de singleplayer?"/>
                </Link>

                <Link exact to="/project-cars-3/tips"
                      className="link-item">
                    <Image
                        alt="Project Cars 3 tips"
                        link={Project_Cars_3_tips}
                        className="optional-img"
                        name="Heb jij nog handige tips voor Project Cars 3? Of juist vragen over bepaalde dingen?"/>
                </Link>
            </div>
        </>
    )
}
export default ProjectCars3;
