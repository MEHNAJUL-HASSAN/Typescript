function Pallindrome(num:number){
    let N:number=num;
    let rev:number=0;
    while(num>0){
        let rem:number = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num/10);
    }
    if(rev === N){
        console.log("Pallindrome");
    }
    else{
        console.log("Not a Pallindrome");
    }

}
Pallindrome(1111)