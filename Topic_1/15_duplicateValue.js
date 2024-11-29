"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr = [1, 2, 3, 4, 5, 5, 6, 78, 9, 2, 3];
for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j] && i > j) {
            break;
        }
        if (arr[i] === arr[j]) {
            count++;
        }
    }
    if (count > 1) {
        console.log("".concat(arr[i], " repeat ").concat(count, " times"));
    }
}
