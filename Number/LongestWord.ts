let str:string = "my name is mehnajul hassan";
let newStr = str.split(' ');
let long:string = newStr[0];
for(let i=0;i<newStr.length;i++){
    if(newStr[i].length > long.length){
        long = newStr[i];
    }
}

console.log(long);