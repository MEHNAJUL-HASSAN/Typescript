// public
export {}
class Person{
    protected firstName:string;  // accessible outside the class. 
    public lastName:string;      // accessible everywhere. 
    private middleName:string;   // cannot access outside of class.
    constructor(firstname:string, lastname:string){
        this.firstName = firstname,
        this.lastName = lastname
    }
}

class Person1 extends Person{
    constructor(firstname, lastname){
        super(firstname,lastname); 
        this.firstName = firstname,
        this.lastName = lastname
    }

    display(){
        console.log(`Full Name : ${this.firstName} ${this.lastName}`);
    }
}


const personObj = new Person1("Mehnajul", "Hassan");
personObj.display();