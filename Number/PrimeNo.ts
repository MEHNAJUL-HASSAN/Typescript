function Prime(n:number){
    let count:number=0;
    for(let i:number = 2;i<=n;i++){
        if(n%i === 0){
            count++;
        }
    }
    if(count==1){
        console.log("prime no");
    }
    else{
        console.log("Not a Prime no");
    }
}
Prime(9)