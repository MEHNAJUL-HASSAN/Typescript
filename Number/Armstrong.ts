function Armstrong(num:number){
    let sum:number=0;
    let z:number = num;
    while(num>0){
        let rem:number = num % 10;
        sum =  sum + (rem * rem * rem);
        num = Math.floor(num/10);
    }
    console.log(sum);
    if( sum === z){
        console.log("Armstrong no");
    }
    else{
        console.log("Not a Armstrong no");
    }
}
Armstrong(156)