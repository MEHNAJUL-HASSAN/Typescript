function factorial(num) {
    if (num > 1) {
        return num * factorial(num - 1);
    }
    else {
        return 1;
    }
    ;
}
;
var y = factorial(5);
console.log("The factorial is ".concat(y));
