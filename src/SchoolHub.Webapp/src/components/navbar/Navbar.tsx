import { Link } from "react-router-dom";
import {ReactComponent as LogoLight} from '../../icons/logo-light.svg';
import ThemeToggle from "../themeToggle/ThemeToggle";
import Logo from "../logo/Logo";

import './Navbar.css';

function Navbar() {
    return (
        <header className="Navbar">
            <Link to="/"><Logo/></Link>
            <div className="flex-row" style={{ justifyContent: "space-between" }}>
                <Link to="/grades">Grades</Link>
                <Link to="/events">Events</Link>
                <Link to="/profile">Profile</Link>
            </div>
            <div className="flex-row" style={{justifySelf: "end"}}>
                <ThemeToggle/>
            </div>
            

        </header>
    );
}

export default Navbar;