let a:number = 5;
let b:number = 6;
let c:number = 9;

if(a>b && a>c){
    console.log(`${a} is the greatest number`);
}
else if(b>a && b>c){
    console.log(`${b} is the greatest number`);
}
else{
    console.log(`${c} is the greatest number`);
}