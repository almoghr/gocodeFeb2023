import fs from 'fs'
// const powerByFive = (num) => {
//     console.log(num ** 5)
// }

// powerByFive(10)
// powerByFive(15)

// //reading file
// fs.readFile("./a.txt", 'utf8', (err, data) => {
//     err ? console.log(err.message) : console.log(data)
// })

// const dataFromSync = fs.readFileSync("./a.txt", 'utf8')
// console.log(dataFromSync)

// //writing file

// // STEP 1: Reading JSON file 
const users = JSON.parse(fs.readFileSync("./users.json", 'utf8'))
  
// Defining new user 
const argvArr = [...process.argv]
argvArr.splice(0,2)
console.log(argvArr)
const keysArr = ['name', 'age', 'languages']
let user = {}; 
argvArr.forEach((arg,index) => user[keysArr[index]] = arg)
 console.log(user)
//  console.log(JSON.parse(argvArr[argvArr.length-1]))
// STEP 2: Adding new data to users object 
users.push(user); 
 
// STEP 3: Writing to a file 
fs.writeFile("users.json", JSON.stringify(users), err => { 
 
	// Checking for errors 
	if (err) throw err; 
 
	console.log("Done writing"); // Success 
});

console.log(process.argv)