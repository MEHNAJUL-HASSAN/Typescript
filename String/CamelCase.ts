let str:string = "my name is mehnajul";
let arr:string[] = str.split(' ');
let nstr:string[]=[];
for(let i=0;i<arr.length;i++){
    nstr.push (arr[i].charAt(0).toUpperCase() + arr[i].slice(1));

}
console.log(nstr.join(' '));