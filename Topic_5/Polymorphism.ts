// interface polymorphism

interface shape {
    area():number;
}

class Circle implements shape{
    constructor(private radius:number){};
    area():number{
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle implements shape{
    constructor(private width:number, private height:number){}
    area():number{
        return this.width * this.height;
    }
}


const shapes:shape[] = [new Circle(5), new Rectangle(5,10)];
shapes.forEach((sh) => {
    console.log(sh.area());
})



// inheritance polymorphism

class Animal{
    makeSound():void{
        console.log(`some generics sound`);
    }
}

class Dog extends Animal{
    makeSound(): void {
        console.log(`woof woof`);
    }
}

class Cat extends Animal{
    makeSound(): void {
        console.log(`meow meow`);
    }
}

const animals:Animal[] = [new Dog(), new Cat()];
animals.forEach((anim)=>{
    anim.makeSound();
})

// function overloading
class Person{
    constructor(private name:string | string[]){}
    greet(name:string):string;
    greet(name:string[]):string;

    greet(names:string | string[]):string{
        if(Array.isArray(names)){
            return `hello ${names.join(",")}`;
        }
        else{
            return `hello ${names}`;
        }
    }
}
const p = new Person("Mehnajul");
const p1 = new Person(['Mehnajul','hassan']);
console.log(p.greet("Mehnajul"));
console.log(p1.greet(['Mehnajul','hassan']));


// function override


class A{
    makeSound(sound:string):string{
        console.log("ooohhhhaaaaa hhhhahhhhaa");
        return sound
    }
}

class B extends A{
    override makeSound(sound:string):string{
        console.log("ldjhfhdkjfhkdhkfhkedhk");
        return sound
    }
}
const obj = new B();
obj.makeSound('hskhdh');

