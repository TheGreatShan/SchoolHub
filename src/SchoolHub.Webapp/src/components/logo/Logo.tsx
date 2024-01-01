import { useContext } from "react";
import { ThemeContext } from "../../contexts";
import {ReactComponent as LogoLight} from "../../icons/logo-light.svg";
import {ReactComponent as LogoDark} from "../../icons/logo-dark.svg";


function Logo() {
    const {theme, setTheme} = useContext(ThemeContext);
    return(
        theme === 'light'? <LogoLight/>: <LogoDark/>
    );
}

export default Logo;