let array=[1,2,3]

console.log("------------Ways-1-------------------------")
const multiplay=(...args)=>{
    let newArr=[]
    for(let i=0; i<array.length;i++){
        newArr.push(array[i]*2)
    
    }
    return newArr;
}
let newArr=multiplay(array)
console.log(newArr)

console.log("------------Ways-1 using maps-------------------------")

let mapArr=array.map((item,index)=>{
    console.log(item +" index is "+index)
    return item*2;
})
console.log(mapArr)

console.log("------------Ways-1 using maps with ObjectsArray-------------------------")

const objArr=[
    {
        name:'akila',
        age:23
    },
    {
     name:'anand',
     age:23
    },
    {
        name:'akila1',
        age:22
    }

]

let newObjArray=objArr.map((data,ind)=>{
    return{
        name:data.name,
        age :data.age,
        status:'workins'
    }
})

console.log(newObjArray)
    
