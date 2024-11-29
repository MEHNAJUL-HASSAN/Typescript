export {}
let arr:number[] = [1,2,3,4,5,5,6,78,9,2,3];
for(let i:number = 0;i<arr.length;i++){
    let count:number = 0;
    for(let j:number = 0;j<arr.length;j++){
        if(arr[i] === arr[j] && i>j){
           break;
        }
        if(arr[i] === arr[j]){
            count++;    
        }
    }
    if(count>1){
        console.log(`${arr[i]} repeat ${count} times`);
    }
}