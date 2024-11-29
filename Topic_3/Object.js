var person = {
    firstName: "Mehnaj",
    middleName: "Nothing",
    lastName: "Hassan",
    brother: [
        {
            firstC: "Aquib"
        },
        {
            secondC: "faij"
        }
    ],
    display: (function () {
        console.log(person.firstName, person.lastName);
        console.log(person.brother.firstC, person.brother.secondC);
    }),
};
person.firstName = "Mehnajul";
delete person.middleName;
person.display();
