// single inheritance

class A{
    constructor(protected name:string){}
}
class B extends A{
    constructor(name){
        super(name);
    }
    display():void{
        console.log(`Name : ${this.name}`);
    }
}

const obj = new B("Mehnajul");
obj.display();


// multilevel inheritance 

class C {
    constructor(protected fName:string){}
}
class D extends C{
    constructor(fname,protected lname:string){
        super(fname )
    }
}
class E extends D{
    constructor(fname, lname){
        super(fname,lname);
    }
    displayDetails():void{
        console.log(`First Name : ${this.fName}\n Last Name : ${this.lname}`);
    }
}

const obj1 = new E("Mehnajul","hassan");
obj1.displayDetails();


//hierarchical inheritance 

class F{
    constructor(protected firstName:string){}
}

class G extends F{
    constructor(firstName){
        super(firstName)
    }
    display1():void{
        console.log(`Name : ${this.firstName}`);
    }
}

class H extends F{
    constructor(firstName){
        super(firstName)
    }
    display2(){
        console.log(`Name : ${this.firstName}`);
    }
}

const obj2 = new G("Mehnajul");
const obj3 = new H("Merajul");
obj2.display1();
obj3.display2();