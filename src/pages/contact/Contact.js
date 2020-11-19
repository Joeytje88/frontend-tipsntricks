import React from "react";
import './Contact.css';
import Navigation from "../../components/navbar/Navigation";
import {Link} from  "react-router-dom";
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaTwitch,
    FaDiscord,
} from 'react-icons/fa';
const Contact = () => {
    return (
        <div className="full-page">
            <Navigation/>
        <div className="contact">
            <h1>Contact</h1>
            <p>
                Zit jij met een prangende vraag, wil je een zak met centjes aan ons geven door te adverteren of kan je niet geloven dat we een nieuwsbericht vergeten zijn? Dan horen we graag van je!</p>
            <p><strong>Adverteren</strong></p>

            <p>Heb jij interesse om advertenties op TipsNtricks.games te plaatsen? Stuur dan een mailtje naar  <a className="a" href="mailto:info@tipsntricks.games">info@tipsntricks.games</a>.</p>
            <p><strong>Nieuws Tip</strong></p>

            <p>Sappig nieuws is altijd welkom. Heb jij gehoord over een nieuwe update? zit je te broeden op een primeur of heb je een gerucht de ronde horen gaan?
                Stuur dan een bericht naar onze nieuwscrew! <a  className="a" href="mailto:redactie@tipsntricks.games">redactie@tipsntricks.games</a>.</p>
            <p><strong>Copyright</strong> </p>

            <p>Heb je een vraag over afbeeldingen en tekst in onze berichten? Of kan je niet geloven dat we je afbeelding zonder toestemming hebben gebruikt? Reik dan uit naar: <a  className="a" href="mailto:redactie@tipsntricks.games">redactie@tipsntricks.games</a>. </p>
            <p><strong>Solliciteren?</strong></p>

            <p>Wij zijn altijd op zoek naar nieuw talent! Heb jij flink wat in je mars? <Link className="a" exact to="/vacature">Check dan hier onze vacatures </Link></p>
            <p><strong>Algemene vragen</strong></p>

            <p>Kom je er gewoon niet uit en weet je niet meer wat je moet doen? <a className="a" href="mailto:j.hasselbach@tipsntricks.games">j.hasselbach@tipsntricks.games</a>.</p>
            <p><strong>Social media kanalen</strong></p>
            <ul>
                <li><a className="a" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> <FaTwitter/> Twitter</a></li>
                <li><a className="a" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook/> Facebook</a></li>
                <li><a className="a" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram/> Instagram</a></li>
                <li><a className="a" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube/> YouTube</a></li>
                <li><a className="a" href="https://www.discord.gg" target="_blank" rel="noopener noreferrer"><FaDiscord/> Discord</a></li>
                <li><a className="a" href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer"><FaTwitch/> Twitch</a></li>
            </ul>


        </div>
            </div>
    );
    }

    export default Contact;
