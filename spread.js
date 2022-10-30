let a=[1,2,3]
let b=[4,5,6]



//let c=a.concat(b)
let c=[...a,...b, 9]
console.log(c)

console.log("-------------------------------------")
let obj1={
    name: 'anand'
}
let obj2={
    age:'23'
}
let obj3={
    love : 'akila'
}

let obj4={...obj1,...obj2,...obj3}
console.log(obj4)