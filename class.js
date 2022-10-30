class Person{
    constructor(name,dob){
        this.name=name;
        this.dob=dob;
    }
  
  getdetails=()=>{
        return `Name ${this.name} age: ${2022-this.dob}`;
    }
}
class Address extends Person{
    a='hi'
}

var namee=new Person('anand',2000)
console.log(namee.getdetails())

class College {
    constructor(person,college){
        this.person=person;
        this.college=college
    }

    getFull=()=>{
        return `${this.person.name} from ${this.college}`
    }
}
let nf=new College(namee,'PEC')
console.log(nf.getFull())