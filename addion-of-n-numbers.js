let numbers=[1,3,4,5,6,7]

//const total=(...args)=> console.log(args)
const total=(...args)=> {
    console.log(args)
    let total=0;
    for(let i=0; i<args.length; i++){
        total+=args[i];
    }
    return total;
}
let to=total(1,2,3)
console.log(to)