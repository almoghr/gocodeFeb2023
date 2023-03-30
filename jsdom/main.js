const head = document.querySelector(".head")
const toggleButton = document.querySelector(".toggleState")
let hasToggleBeenClicked = false
// // alert('wait please')
// head.innerText = "i changed the header"


const heads = document.querySelectorAll(".head")

// console.log(heads)

// heads.forEach(function(item, index){
//     item.style.color="blue"
//     item.style.fontSize="60px";
// })



toggleButton.addEventListener("click", function(){
    if(!hasToggleBeenClicked){
        heads.forEach(function(item, index){
                // item.style.backgroundColor="pink"
                // item.classList.add("hide")
                // item.classList.remove("hide")
                item.classList.toggle("hide")
        })
        hasToggleBeenClicked=true
    }
})

// const myPar = document.createElement("p")
// console.log(myPar)
// // myPar.innerText = "<h1>hello everyone</h1>"
// // console.log(myPar)
// myPar.innerHTML = "<h1>hello everyone</h1>"
// console.log(myPar)


const ul = document.createElement("ul")

for(let i = 0; i < 10; i++ ){
    const li = document.createElement("li")
    li.innerText = "item number " + (i+1)
    li.style.color = "red"
    li.style.fontWeight="bolder"
    ul.append(li)
}


const div = document.createElement("div")
const button1 = document.createElement("button")
button1.innerText = "click me1"
const button2 = document.createElement("button")
button2.innerText = "click me2"
const button3 = document.createElement("button")
button3.innerText = "click me3"
const button4 = document.createElement("button")
button4.innerText = "click me4"
const button5 = document.createElement("button")
button5.innerText = "click me5"

div.append(button1, button2, button3, button4, button5)
document.body.append(div)
document.body.append(ul)
// document.body.append(myPar)

button3.parentElement.removeChild(button3)
div.innerHTML=""
let counter = 0;
// document.body.addEventListener("", function(event){
//     // console.log(event)
//     counter += 5
//     console.log(counter)
// })

const inp1 = document.querySelector(".inp1")
const inp2 = document.querySelector(".inp2")
const inp3 = document.querySelector(".inp3")

inp1.addEventListener("change", function(event){
    console.log(event)
})

inp2.addEventListener("input", function(event){
    if(event.target.value.includes("#")){
        event.preventDefault()
    }
    console.log(event)
})

inp3.addEventListener("blur", function(event){
    console.log(event)
})


const inputs = document.querySelectorAll(".inp")
const submitBtn = document.querySelector(".formSubmitter")
const form = {}
    inputs.forEach(function(input){
        input.addEventListener("change", function(event){
            form[event.target.name] = event.target.value
            console.log(form)
        }
        
        )

    })
    console.log(form)
submitBtn.addEventListener("click", function(){
    if(form.fullname.length < 5){
        console.log("too short of a name")
        return
    } 
    if(!form.email.includes("@")){
        console.log("error with your email")
        return
    } 
    if(form.password.length < 10){
        console.log("password too short")
        return
    }
    console.log(form)
})