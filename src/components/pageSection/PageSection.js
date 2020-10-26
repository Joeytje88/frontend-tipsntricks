import React from 'react';
import './PageSection.css';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';

function PageSection({
                         lightBg,
                         topLine,
                         lightText,
                         lightTextDesc,
                         headline,
                         description,
                         buttonLabel,
                         link,
                         img,
                         alt,
                         imgStart
                     }) {
    return (
        <>
            <div
                className={lightBg ? 'home__page-section' : 'home__page-section darkBg'}
            >
                <div className='container'>
                    <div
                        className='row home__page-row'
                        style={{
                            display: 'flex',
                            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                        }}
                    >
                        <div className='col'>
                            <div className='home__page-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                    {headline}
                                </h1>
                                <p
                                    className={
                                        lightTextDesc
                                            ? 'home__page-subtitle'
                                            : 'home__page-subtitle dark'
                                    }
                                >
                                    {description}
                                </p>
                                <Link to={link}>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageSection;
