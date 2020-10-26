import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Navigation.css';
import {Button} from '../button/Button';
import { GiGamepad } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';


const Navigation = () => {
    const history = useHistory();
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const logout = (e)=> {
        localStorage.clear();
        history.push("/");

    }
    useEffect((e) => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);



    return (
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className='navbar'>
                    <div className='navbar-container container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            <GiGamepad className='navbar-icon' />
                            TipsNTricks.games
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/about'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Over ons
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/contact'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/hardware'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Hardware
                                </Link>
                            </li>
                            {localStorage.token === undefined && <li className='nav-btn'>
                                {button ? (
                                    <Link to='/login' className='btn-link'>
                                        <Button buttonStyle='btn--outline'>Login</Button>
                                    </Link>
                                ) : (
                                    <Link to='/login' className='btn-link'>
                                        <Button
                                            buttonStyle='btn--outline'
                                            buttonSize='btn--mobile'
                                            onClick={closeMobileMenu}
                                        >
                                            Login
                                        </Button>
                                    </Link>
                                )}
                            </li>}
                            {localStorage.token === undefined && <li className='nav-btn'>
                                {button ? (
                                    <Link to='/registreer' className='btn-link'>
                                        <Button buttonStyle='btn--outline'>Registreer</Button>
                                    </Link>
                                ) : (
                                    <Link to='/registreer' className='btn-link'>
                                        <Button
                                            buttonStyle='btn--outline'
                                            buttonSize='btn--mobile'
                                            onClick={closeMobileMenu}
                                        >
                                            Registreer
                                        </Button>
                                    </Link>
                                )}
                            </li>}
                            {localStorage.token !== undefined && <li className='nav-btn'>
                                {button ? (
                                    <Link to='/' className='btn-link'>
                                        <Button
                                            buttonStyle='btn--outline'
                                            onClick={logout}
                                            >Uitloggen</Button>
                                    </Link>
                                ) : (
                                    <Link to='/' className='btn-link'>
                                        <Button
                                            buttonStyle='btn--outline'
                                            buttonSize='btn--mobile'
                                            onClick={logout}
                                        >
                                            Uitloggen
                                        </Button>
                                    </Link>
                                )}
                            </li>}
                        </ul>
                </div>
            </nav>
        </IconContext.Provider>
    );
}

export default Navigation;
