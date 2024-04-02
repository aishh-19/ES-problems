const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
let employeinfo = (employees)=>{
    let [a , b , c ] = employees;
  let secondemp = {
    secondname : b.name,
    age : b.age,
    department : b.department,
    salary : b.salary
  }
  console.log(secondemp);
}  
employeinfo(employees);

//avg salary //
let avgsalary=(employees)=>{
    let [a , b , c ] = employees;
    let sum = 0;
    for(let i of employees){
        sum += i.salary
    }
    let avg = sum/3;
    return avg;
}
console.log(avgsalary(employees));


//destructuring into string//
let thirdemploy=(employees)=>{
   let [a,b,c] = employees;
let thirdempinfo = {
    thirdemName : c.name,
    thirdempAge : c.age,
    thirdemployDepartment : c.department, 
    thirdemploySalary : c.salary,
    bonus : (10 / 100 ) * c.salary ,
}
// return thirdempinfo;
let intostring = `Employee: ${thirdempinfo.thirdemName}, Age: ${thirdempinfo.thirdempAge}, Salary: ${thirdempinfo.thirdemploySalary}, Bonus: ${thirdempinfo.bonus}`;
console.log(intostring)
}
thirdemploy(employees);