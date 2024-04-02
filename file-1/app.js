// let arr = [2,3,4,5,6,6]
// function destructure(arr){
// let [a,b,c,d,e,f] = arr;
// console.log(b);
// }
// destructure(arr);
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
let mergedarr = (fruits , vegetables)=>{
return [...fruits , ...vegetables];
// console.log(...fruits , ...vegetables)
}
let newArr = (...mergedarr)=>{
let newarr = [];
newArr = [...mergedarr]
console.log(newArr)

}
let merge = mergedarr(fruits,vegetables);
newArr(...merge);
//

//cloning function///

const person = { name: "John", age: 30, address: "123 Main St" };
let copy=(person)=>{
return{...person};
}
let copyperson = copy(person);
console.log(copyperson)


//NEW OBJECT CREATION//
const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
function merger(student , course){
return {...student , ...course};
// console.log(...course,...student);
}
let studentnew = merger(student , course);
console.log(studentnew);

//combining nested arr//
const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
  ];

  let mergerarr12=(spreadarr1 ,spreadarr2)=>{
let newarr12 = [...spreadarr1 , ...spreadarr2];
console.log(newarr12);
  }
  mergerarr12(array1 , array2)
