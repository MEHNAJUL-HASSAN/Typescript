let str:string = "apple";
let rev:string="";
for(let i=str.length-1;i>=0;i--){
    rev =  rev + str[i];
}
console.log(rev);