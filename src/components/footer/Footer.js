import React from 'react';
import './Footer.css';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import { GiGamepad } from 'react-icons/gi';

function Footer() {
    return (
            <div className='footer-container'>
                <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                        Word nu lid en ontvang wekelijks updates over de laatste tips & tricks van de nieuwste games!
                    </p>
                    <p className='footer-subscription-text'>
                        Je kunt op elk moment uitschrijven.
                    </p>
                    <div className='input-areas'>
                        <form>
                            <input
                                className='footer-input'
                                name='email'
                                type='email'
                                placeholder='Jouw email'
                            />
                            <Button buttonStyle='btn--outline'>Schrijf je in!</Button>
                        </form>
                    </div>
                </section>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>About Us</h2>
                            <Link to="/about">Over ons</Link>
                            <Link to="/">Vacatures</Link>
                            <Link to="/privacybeleid">Privacybeleid</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Partners</h2>
                            <a href='https://games.headliner.nl' target="_blank" rel="noopener noreferrer">Games headliner</a>
                            <a href='https://www.gamingnation.nl' target="_blank" rel="noopener noreferrer">Gamingnation</a>
                            <a href='https://www.gameliner.nl' target="_blank" rel="noopener noreferrer">Gameliner</a>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>Social Media</h2>
                            <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a>
                            <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>
                    </div>
                </div>
                <section className='social-media'>
                    <div className='social-media-wrap'>
                        <div className='footer-logo'>
                            <Link to='/' className='social-logo'>
                                <GiGamepad className='navbar-icon' />
                                TipsNTricks.games
                            </Link>
                        </div>
                        <small className='website-rights'>TipsNTricks © 2020</small>
                        <div className='social-icons'>
                            <Link
                                className='social-icon-link'
                                to='//www.facebook.com'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <FaFacebook />
                            </Link>
                            <Link
                                className='social-icon-link'
                                to='//www.instagram.com'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                className='social-icon-link'
                                to={
                                    '//www.youtube.com'
                                }
                                target='_blank'
                                aria-label='Youtube'
                            >
                                <FaYoutube />
                            </Link>
                            <Link
                                className='social-icon-link'
                                to='//twitter.com'
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <FaTwitter />
                            </Link>
                            <Link
                                className='social-icon-link'
                                to='//linkedin.com'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <FaLinkedin />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
    );
}

export default Footer;
