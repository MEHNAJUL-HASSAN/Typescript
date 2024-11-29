// let str:string = "my name is mehnajul hassan";
// let newstr:string = str.split(' ').map((value) => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
// console.log(newstr);


let str:string = "apple";

for(let i:number =0;i<str.length;i++){
    let ctr:number = 0;
    for(let j:number=0;j<str.length;j++){
        if(str[i] === str[j] && i>j){
            break;
        }
        if(str[i] === str[j]){
            ctr++;
        }
    }
    if(ctr>1){
        console.log(`${str[i]} repeat ${ctr} times`);
    }
}