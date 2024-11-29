// Nullish Operator
// let a:string | null = "apple" ;
// let d = "fail";
// let ans = a??d;
// console.log(ans)
// Assertion
// let val:unknown = "apple";
// let num:number = (val as string).length;
// console.log(num)
var arr = [1, 2, 2, 3, 4, 5, 5];
var newArr = arr.map(function (value, index) {
    if (arr.indexOf(value) === index) {
        console.log(value);
    }
});
