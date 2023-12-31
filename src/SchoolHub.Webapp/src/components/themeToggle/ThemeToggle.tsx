import {ReactComponent as MoonIcon} from '../../icons/moon-icon.svg';
import {ReactComponent as DayIcon} from '../../icons/day-icon.svg';
import ToggleButton from '../togglebutton/ToggleButton';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

function ThemeToggle() {

    const {theme, setTheme} = useContext(ThemeContext);

    return(
        <div className="ThemeToggle flex-row">
            <MoonIcon style={{ fill: theme === 'dark'? 'var(--selection-color)': 'var(--secondary-color)'}}/>
            <ToggleButton state={theme === 'light'} onChange={(state) => setTheme(state? 'light': 'dark')}/>
            <DayIcon style={{ fill: theme === 'light'? "var(--selection-color)":  "var(--secondary-color)"}}/>
        </div>
    );
}

export default ThemeToggle;