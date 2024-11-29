export {}
let arr:number[] = [0,8,3,6,7,0];
let newArr:number[] = [];
let ctr:number=0;
for(let i:number = 0;i<arr.length;i++){
    if(arr[i] !==0){
        newArr[ctr++] = arr[i];
    }
}
for(let i=0;i<arr.length;i++){
    if(ctr < arr.length){
        newArr[ctr++] = 0;
    }
}
console.log(newArr);