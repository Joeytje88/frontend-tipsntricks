import React from 'react';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import './platformSection.css';

function PlatformSection({
                         lightBg,
                         topLine,
                         lightTextDesc,
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
                className={lightBg ? 'platform-section' : 'platform-section darkBg'}
            >
                <div className='container'>
                    <div
                        className='row platform-section-row'
                        style={{
                            display: 'flex',
                            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                        }}
                    >
                        <div className='col'>
                            <div className='platform-section-text-wrapper'>
                                <div className='topline'>{topLine}</div>
                                <p
                                    className={
                                        lightTextDesc
                                            ? 'platform-section-subtitle'
                                            : 'platform-section-subtitle dark'
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
                            <div className='platform-section-img-wrapper'>
                                <img src={img} alt={alt} className='platform-section-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlatformSection;
