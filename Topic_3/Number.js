var num = 789;
var revnum = 0;
while (num > 0) {
    var rem = num % 10;
    revnum = (revnum * 10) + rem;
    num = Math.floor(num / 10);
}
console.log(revnum);
