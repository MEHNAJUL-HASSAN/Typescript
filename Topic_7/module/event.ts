export interface personType{
    name:string
}

export class Person<personType>{
    constructor(public name){}
    displayName(){
        console.log(`Name : ${this.name}`);
    }
}