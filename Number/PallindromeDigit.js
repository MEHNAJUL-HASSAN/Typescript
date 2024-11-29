function Pallindrome(num) {
    var N = num;
    var rev = 0;
    while (num > 0) {
        var rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    if (rev === N) {
        console.log("Pallindrome");
    }
    else {
        console.log("Not a Pallindrome");
    }
}
Pallindrome(1111);
