console.log("------------Name Split and store in new Variable-------------------------")
let name="Thanga anantha kumar"
let newName=name.split(' ')

//newName will be a Array
console.log(newName)


let FirstName=newName[0]
let MiddleName=newName[1]
let LastName=newName[2]

//let [FirstName, MiddleName ,LastName]=newName

console.log(FirstName)
console.log(MiddleName)
console.log(LastName)
console.log("------------Object to variables-------------------------")

const details={
    myname: 'annad',
    age: 23,
    love: 'akila'
}
let {myname ,love}=details
console.log(myname)

console.log("-----------Variable to object--------------------------")

let name1='Thanga'
let name2='Kumar'

const obj={
    nam1:name1,
    nam2:name2
}
console.log(obj)

