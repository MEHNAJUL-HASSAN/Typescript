export {}
let arr:(string | number | boolean)[] =[1,2,3,4,5,6];
let newArr:number[] =[];
for(let i:number=0;i<arr.length;i++){
    newArr = [...newArr,(arr[i] as number) + 2]
}

console.log(newArr)