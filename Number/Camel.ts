let str:string = "my name is mehnajul";
let newstr = str.split(' ').map((value) => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
console.log(newstr);