var str = "apple";
var newstr = str.toLowerCase();
var s = "";
for (var i = 0; i < str.length; i++) {
    if (newstr[i] == "a" || newstr[i] == "e" || newstr[i] == "i" || newstr[i] == "o" || newstr[i] == "u") {
        s = s + newstr[i].toUpperCase();
    }
    else if (newstr[i] !== "a" || newstr[i] !== "e" || newstr[i] !== "i" || newstr[i] !== "o" || newstr[i] !== "u") {
        s = s + newstr[i].toLowerCase();
    }
}
console.log(s);
