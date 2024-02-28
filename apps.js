"use strict";
// Hovering over a variable will let you know it's current type
// and how you can assign a type to it if you haven't already
let num1 = 7;
// You can still declare variables with a type without initializing them
let str;
let any; //try to avoid type anys (defeats the whole purpose of TypeScript)
function mappingGrades(data) {
    console.log(data.name);
    return data.grades.map(el => {
        return el;
    });
}
// Typing a function
function funk() {
    return "true";
}
// Typing an arrow function
// Giving the arrowFunction variable the type of an arrow function that returns a string
const arrowFunction = () => {
    return "jacob";
};
let student1 = {
    name: "Jessie",
    grades: [100, 100, 100],
    email: "jessie's emal"
};
// once a type is declared you cant change
// type Jessie = {
// }
function createStudent(data) {
    let newStudent = {
        name: data.name,
        grades: data.grades,
        email: data.email
    };
}
// interface IJacob {
//     name: string,
//     hobby: string
// }
// let jacob: IJacob = {
//     name: "jacob",
//     hobby: "singing"
// }
