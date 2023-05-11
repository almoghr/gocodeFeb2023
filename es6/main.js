const fname = 'almog'
const lname = 'ram'
const age = 31
const job = 'Team Leader'
const arr = [1,2,3,4]
const phrase = 'hi, my name is ' + fname + ' ' + lname + ' i am ' + age + ' years old and i work as a ' + job
const es6Phrase = `hi, my name is ${fname} ${lname} i am ${age} years old and i work as a ${job}`
const hebPhrase = `ע"י ב"ה שלום, השם שלי הוא ג'מאל`
console.log(phrase)
console.log(es6Phrase)
console.log(hebPhrase);

const myFunc = () => {
    console.log('hello')
    return 'shalom'
}

console.log(myFunc())

const add = (num1=100, num2=200) => num1+num2

const doSomething = () => {

}

console.log(add(8,5))
console.log(add(15,5))
console.log(add(8,455))
console.log(add(8,5))
console.log(add())
console.log(add(undefined, 5))

const arrFilt = arr.filter(function(num){
    return num>2
})

const arrFilt2 = arr.filter((num) => num>2)

console.log(arrFilt, arrFilt2)

const sum = (x,y,z) => x+y+z

const numbers = [12,23,53]
const [small, med, big] = numbers

console.log(small, med, big)
console.log(sum(...numbers))

const obj = {a:'h', b:'c'}
const obj2 = {y:'u', g:'r'}

const combined = {...obj, ...obj2}

console.log(combined)

combined.a = 543
console.log(obj, obj2, combined)


const a = 'hello'
let b  = a

console.log(b,a)

b="shalom"

console.log(b,a)


const c = {name:"almog"}
let d = c

console.log(d,c)

d.name="david"

console.log(d,c)


const person = {
    namee:'boaz',
    agee:18,
    pet:'dog',
    greet:function(){
        return 'hi'
    }
}

const {greet,namee, agee} = person

console.log(namee, greet(), agee)



const dummyProducts = [
    {
      title: "coat",
      price: 125.64,
      src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLPLBN2tYVRBMaU9eomNw-bvrQDZhP1NYH87bK1bzsn-BL_tsL5PrdaISbyBZAfCU3IaZ1mt5l6qWIjNhErQy87VE1g162uscqXWEv5cure3BKLZw8JjBQ3w&usqp=CAE",
    },
    {
      title: "coat",
      price: 125.64,
      src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLPLBN2tYVRBMaU9eomNw-bvrQDZhP1NYH87bK1bzsn-BL_tsL5PrdaISbyBZAfCU3IaZ1mt5l6qWIjNhErQy87VE1g162uscqXWEv5cure3BKLZw8JjBQ3w&usqp=CAE",
    },
    {
      title: "coat",
      price: 125.64,
      src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLPLBN2tYVRBMaU9eomNw-bvrQDZhP1NYH87bK1bzsn-BL_tsL5PrdaISbyBZAfCU3IaZ1mt5l6qWIjNhErQy87VE1g162uscqXWEv5cure3BKLZw8JjBQ3w&usqp=CAE",
    },
    {
      title: "coat",
      price: 125.64,
      src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLPLBN2tYVRBMaU9eomNw-bvrQDZhP1NYH87bK1bzsn-BL_tsL5PrdaISbyBZAfCU3IaZ1mt5l6qWIjNhErQy87VE1g162uscqXWEv5cure3BKLZw8JjBQ3w&usqp=CAE",
    },
    {
      title: "coat",
      price: 125.64,
      src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLPLBN2tYVRBMaU9eomNw-bvrQDZhP1NYH87bK1bzsn-BL_tsL5PrdaISbyBZAfCU3IaZ1mt5l6qWIjNhErQy87VE1g162uscqXWEv5cure3BKLZw8JjBQ3w&usqp=CAE",
    },
    {
      title: "coat",
      price: 125.64,
      src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLPLBN2tYVRBMaU9eomNw-bvrQDZhP1NYH87bK1bzsn-BL_tsL5PrdaISbyBZAfCU3IaZ1mt5l6qWIjNhErQy87VE1g162uscqXWEv5cure3BKLZw8JjBQ3w&usqp=CAE",
    },
    {
      title: "coat",
      price: 125.64,
      src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLPLBN2tYVRBMaU9eomNw-bvrQDZhP1NYH87bK1bzsn-BL_tsL5PrdaISbyBZAfCU3IaZ1mt5l6qWIjNhErQy87VE1g162uscqXWEv5cure3BKLZw8JjBQ3w&usqp=CAE",
    },
    {
      title: "coat",
      price: 125.64,
      src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLPLBN2tYVRBMaU9eomNw-bvrQDZhP1NYH87bK1bzsn-BL_tsL5PrdaISbyBZAfCU3IaZ1mt5l6qWIjNhErQy87VE1g162uscqXWEv5cure3BKLZw8JjBQ3w&usqp=CAE",
    },
    {
      title: "coat",
      price: 125.64,
      src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLPLBN2tYVRBMaU9eomNw-bvrQDZhP1NYH87bK1bzsn-BL_tsL5PrdaISbyBZAfCU3IaZ1mt5l6qWIjNhErQy87VE1g162uscqXWEv5cure3BKLZw8JjBQ3w&usqp=CAE",
    },
    {
      title: "coat",
      price: 125.64,
      src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLPLBN2tYVRBMaU9eomNw-bvrQDZhP1NYH87bK1bzsn-BL_tsL5PrdaISbyBZAfCU3IaZ1mt5l6qWIjNhErQy87VE1g162uscqXWEv5cure3BKLZw8JjBQ3w&usqp=CAE",
    },
  ];
  

  const prices = dummyProducts.map(p => p.price)

  console.log(prices)