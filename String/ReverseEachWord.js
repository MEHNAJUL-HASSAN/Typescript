var str = "my name is Mehnajul";
// let arr:string[] = str.split(' ');
// let newarr:string[] = [];
// for(let i=0;i<arr.length;i++){
//     newarr.push(arr[i].split('').reverse().join(''));
// }
// console.log(newarr.join(' '));
var newstr = str.split(' ').map(function (value, index) { return value.split('').reverse().join(''); }).join(' ');
console.log(newstr);
