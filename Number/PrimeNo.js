function Prime(n) {
    var count = 0;
    for (var i = 2; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count == 1) {
        console.log("prime no");
    }
    else {
        console.log("Not a Prime no");
    }
}
Prime(9);
