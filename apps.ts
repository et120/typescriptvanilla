// Hovering over a variable will let you know it's current type
// and how you can assign a type to it if you haven't already
let num1: number = 7;

// You can still declare variables with a type without initializing them
let str: string;

let any; //try to avoid type anys (defeats the whole purpose of TypeScript)

function mappingGrades(data: { name: string, grades: number[]}){
    console.log(data.name)
    return data.grades.map(el => {
        return el;
    })
}

// Typing a function
function funk(): string {
    return "true";
}

// Typing an arrow function
// Giving the arrowFunction variable the type of an arrow function that returns a string
const arrowFunction: () => string = () => {
    return "jacob";
};


// Another way to define
// We can use interfaces to create our own types
interface IStudent {
    name: string,
    grades: number[],
    email: string
}

let student1: IStudent = {
    name: "Jessie",
    grades: [100, 100, 100],
    email: "jessie's emal"
}

// can use type instead of interface but you cant modify (like a constant)
type Jessie = {
    name: string,
    hobby: string
}

// once a type is declared you cant change
// type Jessie = {

// }

function createStudent(data: IStudent){
    let newStudent: IStudent = {
        name: data.name,
        grades: data.grades,
        email: data.email
    }
}

// interface IJacob {
//     name: string,
//     hobby: string
// }

// let jacob: IJacob = {
//     name: "jacob",
//     hobby: "singing"
// }