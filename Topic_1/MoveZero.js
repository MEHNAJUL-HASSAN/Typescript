"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr = [0, 8, 3, 6, 7, 0];
var newArr = [];
var ctr = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        newArr[ctr++] = arr[i];
    }
}
for (var i = 0; i < arr.length; i++) {
    if (ctr < arr.length) {
        newArr[ctr++] = 0;
    }
}
console.log(newArr);
