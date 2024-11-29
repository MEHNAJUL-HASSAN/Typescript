function Fibonacci(){
    let n1:number=0;
    let n2:number=1;
    let n:number;
    for(let i:number=0;i<8;i++){
        console.log(n1);
        n=n1+n2;
        n1=n2;
        n2=n;
    }
}
Fibonacci();