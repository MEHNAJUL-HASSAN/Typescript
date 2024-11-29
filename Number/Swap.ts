function Swap(){
    let a:number=5;
    let b:number=10;

    a=a+b;
    b=a-b;
    a=a-b;
    console.log("A",a);
    console.log("B",b);
}
Swap()