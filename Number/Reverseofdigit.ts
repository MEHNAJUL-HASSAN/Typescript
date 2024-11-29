function ReverseDigit( num:number){
    let rev:number = 0;
    while(num>0){
        let rem:number = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num/10);  
    }
    console.log(rev);
}
ReverseDigit(786)