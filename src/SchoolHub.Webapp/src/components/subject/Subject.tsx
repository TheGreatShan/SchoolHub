import { ISubject } from "../../responses";
import Grade from "../grade/Grade";

import './Subject.css';

interface IProps {
    subject: ISubject
}

function Subject({subject}: IProps) {

    return(
        <div className="Subject">
            <div className="grid-container">
                <div className="flex-row" style={{justifyContent: 'space-between'}}>
                    <h2>{subject.subject}</h2>
                    <Grade/>
                </div>
            </div>
            <hr/>
            {subject.grades.map((grade) => 
                <div className="grid-container">
                    <div className="flex-row" style={{justifyContent: 'space-between'}}>
                        <span>{grade.gradeName}</span>
                        <span>{grade.weight}</span>
                        <Grade grade={grade.grade}/>
                    </div>
                    <div className="flex-row" style={{justifyContent: 'end', gap: 10}}>
                        <a>edit</a>
                        <a>delete</a>
                    </div>
                </div>
            )}
            <hr/>
            <span className='add'>+</span>
            <hr/>
        </div>
    );
}

export default Subject;