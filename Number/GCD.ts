function Gcd(num1:number, num2:number){
    for(let i:number=1;i<=num1+num2;i++){
        if(num1 % i === 0 && num2 % i === 0 ){
            console.log("Gcd", i);
        }
    }
}
Gcd(5,10)