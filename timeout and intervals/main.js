console.log(1)

setTimeout(function(){
    console.log(2)
}, 0)

console.log(3)

let counter = 0

const id = setInterval(function(){
    console.log(counter)
    counter++
    if(counter>30){
        clearInterval(id)
    }
}, 200)

