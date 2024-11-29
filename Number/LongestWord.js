var str = "my name is mehnajul hassan";
var newStr = str.split(' ');
var long = newStr[0];
for (var i = 0; i < newStr.length; i++) {
    if (newStr[i].length > long.length) {
        long = newStr[i];
    }
}
console.log(long);
