

//כתבו פונקציה המקבלת שני מספרים ומציגה את המספר הגדול מבינהם והריצו אותה

function whichIsBigger (num1, num2) {
    if(num1>num2){
        console.log(num1)
    } else if (num1===num2){
        console.log('both are the same')
    } else{
        console.log(num2)
    }
}

whichIsBigger(2,1)
whichIsBigger(2,10)
whichIsBigger(2,2)

function whichIsBigger2 (num1, num2) {
    if(num1>num2){
        console.log(num1)
    } else if (num1===num2){
        console.log('both are the same')
    } else{
        console.log(num2)
    }
}

const firstNumber = parseInt(prompt('enter a number for evaluation'))
const secondNumber = parseInt(prompt('enter a number for evaluation'))

whichIsBigger2(firstNumber, secondNumber)


//כתבו פונקציה המקבלת שני מספרים, ותו שיגדיר מה לבצע עליהם (*, /, +) והציגו תשובה מתאימה.
// הריצו את הפונקציה מהתוכנית ע״י 3 קלטים

function whatToEvaluate(num1,num2,operator){
    if(operator==="+"){
        console.log(num1+num2)
    } else if (operator==="-"){
        console.log(num1-num2)
    }else if(operator==="*"){
        console.log(num1*num2)
    } else{
        console.log('i only asked + * - not anything else')
    }
}

whatToEvaluate(5,78,"//")

//כתבו פונקציה המקבלת שני מספרים ומציגה את סכומם ופונקציה אחרת המקבלת שני מספרים ומציגה את מכפלתם. 
//התוכנית תחליט איזו פונקציה להריץ לפי קלט מהמשתמש

function multi(num1,num2){
    console.log(num1*num2)
}

function plus(num1,num2){
    console.log(num1+num2)
}

const firstNum = parseInt(prompt('enter a number for evaluation'))
const secondNum = parseInt(prompt('enter a number for evaluation'))
const operation = prompt('enter an operator')

if(operation === "+"){
    plus(firstNum, secondNum)
} else if( operation === "*"){
    multi(firstNum,secondNum)
}


