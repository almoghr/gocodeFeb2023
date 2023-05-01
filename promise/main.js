// let isMomHappy = true;
// // Promise
// // willIGetNewPhone
// //        .then((fulfilled) => {
// //            // yay, you got a new phone
// //            console.log(fulfilled);
// //         // output: { brand: 'Samsung', color: 'black' }
// //        })
// //        .catch(error => {
// //            // oops, mom don't buy it
// //            console.log(error)
// //            console.log(error.message);
// //         // output: 'mom is not happy'
// //        });



// const willIGetNewPhone = new Promise(
//     function(resolve, reject){ // fat arrow
//         if (isMomHappy) {
//             const phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone);
//         } else {
//             const reason = new Error('mom is not happy');
//             reject(reason);
//         }
//     }
// );



// const showOff = phone => {
//     return new Promise(
//       (resolve, reject) => {
//         let message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone`;
  
//         resolve(message);
//       }
//     );
//   };
  

// //   const askMom = function () { 
// //     console.log('before asking Mom'); // log before
// //     willIGetNewPhone
// //         .then(showOff)
// //         .then(fulfilled => console.log(fulfilled))      
// //   .catch(error => console.log(error.message));
// //     console.log('after asking Mom'); // log before
// // //   setTimeout(function(){
// // //     console.log('after asking Mom'); // log before
// // //   },0)
// // };

// // askMom()

// // call our promise
// async function askMom() {
//     try {
//       console.log('before asking Mom');
  
//       const phone = await willIGetNewPhone;
//       const message = await showOff(phone);
  
//       console.log(message);
//       console.log('after getting a response');
//     } catch (error) {
//       console.log(error.message);
//     }
//   } askMom()
//   console.log('hello')
  

// const getData = async () => {
//     try{
//         const response = await fetch('https://api.tvmaze.com/schedule/full')
//         const data = await response.json()
//         handleData(data)
//         // const ul = document.createElement("ul")
//         // console.log(response)
//         // console.log(data)
//         // data.forEach((episode) => {
//         //     const li = document.createElement("li")
//         //     li.innerText = episode.name
//         //     ul.append(li)
//         // })
//         // document.body.append(ul)
//     } catch(err){
//         console.log(err)
//     }
// }

// getData()

// const handleData = (data) => {
//     console.log(data)
//             const ul = document.createElement("ul")
//         console.log(data)
//         data.forEach((episode) => {
//             const li = document.createElement("li")
//             li.innerText = episode.name
//             ul.append(li)
//         })
//         document.body.append(ul)
// }


const getAllUsers = async () => {
    try{
        const response = await fetch('https://reqres.in/api/users')
        const {data} = await response.json()
        data.forEach(handleUserData)
    } catch(err){
        console.log(err)
    }
}

getAllUsers()

const handleUserData = (user) => {
  const container = document.createElement("div")
  const pId = document.createElement("p")
  const fullNameHeader = document.createElement("h2")
  const emailAnchor = document.createElement("a")
  const avatarImg = document.createElement("img")

  container.classList.add("container")

  emailAnchor.innerText = user.email
  fullNameHeader.innerText = `${user.first_name} ${user.last_name}` 
  pId.innerText = user.id

  emailAnchor.href = `mailto:${user.email}`
  avatarImg.src=user.avatar
  
  container.append(pId, fullNameHeader, emailAnchor,avatarImg)
  document.body.append(container)
}


