let num:number = 789;
let revnum:number = 0;
while(num>0){
    let rem:number = num  % 10;
    revnum = (revnum * 10) + rem;
    num = Math.floor(num / 10);
}

console.log(revnum);