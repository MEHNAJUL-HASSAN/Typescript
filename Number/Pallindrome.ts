let str:string = "apple";
let revstr:string = "";
for(let i=str.length-1;i>=0;i--){
    revstr = revstr+str[i];
}
if(revstr === str){
    console.log("palindrome")
}
else{
    console.log("Not a palindrome");
}