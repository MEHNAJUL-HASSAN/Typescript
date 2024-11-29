export {}
let arr:number[] = [1,2,3,4,5,6,7,8,9];
let newArr:number = arr.reduce((acc,currv) =>{
    return acc= acc+currv;
},0)
console.log(newArr)