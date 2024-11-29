function Move(arr:number[]){
    let count:number = 0;
    let len =  arr.length;
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            arr[count++] = arr[i];
        }
    }
    while(count < len){
        arr[count++] = 0;
    }

    console.log(arr);
}
Move([1,0,2,0,4])