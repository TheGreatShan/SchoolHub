import {useState} from 'react';

import "./ToggleButton.css";

interface IProps {
    size?:number;
    state?: boolean;
    onChange?: (state: boolean) => void;
}

function ToggleButton(props: IProps) {
    const size = props.size?? 80;

    const [state, setState] = useState(props.state?? false);


    const change = () => {
        const newState = !state;
        setState(newState);

        if(props.onChange) {
            props.onChange(newState);
        }
    }

    return (
        <div className="ToggleButton" style={{width: size, height: size/2, borderRadius: size}} onClick={change}>
            <div className={state? "right": ""}></div>
        </div>
    );
}

export default ToggleButton;