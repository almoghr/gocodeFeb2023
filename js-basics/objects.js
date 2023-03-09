// const person = {
//     name:'almog',
//     age: 31,
//     mail: 'almoghr36@gmail.com',
//     sayHello: function(){
//         console.log('heeeeyyyyyy')
//     },
//     job: {
//         title:'ceo',
//         salary:'50k'
//     }
// }

// console.log(person)

// console.log(person.name, person.age)
// console.log(person['name'], person['age'])
// console.log(person.job)
// console.log(person.job.title)
// console.log(person.job.salary)
// console.log(person['job'])
// console.log(person['job']['title'])
// console.log(person['job'].salary)
// person.sayHello()


// const jobRequirements = {
//     front:{
//         framework:'angular',
//         lang:'js',
//         engine:'node'
//     },
//     back:{
//         runtime:'nodejs',
//         db:'mongoose',
//         server:'express'
//     },
    
// }

// function printWhateverIWantFromTheObject(key1,key2){
//     console.log(jobRequirements[key1][key2])
//     // console.log(jobRequirements.key1.key2) // לא תקין
// }

// console.log(jobRequirements['back']['db'])

// printWhateverIWantFromTheObject('back', 'db')


// person.name = 'david'
// person.age = 21;
// person.job.title ='DEVELOPER'
// console.log(person)

// person.lastName = 'shukrun'
// person.pet = {
//     race:'bulldog',
//     color:'blue'
// }
// person.job.dayOff = 'friday'
// console.log(person)

// const person2 = {
//     name:'almog',
//     age: 31,
//     mail: 'almoghr36@gmail.com',
//     sayHello: function(){
//         console.log('heeeeyyyyyy')
//     },
// }

// for (const key in person2) {
//     console.log(key + ':' + person2[key]);
//   }

// //   console.log(person['2']) 

// console.log(Object.keys(person))
// console.log(Object.keys(person).length)



//HOMEWORK


// //EX1

// const cat = {
//     color:'black',
//     name:'mitzi',
//     sayMeow: function(){
//         console.log('mmmmmeeeeoooowwwW!')
//     }
// }
// console.log(cat)

// //EX2 

// const nameOfProperty = prompt("choose a property you would like to add")
// const valueOfProperty = prompt("choose a value you world like to add to the property")

// cat[nameOfProperty] = valueOfProperty
// console.log(cat)
//EX3

// function validateName(catObj, catName){
//     return (catObj.name === catName)
// }

// console.log(validateName(cat, "shmil"))
// console.log(validateName(cat, "mitzi"))

//EX4

// const objOne = {
//     a:1,
//     b:2,
//     c:3,
// }

// const objTwo = {
//     d:4,
//     e:5,
//     f:6,
// }

// function combineObjects(obj1, obj2){
//     const mergedObject = {};
//     for(const key in obj1){
//         mergedObject[key] = obj1[key]
//     }
//     for(const key in obj2){
//         mergedObject[key] = obj2[key]
//     }
//     return mergedObject
// }

// combineObjects(objOne,objTwo)


//EX5

// const dogs = {}

// for(let i = 0; i < 3; i++){
//     const dogNum = 'dog'+(i+1)
//     dogs[dogNum] = {}
//     dogs[dogNum]['color'] = prompt("")
// }

// console.log(dogs)

//EX6


// const fishes = {}

// for(let i = 0; i < 3; i++){
//     const fishNum = 'fish'+(i+1)
//     fishes[fishNum] = {}
//     fishes[fishNum]['name'] = prompt("")
// }
// console.log(fishes)
// const chosenName = prompt("enter any name")

// for (const key in fishes){
//     console.log(validateName(fishes[key], chosenName))
// }