var User = /** @class */ (function () {
    function User() {
        this.fname = "",
            this.lname = "",
            this.favourite = "",
            this.phone = 0;
    }
    User.prototype.getData = function () {
        return {
            fname: this.fname,
            lname: this.lname,
            favourite: this.favourite,
            phone: this.phone,
        };
    };
    return User;
}());
var firstname = document.querySelector('#fname');
var lastName = document.querySelector('#lname');
var favourite = document.querySelector('#favourite');
var phoneno = document.querySelector('#phone');
var userHandleSubmit = document.querySelector("#handleSubmit");
var displayUser = document.querySelector("#data");
userHandleSubmit === null || userHandleSubmit === void 0 ? void 0 : userHandleSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    if (firstname && lastName && favourite && phoneno) {
        var newUser = new User;
        newUser.fname = firstname.value;
        newUser.lname = lastName.value;
        newUser.favourite = favourite.value;
        newUser.phone = phoneno.value;
        var userObj = newUser.getData();
        displayUser.innerHTML = "<p> data </p>\n        <p>First Name : ".concat(userObj.fname, "</p>\n        <p>Last Name : ").concat(userObj.lname, "</p>\n        <p>favourite : ").concat(userObj.favourite, "</p>\n        <p>Phone no : ").concat(userObj.phone, "</p>");
    }
});
