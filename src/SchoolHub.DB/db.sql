
CREATE DATABASE IF NOT EXISTS Schoolhub;

USE Schoolhub;

CREATE TABLE Role (
    id VARCHAR(36) NOT NULL,
    `Role` VARCHAR(10) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE User (
    id VARCHAR(36) NOT NULL,
    username VARCHAR(100) NOT NULL,
    primaryMail VARCHAR(999) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE School (
    id VARCHAR(36) NOT NULL,
    schoolName VARCHAR(15),
    PRIMARY KEY(id)
);

CREATE TABLE Subject (
    id VARCHAR(36) NOT NULL,
    `subject` VARCHAR(25) NOT NULL,
    `weight` FLOAT(3, 3) NOT NULL,
    schoolId VARCHAR(36) NOT NULL,
    userId VARCHAR(36) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(schoolId) REFERENCES School(id),
    FOREIGN KEY(userId) REFERENCES User(id)
);

CREATE TABLE SubjectSemester(
    subjectId VARCHAR(36) NOT NULL,
    semester INT NOT NULL,
    PRIMARY KEY(subjectId, semester),
    FOREIGN KEY (subjectId) REFERENCES `Subject`(id)
);

CREATE TABLE Grades (
    id VARCHAR(36) NOT NULL,
    grade FLOAT NOT NULL,
    `description` VARCHAR(30) NOT NULL,
    userId VARCHAR(36) NOT NULL,
    `weight` FLOAT(3, 3) NOT NULL,
    subjectId VARCHAR(36) NOT NULL,
    semester INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (subjectId, semester) REFERENCES SubjectSemester(subjectId, semester),
    FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE App (
    id VARCHAR(36) NOT NULL,
    appName VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE AppConnection (
    id VARCHAR(36) NOT NULL,
    email VARCHAR(255),
    token VARCHAR(255),
    appId VARCHAR(36) NOT NULL,
    userId VARCHAR(36) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (appId) REFERENCES App(id),
    FOREIGN KEY (userId) REFERENCES User(id)
);



CREATE TABLE Appointment (
    id VARCHAR(36) NOT NULL,
    appointment VARCHAR(20) NOT NULL,
    `description` VARCHAR(50),
    `from` DATE NOT NULL,
    `to` DATE NOT NULL,
    userId VARCHAR(36) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE GradeConfig (
    id VARCHAR(36) NOT NULL,
    numberOfSemesters INT NOT NULL,
    gradesRounding FLOAT(1,1) NOT NULL,
    schoolRounding FLOAT(1,1) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (id) REFERENCES User(id)
);

CREATE TABLE GradeConfigSubject (
    gradeConfigId VARCHAR(36) NOT NULL,
    subjectId VARCHAR(36) NOT NULL,
    PRIMARY KEY(gradeConfigId, subjectId),
    FOREIGN KEY (gradeConfigId) REFERENCES GradeConfig(id),
    FOREIGN KEY (subjectId) REFERENCES `Subject` (id)
);

