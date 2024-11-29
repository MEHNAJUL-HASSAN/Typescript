function factorial(num) {

    if (num > 1) {
        return num * factorial(num - 1);
    }
    else {
        return 1;
    };
};


let y = factorial(5);
console.log(`The factorial is ${y}`);


