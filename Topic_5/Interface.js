var personObj = {
    fname: "Mehnajul",
    lname: "Hassan",
    display: function () {
        console.log("FullName : ".concat(personObj.fname, " ").concat(personObj.lname));
    }
};
personObj.display();
