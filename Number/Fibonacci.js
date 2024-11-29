function Fibonacci() {
    var n1 = 0;
    var n2 = 1;
    var n;
    for (var i = 0; i < 8; i++) {
        console.log(n1);
        n = n1 + n2;
        n1 = n2;
        n2 = n;
    }
}
Fibonacci();
