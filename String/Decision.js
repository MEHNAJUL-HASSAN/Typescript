var str = "decision";
var newstr = "";
for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] == "u") {
        newstr = newstr + str[i] + str[i + 1].toUpperCase();
    }
}
console.log(newstr);
