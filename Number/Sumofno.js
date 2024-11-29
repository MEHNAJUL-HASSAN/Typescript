function SumofNo(num, sum) {
    if (sum === void 0) { sum = 0; }
    while (num > 0) {
        var rem = num % 10;
        sum = sum + rem;
        num = Math.floor(num / 10);
    }
    console.log(sum);
}
SumofNo(786);
