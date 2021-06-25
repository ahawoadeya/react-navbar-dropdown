import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Dropdown from '../Dropdown/Dropdown'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [sidebar, setSidebar] = useState(false)

    const handleClick = () => {
        if (window.innerWidth < 960 ) {
            setClick(!click)
        } else {
            setDropdown(false)
        }
    }

    const handleMouseEnter = () => {
        if (window.innerWidth < 960 ) {
            setDropdown(!dropdown)
            setSidebar(!sidebar)
        } else {
            setDropdown(!dropdown)
        }
    }

    const handleMouseLeave = () => {
        if (window.innerWidth < 960 ) {
            setDropdown(false)
            setSidebar(false)
        } else {
            setDropdown(false)
        }
    }

    return (
        <React.Fragment>
            <nav className="navbar">
                <Link className="navbar-logo" to="/">
                    Monumental <i className="fas fa-monument"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'lnr lnr-cross' : 'lnr lnr-menu'} ></i>
                </div>
                <ul className={click ? "nav-menu mobile-nav" : "nav-menu"}>
                    <li className="nav-item" onClick={handleClick}>
                        <Link to="/" className='nav-links'>Home</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                        <Link to="/destinations" className='nav-links'>
                            Destinations <i className={dropdown ? "fa fa-caret-up" : "fa fa-caret-down" }></i>
                        </Link>
                        {/* conditional rendering - short circuit evaluation */}
                        { dropdown && <Dropdown /> }
                    </li>
                    <li className={sidebar ? "nav-item push-bottom" : "nav-item"} onClick={handleClick}>
                        <Link to="/artifacts" className='nav-links'>Artifacts</Link>
                    </li>
                    <li className={sidebar ? "nav-item push-bottom" : "nav-item"} onClick={handleClick}>
                        <Link to="/contact-us" className='nav-links'>Contact Us</Link>
                    </li>
                    <li className={sidebar ? "nav-item push-bottom" : ""}onClick={handleClick}>
                        <Link to="/tour" className='nav-links-mobile'>Tour</Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </React.Fragment>
    )
}

export default Navbar
