import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Toggle sticky class based on scroll position
            setSticky(currentScrollY > 50);

            // Show or hide the navbar based on scroll direction
            if (currentScrollY > prevScrollY) {
                setShowNav(false); // Scrolling down
            } else {
                setShowNav(true); // Scrolling up
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollY]);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''} ${showNav ? 'show-nav' : 'hide-nav'}`}>
            <img src={logo} alt="Logo" className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='about' smooth={true} offset={-260} duration={500}>About us</Link></li>
                <li><Link to='study' smooth={true} offset={-150} duration={500}>Program</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
            </ul>
            <img src={menu_icon} alt="Menu" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
