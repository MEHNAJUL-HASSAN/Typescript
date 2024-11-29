let arr:any[] = [1,1,2,3,4,5,6];
let newarr = arr.map((value,index) => {
    if(arr.indexOf(value) == index){
        console.log(value)
    }
})