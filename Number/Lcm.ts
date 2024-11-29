function Lcm(num1:number, num2:number){
    let max:number = num1 > num2? num1 : num2;
    while(true){
        if(max % num1 === 0 && max % num2 === 0){
            console.log("LCM", max);
            break;
        }
        max++;
    }
}
Lcm(10,15)