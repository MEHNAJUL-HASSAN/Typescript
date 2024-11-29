let arr1:number[] = [1,2,3,4,5,6];
let arr2:number[] = [5,6,7,8,9,10];
let newarr:number[] = arr1.filter((item) => arr2.includes(item));
console.log(newarr);