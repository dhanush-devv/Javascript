// //object literal

// const user={
//     //properties
//     username:"Dhanush",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(params) {
//         console.log(this.username)
//     }
// }
// console.log(user.getUserDetails());


//contructor function

// const promiseOne=new Promise()

// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("Dhanush", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo)
