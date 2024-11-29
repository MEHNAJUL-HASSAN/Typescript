export {}
// let arr:(string | number | boolean)[] = [1,2,3,4,5,6,7,8,9];
// let newArr:number[] = [];
// arr.filter((num)=>{
//     if(num as number%2==0){
//         newArr = [...newArr,num as number]
//     }
// })
// console.log(newArr)


let arr:(string | number | boolean)[] = [1,2,3,4,5,6,7,8,9];
let newArr:(string | number | boolean)[] = [];
newArr = arr.filter((val)=>{
    if(val as number %2==0){
        return val;
    }
})
console.log(newArr);
