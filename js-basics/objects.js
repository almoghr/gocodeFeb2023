const person = {
    name:'almog',
    age: 31,
    mail: 'almoghr36@gmail.com',
    sayHello: function(){
        console.log('heeeeyyyyyy')
    },
    job: {
        title:'ceo',
        salary:'50k'
    }
}

console.log(person)

console.log(person.name, person.age)
console.log(person['name'], person['age'])
console.log(person.job)
console.log(person.job.title)
console.log(person.job.salary)
console.log(person['job'])
console.log(person['job']['title'])
console.log(person['job'].salary)
person.sayHello()


const jobRequirements = {
    front:{
        framework:'angular',
        lang:'js',
        engine:'node'
    },
    back:{
        runtime:'nodejs',
        db:'mongoose',
        server:'express'
    },
    
}

function printWhateverIWantFromTheObject(key1,key2){
    console.log(jobRequirements[key1][key2])
    // console.log(jobRequirements.key1.key2) // לא תקין
}

console.log(jobRequirements['back']['db'])

printWhateverIWantFromTheObject('back', 'db')


person.name = 'david'
person.age = 21;
person.job.title ='DEVELOPER'
console.log(person)

person.lastName = 'shukrun'
person.pet = {
    race:'bulldog',
    color:'blue'
}
person.job.dayOff = 'friday'
console.log(person)

const person2 = {
    name:'almog',
    age: 31,
    mail: 'almoghr36@gmail.com',
    sayHello: function(){
        console.log('heeeeyyyyyy')
    },
}

for (const key in person2) {
    console.log(key + ':' + person2[key]);
  }

//   console.log(person['2']) 