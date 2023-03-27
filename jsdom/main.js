const head = document.querySelector(".head")
const toggleButton = document.querySelector(".toggleState")
// alert('wait please')
// head.innerText = "i changed the header"


const heads = document.querySelectorAll(".head")

console.log(heads)

heads.forEach(function(item, index){
    item.style.color="blue"
    item.style.fontSize="60px";
})



toggleButton.addEventListener("click", function(){
    heads.forEach(function(item, index){
            // item.style.backgroundColor="pink"
            // item.classList.add("hide")
            // item.classList.remove("hide")
            item.classList.toggle("hide")
    })
})