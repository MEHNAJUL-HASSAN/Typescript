let str:String="apple";
let newstr:string = str.toLowerCase();
let s:string="";
for(let i=0;i<str.length;i++){

    if(newstr[i] =="a" || newstr[i] =="e" || newstr[i] =="i" || newstr[i] =="o" || newstr[i] =="u" ){
       s=  s+ newstr[i].toUpperCase();
    }
    else if(newstr[i] !=="a" || newstr[i] !=="e" || newstr[i] !=="i" || newstr[i] !=="o" || newstr[i] !=="u" ){
         s = s+ newstr[i].toLowerCase();
    }
}
console.log(s);
