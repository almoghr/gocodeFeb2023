// //string initialisation

// const a = "hey"
// const b = 'hello'
// const c = `wow`

// const d = `My name is Jack O'brian`

// console.log(d.length)
// console.log(d[0], d[5], d[d.length-1])


// let stringBuilder = ''
// let counter = 0
// for(let i = 0; i < d.length-1; i++){
//     console.log(d[i])

//     if(d[i] === 'a'){
//         stringBuilder += d[i]
//         counter++
//     }
// }

// console.log(stringBuilder, counter)

// const phrase =  "hello my name is Almog, i am 31 years old"


// console.log(phrase.indexOf('e'))
// console.log(phrase.lastIndexOf('e'))
// // console.log(phrase[22])

// function customIndexOf (letter, fullString){
//     let index;
//     for(let i = 0; i < fullString.length -1; i++){
//         if(fullString[i] === letter){
//             index = i
//             break
//             //continue - stop this run and go on to the next
//         }
//     }
//     return index
// }
// function customLastIndexOf (letter, fullString){
//     let index;
//     for(let i = fullString.length-1; i > 0; i--){
//         if(fullString[i] === letter){
//             index = i
//             break
//         }
//     }
//     return index
// }

// console.log(customIndexOf('o', phrase))
// console.log(customLastIndexOf('o', phrase))

// const firstName = "almog"
// const lastName = "ram"
// const firstName2 = "ALMOG"

// console.log(firstName.toUpperCase())
// console.log(firstName2.toLowerCase())

// let fullname = ''

// fullname = firstName[0].toUpperCase() + firstName.slice(1) + ' ' + lastName[0].toUpperCase() + lastName.slice(1)

// console.log(fullname)
// console.log(phrase.slice(6,18))
// console.log(phrase.slice(-1))

// console.log(phrase.includes('ell'))
// console.log(phrase.includes('elh'))
// console.log(phrase.indexOf('4'))

// const ab = a.concat(b)
// const ab2 = a+b
// console.log(ab, ab2)

// const num = 50
// console.log(num.toString(), num)

// const email = "      almoghr36@gmail.com       "
  
// console.log(email, email.trim())

// function customTrim(str){
//     let returnedString
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === ' '){
//             returnedString = str.slice(i+1)
//         } else{
//             break
//         }

//     }
//     isNotSpace = false
//     for(let i = returnedString.length-1; i > 0; i--){
//         if(returnedString[i] === " "){
//             returnedString = returnedString.slice(0, i)
//         } else{
//             break
//         }


//     }
//     return returnedString
// }

// console.log(customTrim(email))

//ex4

function mixStrings(str1, str2){
    let newStr = ''
    for(let i = 0; i < str1.length; i++){
        newStr += str1[i]+str2[i]
    }
    console.log(newStr)
}

mixStrings('abc', 'def')

function mixStrings2(str1, str2){
    let newStr = ''

    let biggerLength;
    if(str1.length > str2.length){
        biggerLength = str1.length
    } else{
        biggerLength = str2.length
    }
    for(let i = 0; i < biggerLength; i++){
        if(str1[i]){
            newStr += str1[i]
        }
        if(str2[i]){
            newStr += str2[i]
        }
    }
    console.log(newStr)
}

mixStrings2('abc', 'def4654894864186868168')

function unique(str){
    let newStr = ''
    for(let i = 0; i < str.length; i++){
        if(!newStr.includes(str[i])){
            newStr += str[i]
        }
    }
    console.log(newStr)
    return newStr
}

const callUnique = unique('thequickbrownfoxjumpsoverthelazydog');

console.log(callUnique)

function firstSingleLetter(str){
    for(let i = 0; i < str.length; i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            return str[i]
        }
    }
}

firstSingleLetter('abacddbecg')