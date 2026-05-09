// const promiseOne=new Promise(function(resolve,reject) {
//    //Do an async taks
//    //DB Calls
//    setTimeout(() => {
//     console.log('Asyn task is complete')
//     resolve()
//    }, 1000); 
// })

// promiseOne.then(function() {
//     console.log("Promise consumed");
    
// })


// new Promise(function(resolve,reject) {
//     setTimeout(() => {
//     console.log('Asyn task 2 is complete')
//     resolve()
//    }, 1000); 
// }).then(function() {
//     console.log("Async 2 resolved")
// })

// const promiseThree=new Promise(function(resolve,reject) {
//     setTimeout(function(){
//         resolve({username:"Dhanush",email:"dhanush@gmail.com"})
//     }, 1000);
// })
// promiseThree.then(function(user) {
//     console.log(user)
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error=true;
//         if(!error){
//             resolve({
//                 username:"Dhanush",
//                 password:"123456789"
//             })
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000);
// })
// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)

// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Done")
// })

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({
                username:"Dhanush",
                password:"123456789"
            })
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
   try {
     const response=await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error)
   }
    
}
consumePromiseFive()