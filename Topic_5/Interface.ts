interface Person {
    fname:string;
}
interface PersonType extends Person{
    lname:string;
    display:Function;
}

let personObj:PersonType = {
    fname:"Mehnajul",
    lname:"Hassan",
    display(){
        console.log(`FullName : ${personObj.fname} ${personObj.lname}`)
    }
}
personObj.display();