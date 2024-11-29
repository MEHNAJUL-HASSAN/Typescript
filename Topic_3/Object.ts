interface personType {
    firstName:string;
    middleName:string | unknown;
    lastName:string;
    display:Function;
}


let person:personType ={
    firstName : "Mehnaj",
    middleName: "Nothing",
    lastName  : "Hassan",
    display   :(() =>{
        console.log(person.firstName, person.lastName);
    }),
}


person.firstName = "Mehnajul";
delete person.middleName;
person.display();

