import { ISubject } from "../../responses";
import Grade from "../grade/Grade";

import './Subject.css';

interface IProps {
    subject: ISubject
}

function Subject({subject}: IProps) {

    const getAverage = () =>  {
        let sum = 0;
        let weight = 0;
        subject.grades.forEach((grade) => {
            sum += grade.grade * grade.weight;
            weight += grade.weight;
        });

        return sum / weight;
    }

    return(
        <div className="Subject">
            <div className="grid-container">
                <div className="flex-row" style={{justifyContent: 'space-between'}}>
                    <h2>{subject.subject}</h2>
                    <Grade grade={getAverage()}/>
                </div>
            </div>
            <hr/>
            {subject.grades.map((grade) => 
                <div>
                    <div className="grid-container">
                        <div className="grid-3">
                            <span>{grade.gradeName}</span>
                            <span className="item-center" style={{width: '2.5em', textAlign: 'center'}}>{grade.weight * 100}%</span>
                            <Grade grade={grade.grade}/>
                        </div>
                        <div className="flex-row item-end" style={{gap: 10}}>
                            <a>edit</a>
                            <a>delete</a>
                        </div>
                    </div>
                    <hr/>
                </div>
            )}
        </div>
    );
}

export default Subject;