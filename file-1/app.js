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
