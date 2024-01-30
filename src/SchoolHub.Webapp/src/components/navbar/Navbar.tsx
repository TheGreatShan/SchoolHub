import { Link, useLocation } from "react-router-dom";
import {ReactComponent as Hamburger} from "../../icons/hamburger.svg";
import {ReactComponent as CloseMenu} from "../../icons/close-menu.svg";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Logo from "../logo/Logo";

import './Navbar.css';
import { useState } from "react";

function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const {pathname} = useLocation();

    const navigations = [
        {
            title: 'Grades',
            path: '/grades'
        },
        {
            title: 'Homework',
            path: '/homework'
        },
        {
            title: 'Profile',
            path: '/profile'
        }
    ]

    return (
        <header className="Navbar">
            <button className="btn-container hamburger" onClick={() => setOpen(true)}><Hamburger style={{stroke: 'var(--secondary-color)'}}/></button>
            <Link to="/" className='md-hidden'><Logo /></Link>
            <div className="flex-row md-hidden" style={{ justifyContent: "space-between" }}>
                {navigations.map((navigation) => <Link to={navigation.path} className={pathname === navigation.path? 'selected': ''}>{navigation.title}</Link>)}
            </div>
            <div className="flex-row" style={{justifySelf: "end"}}>
                <ThemeToggle/>
            </div>
            {isOpen?
            <div className="menu">
                <button className="btn-container hamburger" onClick={() => setOpen(false)}><CloseMenu style={{stroke: 'var(--secondary-color)'}}/></button>
                <div className="flex-column" style={{alignItems: 'center'}}>
                    <Logo />
                    <ul style={{marginTop: 'auto'}}>
                        <Link to="/">Homepage</Link>
                        {navigations.map((navigation) => <li><Link to={navigation.path} className={pathname === navigation.path? 'selected': ''}>{navigation.title}</Link></li>)}
                    </ul>
                </div>
            </div>:''}
            

        </header>
    );
}

export default Navbar;