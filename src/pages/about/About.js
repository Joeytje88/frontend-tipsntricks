import React from 'react';
import './About.css'
import TNT from '../../assets/afbeeldingen/TNT.png';
import {Link} from 'react-router-dom';
import Navigation from "../../components/navbar/Navigation";


function About () {
    return (
        <>
            <Navigation/>
        <div className="about-container">
              <div className="about">
                     <h1>Wie zijn wij?</h1>

                  <img src={TNT} alt="eigenaar TNT" className="about-img"/>

            <p>TipsNTrick.games is een kleine community van gamers die gamers bij elkaar wil brengen.
                Dit door het delen van tips en of tricks van hun favoriete games of juist de mogelijkheden te geven
                om andere gamers te ontmoeten en samen te kunnen gamen. Er zijn daar inderdaad al genoeg alternatieve voor,
                ,zoals Facebook of Discord, maar wij willen juist voorkomen dat je tig verschillende pagina's moet volgen.</p>

                  <p> Mocht je nog vragen/ opmerkingen / ideeën of ons team komen versterken? Check dan vooral <Link exact to="/contact">onze contact</Link>  en/ of <Link exact to="/vacature">vacature</Link> pagina's!</p>

              </div>
        </div>
            </>
    );
}

export default About;
