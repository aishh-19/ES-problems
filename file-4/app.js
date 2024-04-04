const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };
 

 
 let countcalculation=(school)=>{
  let {} = school;
  let {departments : destructure} = school
  let{
  math : {students : mathstudentscount , teachers: mathsteacherscount} , 
  history : {students : historystudentscount , teachers : historyteacherscount}} = destructure
  return {mathsteacherscount , mathstudentscount , historystudentscount , historyteacherscount};
 }
 let count = countcalculation(school);
 console.log(count);

 let topstudent=(student , course)=>{
let {courses} = school;
// let [a,b,c,d] = course;
let [students] = school;
let [a,b,c,d] = students
 }


 let gengreetings=(name , language = "english")=>{
let greetings = {
'english' : `hello, ${name}`,
'spanish' : `!hola,${name}`,
'french' : `Bonjaour! ${name}`,
}
return greetings[language] || `Hello, ${name}!`;
 }
console.log(gengreetings("ashish" , "spanish"));
console.log(gengreetings("ashish"));
console.log(gengreetings("ashish" , "french"));