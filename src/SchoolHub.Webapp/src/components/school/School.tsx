import Grade from '../grade/Grade';
import './School.css';

interface IProps {
    school:string;
    average?:number;
}

function School({school, average}: IProps) {
    return (
        <div className='School flex-column'>
            <h2>{school}</h2>
            <Grade grade={average}/>
        </div>
    );
}

export default School;