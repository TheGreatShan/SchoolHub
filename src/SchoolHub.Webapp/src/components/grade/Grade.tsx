import './Grade.css';

interface IProps {
    grade?:number
}

function Grade({grade}:IProps) {

    const getClass = () => {
        if (!grade) {
            return null;
        }
        
        if(grade >= 1 && grade < 4) {
            return 'bad';
        }

        if(grade >= 4 && grade < 5) {
            return 'enough';
        }

        if(grade >= 5 && grade <= 6) {
            return 'good';
        }

        return null;
    }

    return <span className={'Grade ' + getClass()}>{grade && grade >= 1 && grade <= 6? grade: '-'}</span>
}

export default Grade;