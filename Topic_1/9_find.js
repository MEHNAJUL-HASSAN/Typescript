"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr = [1, 2, 3, 4, 5, 6];
// let newArr:(number | string | boolean);
var newArr = arr.find(function (num) {
    if (num % 2 == 0) {
        return num;
    }
});
console.log(newArr);
