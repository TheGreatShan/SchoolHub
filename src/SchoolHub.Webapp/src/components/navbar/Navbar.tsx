import { Link, useLocation } from "react-router-dom";
import {ReactComponent as LogoLight} from '../../icons/logo-light.svg';
import ThemeToggle from "../themeToggle/ThemeToggle";
import Logo from "../logo/Logo";

import './Navbar.css';

function Navbar() {
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
            <Link to="/"><Logo/></Link>
            <div className="flex-row" style={{ justifyContent: "space-between" }}>
                {navigations.map((navigation) => <Link to={navigation.path} className={pathname === navigation.path? 'selected': ''}>{navigation.title}</Link>)}
            </div>
            <div className="flex-row" style={{justifySelf: "end"}}>
                <ThemeToggle/>
            </div>
            

        </header>
    );
}

export default Navbar;