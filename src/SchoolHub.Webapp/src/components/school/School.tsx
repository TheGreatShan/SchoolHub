import { ISchool } from '../../responses';
import Grade from '../grade/Grade';
import './School.css';

interface IProps {
    school: ISchool
    onClick?: (school: ISchool) => void
}

function School({school, onClick}: IProps) {
    const click = () => {
        if(onClick) {
            onClick(school);
        }
    }

    return (
        <button className='School flex-column' onClick={click}>
            <h2>{school.schoolName}</h2>
            <Grade grade={school.averageGrade}/>
        </button>
    );
}

export default School;