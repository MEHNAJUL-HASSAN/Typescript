export{}
class A{
    private name:string;
    constructor(Name:string){
        this.name = Name;
    }
    get personDetails():string{
        return `Name: ${this.name}`;
    }

    set personNewDetails(newName:string){
        this.name = newName;
    }
}

const obj = new A("Mehnajul");
console.log(obj.personDetails);
obj.personNewDetails = "Hassan";
console.log(obj.personDetails);