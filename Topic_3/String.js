// let str:string = "my name is mehnajul hassan";
// let newstr:string = str.split(' ').map((value) => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
// console.log(newstr);
var str = "apple";
for (var i = 0; i < str.length; i++) {
    var ctr = 0;
    for (var j = 0; j < str.length; j++) {
        if (str[i] === str[j] && i > j) {
            break;
        }
        if (str[i] === str[j]) {
            ctr++;
        }
    }
    if (ctr > 1) {
        console.log("".concat(str[i], " repeat ").concat(ctr, " times"));
    }
}
