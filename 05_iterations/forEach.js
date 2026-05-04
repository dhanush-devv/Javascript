//const arr=[1,2,3,4,5,5,6]

// const values=arr.forEach((item)=>{
//     console.log(item)
//     //return item
// })
//console.log(values)

// const arr=[1,2,3,4,5,6]

// let newNum=arr.filter((num)=>{
//    return num>4


// })

// console.log(newNum)

// const arr=[1,2,3,4,5,6,7,8,9,10]

// const newNums=arr.map((num)=>{
//    return num+10
// })
// console.log(newNums)


// const arr=[1,2,3,4,5,6,7,8,9,10]

// const newNums=arr
//     .map((num)=>num*10)
//     .map((num)=>num+1)
//     .filter((num)=>num>=40)
// console.log(newNums)


const arr=[1,2,3]

const sum=arr.reduce((acc,curr)=>{
    return acc+curr;
},0)
console.log(sum)


