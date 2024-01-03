export interface ISchool {
    schoolName: string;
    averageGrade: number
}

export interface IGrade {
    gradeName: string,
    weight: number,
    grade: number
}

export interface ISubject {
    subject: string,
    grades: IGrade[]
}