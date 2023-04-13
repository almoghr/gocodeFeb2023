const body = document.querySelector("body");
const ul = document.createElement("ul")
const btnDel = document.createElement("button")

// const buttons = ["green", "blue", "grey", "gold", "aqua"]

// buttons.forEach(function(btn) {
//     const newBtn = document.createElement("button")
//     newBtn.innerText = btn
//     newBtn.style.backgroundColor = btn
//     newBtn.addEventListener("click", function(){
//         body.style.backgroundColor = btn
//     })
//     body.append(newBtn)
// })

// setInterval(() => {
//    const ind = Math.floor(Math.random() * buttons.length) 
//    body.style.backgroundColor = buttons[ind]
//    console.log(ind)
// }, 2000);

const numArr = [1,2,3,4,5,6,7,8,9]

btnDel.innerText="DELETE"

numArr.forEach(function(num){
    const li = document.createElement("li")
    li.innerText = num
    ul.append(li)
})

btnDel.addEventListener("click", function(){
    numArr.pop()
    ul.innerHTML = ""

    numArr.forEach(function(num){
        const li = document.createElement("li")
        li.innerText = num
        ul.append(li)
    })
    if(numArr.length === 0){
        btnDel.style.display = "none"
    }
})

body.append(ul, btnDel)