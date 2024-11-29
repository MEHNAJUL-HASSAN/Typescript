function Gcd(num1, num2) {
    for (var i = 1; i <= num1 + num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            console.log("Gcd", i);
        }
    }
}
Gcd(5, 10);
