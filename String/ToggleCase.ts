let str:string="mEhNaJuL"; 
let newstr:string="";
for(let i=0;i<str.length;i++){
    if(str[i] >='A' && str[i] <='Z'){
        newstr = newstr +str[i].toLowerCase();
    }
    else if(str[i] >='a' && str[i] <='z'){
        newstr = newstr + str[i].toUpperCase();
    }

}
console.log(newstr);
