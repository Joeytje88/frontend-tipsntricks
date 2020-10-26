import React from 'react';
import PageSection from '../../components/pageSection/PageSection';
import Navigation from "../../components/navbar/Navigation";
import AdminNavbar from "../../components/navbar/AdminNavbar";
import { pageSectionOne, pageSectionTwo, pageSectionThree, pageSectionFour,pageSectionFive, pageSectionSix, pageSectionSeven, pageSectionEight } from '../../components/pageSection/Data';

function Home() {
    return (
           <>
            <Navigation/>
               {localStorage.getItem( "ROLE_ADMIN") &&<AdminNavbar/>}
            <PageSection {...pageSectionSix}/>
            <PageSection {...pageSectionOne} />
            <PageSection {...pageSectionThree} />
            <PageSection {...pageSectionTwo} />
            <PageSection {...pageSectionFour} />
            <PageSection {...pageSectionFive} />
            <PageSection {...pageSectionSeven} />
            <PageSection {...pageSectionEight} />
        </>
    );
}

export default Home;
