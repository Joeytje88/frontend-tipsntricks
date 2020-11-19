import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";
import {FaBars, FaTimes} from "react-icons/fa";

const AdminNavbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);




    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'
                    onClick={closeMobileMenu}>
                    <Link to="/admin/comments"
                          className='nav-links'>
                        Reacties
                    </Link>
                </li>
                <li className='nav-item'
                    onClick={closeMobileMenu}>
                    <Link to="/admin/posts"
                          className='nav-links'>
                    Berichten</Link></li>
                <li><Link to="/admin/accounts">Accounts</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default AdminNavbar;
