///  https://love2dev.com/blog/javascript-remove-from-array/

let array=[1,2,3,6]
// ar.pop();  last element
// ar.shift();  first element
var index = array.indexOf(3);
array.splice(index,1)
console.log(array)

console.log("--------------------------------")


var list = ["bar", "baz", "foo", "qux"];
    
list.splice(0, 2); 
// Starting at index position 0, remove two elements ["bar", "baz"] and retains ["foo", "qux"].

//filter

var arrayfil = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var filtered = arrayfil.filter(function(value, index, arr){ 
    return value > 5;
});
//filtered => [6, 7, 8, 9]
//array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log("--------------------------------")

const newnum=[-3,-2,-1,0,1,2,3]
const result=newnum.find(item=>{
    return (item % 2===0 && item >= 0)
})
const index1=newnum.findIndex(item=>{
    return (item % 2===0 && item >= 0)
})
console.log("result" + result)
console.log("index" + index1)