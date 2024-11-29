function SumofNo(num:number, sum:number=0){
    while(num>0){
        let rem:number = num % 10;
        sum = sum + rem;
        num = Math.floor( num / 10);
    }
    console.log(sum)
}
SumofNo(786);