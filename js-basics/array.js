// const arr = [1, 2, 3, 4, 5, 6];
// const strArr = ["almog", "brad", "carl"];
// const arrArr = [["almog", "sammy"], ["brad", "ben"], ["carl", "candy"]];
// const objArr = [
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
// ];
// const mixedArr = [1, 8, "a", 5, true, false, {}, { name: "almog" }];

// console.log(arr[0], arr[arr.length-1])

// console.log(strArr[0][3],strArr[1],strArr[2])
// console.log(arrArr[0][1][4])

// //arrArr[0] = ["almog", "sammy"]
// //arrArr[0][1] = "sammy"
// //arrArr[0][1][4] = "y"

// console.log(strArr.length)
// console.log(strArr[strArr.length-1])
// for(let i = 0; i < strArr.length; i++){
//     console.log(strArr[i][0])
// }

//array methods

const fruitsArr = [
  "Apple",
  "Banana",
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
fruitsArr.forEach(function (item, index) {
  console.log(item, index);
});

numbers.forEach(function (num) {
  console.log(num ** 4);
});

//foreach is good for actions on the array elements
//but NOT for changing the array and getting a new one instead!

const newNumbersArr = numbers.map(function (num) {
  return num ** 4;
});

console.log(newNumbersArr, numbers);
// map is working like forEach but returns a value
// the value is a new array with the modified elements

const filteredNumbers = numbers.filter(function (item) {
  return item > 5;
});

console.log(filteredNumbers);

// filter is working like forEach but returns a value
// that answers true to the specific condition we gave

const foundNumber = numbers.find(function (item) {
    return item > 5;
  })

  const foundIndex = numbers.findIndex(function (item) {
    return item > 5;
  })

  console.log(foundNumber, foundIndex);

//find is working like filter but stops after
// the first true statement it finds and returns the item
//findIndex is doing the exact same thing but return the index of the item

const arr = ['hello','there','my','name','is']

const s = arr.push('almog')
const u = arr.unshift('welcome and')
console.log(arr, s, u)

//push is a method that inserts an element to the end of the array
//unshift is a method that inserts an element to the start of the array

const p = arr.pop()
const sh = arr.shift()
console.log(arr, p, sh)

//pop is a method that removes the last element of the array and returns it
//shift is a method that removes the first element of the array and returns it

const fruits2 = ['Apple', 'Banana', 'Orange', 'Orange'];

const indFruits2 = fruits2.indexOf("Orange")
const ind2Fruits2 = fruits2.indexOf("an")
const ind3Fruits2 = fruits2.includes("Orange")
const ind4Fruits2 = fruits2.includes("an")


console.log(indFruits2, ind2Fruits2, ind3Fruits2, ind4Fruits2)

//indexOf, like string, will return the index of the element in the array
//if nothing will be found then returns -1
//includes, like string, will return a true statement if the element is in the array
//if nothing will be found then returns false

const newNumbers = numbers.slice(3, 7)
const copyNumbers = numbers.slice()

console.log(newNumbers, numbers, copyNumbers)

//slice is a function that lets you get a portion 
//of the array without modifying the array itself

const notGoodCopyArr = numbers
console.log(notGoodCopyArr,numbers)

notGoodCopyArr.push('hello')
console.log(notGoodCopyArr,numbers)

// exmaple for a save by reference with arrays - should use slice \ whatever we will learn sooner or later

const splicedNumbers = numbers.splice(2, 8)

console.log(splicedNumbers, numbers)

//splice is a function that lets you get a portion 
//of the array and modifies the array itself

const firstArr = [1,2,3]
const secondArr = [4,5,6]
const thirdArr = [7,8,9]


const newArr = firstArr.concat(secondArr, thirdArr)

console.log(newArr)

//concat literally concatanates array together and returns the new array


const elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: Fire,Wind,Rain

console.log(elements.join(''));
// expected output: FireWindRain

console.log(elements.join('-'));
// expected output: Fire-Wind-Rain

console.log(elements.join('*'));
// expected output: Fire*Wind*Rain

console.log(numbers.join('+'))

//join turns an array to a string with the specified seperator.

const date = '22/02/2023:08:45:06'

const dateWithoutHour = date.split(':')
console.log(dateWithoutHour[0])

const splittedDate = dateWithoutHour[0].split('/')
console.log(splittedDate)

//split turns a string to an array and divides by the specified seperator.

console.log(newArr)

newArr.reverse()

console.log(newArr)

// reverse turns all the items in the array from the end to the beginning
// it is mutating the original array

























