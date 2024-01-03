import { useState } from 'react';
import School from '../../components/school/School';
import { ISchool } from '../../responses';
import Grade from '../../components/grade/Grade';
import Subject from '../../components/subject/Subject';

interface ISchoolList {
    setSchool: React.Dispatch<React.SetStateAction<ISchool | null>>
}

function SchoolList({setSchool}: ISchoolList) {


    const schools = [
        {
            schoolName: 'BMS',
            averageGrade: 4.5
        },
        {
            schoolName: 'BBW',
            averageGrade: 0
        }
    ]

    return(
        <div className='flex-row flex-wrap' style={{marginTop: 30, gap: 15}}>
                {schools.map((school) => <School school={school} onClick={(school) => setSchool(school)}/>)}
        </div>
    );
}

function Grades() {

    const [semester, setSemester] = useState(1);
    const [school, setSchool] = useState<ISchool|null>(null);

    const schoolResponse = {
        schoolName: 'BMS',
        subjects: [
            {
                subject: 'Mathematik',
                grades: [
                    {
                        gradeName: 'Planimetrie',
                        weight: 1,
                        grade: 5
                    },
                    {
                        gradeName: 'Funktionen',
                        weight: 1,
                        grade: 6
                    }

                ]
            },
            {
                subject: 'Französisch',
                grades: [
                    {
                        gradeName: 'Unité 1',
                        weight: 1,
                        grade: 4.5
                    },
                    {
                        gradeName: 'Présenation',
                        weight: 0.5,
                        grade: 3
                    }
                ]
            }
        ]
    }
    

    

    return (
        <section style={{marginTop: 25}}>
            <select>
                {Array.from({length: 8}, (_, index) => index + 1).map((element) => <option>Semester {element}</option>)}
            </select>
            { !school?
                <SchoolList setSchool={setSchool}/>
                :
                <div className='flex-column' style={{gap: 20}}>
                    {schoolResponse.subjects.map((subject) => 
                        <Subject subject={subject}/>
                    )}
                </div>
            }
        </section>
    );
}

export default Grades;