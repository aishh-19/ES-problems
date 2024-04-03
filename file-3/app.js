const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  let highestPaid=(employees)=>{
    let [a , b, c] = employees;
    if(a.salary > b.salary && a.salary > c.salary){
        return a
    }else if(b.salary > a.salary && b.salary > c.salary){
return b
    }else{
return c
    }
  }
let highestSalary = highestPaid(employees);
console.log("highest salary", highestSalary);