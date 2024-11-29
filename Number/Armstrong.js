function Armstrong(num) {
    var sum = 0;
    var z = num;
    while (num > 0) {
        var rem = num % 10;
        sum = sum + (rem * rem * rem);
        num = Math.floor(num / 10);
    }
    console.log(sum);
    if (sum === z) {
        console.log("Armstrong no");
    }
    else {
        console.log("Not a Armstrong no");
    }
}
Armstrong(156);
