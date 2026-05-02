// const mySym=Symbol("key")
// const newObj={
//     name:"Dhanush",
//     [mySym]:"key",
//     age:20
// }

// newObj.college='MITE'

// // console.log(newObj.college)
// // console.log(newObj[mySym])
// // //Object.freeze(newObj)
// // console.log(newObj)

// newObj.greeting=function() {
//     console.log(`Hello ${this.name}`)
// }
// console.log(newObj.greeting())

// const newObj={
//     name:"Dhanush",
//     //[mySym]:"key",
//     age:20
// }

// delete newObj["age"]
// console.log(newObj)


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={...obj1,...obj2}
console.log(obj3)