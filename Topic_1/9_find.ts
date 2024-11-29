export {}
let arr:(number | string | boolean |undefined)[] = [1,2,3,4,5,6];
// let newArr:(number | string | boolean);
 let newArr:(number | string | boolean |undefined) = arr.find((num)=>{
    if(num as number %2==0){
        return num;
    }
})
console.log(newArr);