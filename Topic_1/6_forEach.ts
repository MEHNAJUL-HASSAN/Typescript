export {}
let arr:(number | string | boolean)[] = [1,2,3,4,5,6];
let newArr:number[] = [];
for(let i:number=0;i<arr.length;i++){
    newArr = [...newArr,(arr[i] as number) + 2];
    arr[i] = (arr[i] as number) + 2;
    console.log(arr[i]);
}
console.log(newArr)