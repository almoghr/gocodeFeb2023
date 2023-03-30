// const head = document.querySelector(".head")
// const toggleButton = document.querySelector(".toggleState")
// // alert('wait please')
// // head.innerText = "i changed the header"


// const heads = document.querySelectorAll(".head")

// console.log(heads)

// heads.forEach(function(item, index){
//     item.style.color="blue"
//     item.style.fontSize="60px";
// })



// toggleButton.addEventListener("click", function(){
//     heads.forEach(function(item, index){
//             // item.style.backgroundColor="pink"
//             // item.classList.add("hide")
//             // item.classList.remove("hide")
//             item.classList.toggle("hide")
//     })
// })

// const myPar = document.createElement("p")
// console.log(myPar)
// // myPar.innerText = "<h1>hello everyone</h1>"
// // console.log(myPar)
// myPar.innerHTML = "<h1>hello everyone</h1>"
// console.log(myPar)


const ul = document.createElement("ul")
debugger
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
debugger
button3.parentElement.removeChild(button3)
div.innerHTML=""