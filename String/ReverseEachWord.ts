let str:string = "my name is Mehnajul";
// let arr:string[] = str.split(' ');
// let newarr:string[] = [];
// for(let i=0;i<arr.length;i++){
//     newarr.push(arr[i].split('').reverse().join(''));
// }
// console.log(newarr.join(' '));


let newstr:string = str.split(' ').map((value,index) => value.split('').reverse().join('')).join(' ');
console.log(newstr);