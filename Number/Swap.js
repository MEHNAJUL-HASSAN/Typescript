function Swap() {
    var a = 5;
    var b = 10;
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("A", a);
    console.log("B", b);
}
Swap();
