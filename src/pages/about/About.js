import React from 'react';
import './About.css'
import TNT from '../../assets/afbeeldingen/TNT.png';
import {Link} from 'react-router-dom';
import Navigation from "../../components/navbar/Navigation";


function About () {
    return (
        <div className="full-page">
            <Navigation/>
        <div className="about-container">
              <div className="about">
                     <h1>Wie zijn wij?</h1>

                  <img src={TNT} alt="eigenaar TNT" className="about-img"/>

            <div className="about-text">TipsNTrick.games is een kleine community van gamers die gamers bij elkaar wil brengen.
                Dit door het delen van tips en of tricks van hun favoriete games of juist de mogelijkheden te geven
                om andere gamers te ontmoeten en samen te kunnen gamen. Er zijn daar inderdaad al genoeg alternatieve voor,
                ,zoals Facebook of Discord, maar wij willen juist voorkomen dat je tig verschillende pagina's hoeft te volgen.

                <h3>Heb je nog vragen ideeën of opmerkingen?</h3>
                <p>Check dan vooral <Link
                                        to="/contact"
                                        className="links">
                                        onze contact
                                    </Link> en/ of
                                    <Link
                                        to="/vacature"
                                        className="link">
                                         &nbsp; vacature
                                    </Link> pagina's!</p>
                  </div>
              </div>
        </div>
            </div>
    );
}

export default About;
