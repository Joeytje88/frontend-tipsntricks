import React from 'react';
import Navigation from "../../components/navbar/Navigation";
import "./Vacature.css"

const Vacature = () =>{
    return (
        <>
        <Navigation/>
        <div className="vacature-pagina">

            <img src="https://leukomteleren.nl/wp-content/uploads/2020/07/Vacature_MOC.jpg"
                 alt="vacature"
                 className="vacature-img"/>
            <h2 className="header">Vacatures</h2>

         <p>Als jij van games houdt en niets liever wilt dan de laatste tips van de nieuwste games te delen, hebben wij wellicht iets heel interessants voor jou!
         TipsNTricks is een kleine community dat steeds verder groeit en graag zoveel mogelijk gamers helpt wanneer ze ergens vastlopen.
             Echter hebben we nog wat handjes te kort om nog verder te kunnen groeien. Dus bij deze de oproep voor de volgende vacatures!</p>
        <h3
            className="sub-headers">Moderator</h3>
        <p>Als moderator ben je niet alleen bezig met het onderhouden van de website, maar ook het controleren van de reacties.
            We zijn eigenlijk op zoek naar iemand die de Nederlandse taal goed beheerst en samen met ondergetekende en de crew
            nieuwe dingen bedenkt om op de website door te voeren.</p>

        <h3
            className="sub-headers">Streamers</h3>
        <p>Uitleggen hoe een game werkt, kan natuurlijk nog makkelijker middels streams. Vind jij het leuk om onze community te helpen wanneer
            zij ergens vastlopen? Stuur dan snel een mailtje naar
            <a href="mailto:j.hasselbach@tipsntricks.games"
               className="mail">j.hasselbach@tipsntricks.games</a>.</p>

        <h3
            className="sub-headers">Video editors</h3>
        <p>Vind je het leuk om video's te maken? En ben jij de Spielberg-in-wording van de video editors?
            Stuur dan snel een mailtje naar <a
                href="mailto:j.hasselbach@tipsntricks.games"
                className="mail">j.hasselbach@tipsntricks.games</a></p>

            <p>Heb je tips of ideeën? Of denk je een andere rol bij ons te kunnen en willen vertolken?
                <a href="mailto:j.hasselbach@tipsntricks.games"
                        className="mail">Laat het ons vooral weten!</a></p>
        </div>
            </>
)
}

export default Vacature;
