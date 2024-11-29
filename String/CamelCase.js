var str = "my name is mehnajul";
var arr = str.split(' ');
var nstr = [];
for (var i = 0; i < arr.length; i++) {
    nstr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
}
console.log(nstr.join(' '));
