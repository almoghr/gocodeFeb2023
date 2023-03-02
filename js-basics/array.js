const arr = [1, 2, 3, 4, 5, 6];
const strArr = ["almog", "brad", "carl"];
const arrArr = [["almog", "sammy"], ["brad", "ben"], ["carl", "candy"]];
const objArr = [
  { name: "almog" },
  { name: "almog" },
  { name: "almog" },
  { name: "almog" },
  { name: "almog" },
  { name: "almog" },
  { name: "almog" },
  { name: "almog" },
  { name: "almog" },
  { name: "almog" },
  { name: "almog" },
  { name: "almog" },
];
const mixedArr = [1, 8, "a", 5, true, false, {}, { name: "almog" }];

console.log(arr[0], arr[arr.length-1])

console.log(strArr[0][3],strArr[1],strArr[2])
console.log(arrArr[0][1][4])

//arrArr[0] = ["almog", "sammy"]
//arrArr[0][1] = "sammy"
//arrArr[0][1][4] = "y"

console.log(strArr.length)
console.log(strArr[strArr.length-1])
for(let i = 0; i < strArr.length; i++){
    console.log(strArr[i][0])
}