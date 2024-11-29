"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newArr = arr.reduce(function (acc, currv) {
    return acc = acc + currv;
}, 0);
console.log(newArr);
