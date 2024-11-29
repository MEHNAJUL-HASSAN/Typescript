//getter is used to get a value. 
//setter is used to set a value.

class Person{
    public name:string;
    constructor(Name:string){
        this.name = Name;
    }

    get PersonName():string{
        return this.name;
    }

    set setName(newname:string){
        this.name = newname;
    }

    display(){
        console.log(`Name : ${this.name}`);
    }
}

const obj = new Person("Mehnajul");
obj.display();
obj.setName="Hassan";
obj.display();