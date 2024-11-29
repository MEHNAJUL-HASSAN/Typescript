var str = "my name is mehnajul";
var newstr = str.split(' ').map(function (value) { return value.charAt(0).toUpperCase() + value.slice(1); }).join(' ');
console.log(newstr);
