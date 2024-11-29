interface ItemType {
    Name:string;
    phoneNo:number;
    city:string;
}

const Item:ItemType[] = [
    {Name:"Mehnajul Hassan", phoneNo:8789343262, city:"Jamshedpur"},
    {Name:"Peter Parker", phoneNo:8789343261, city:"New York"},
    {Name:"Bruce Wayne", phoneNo:8789343260, city:"Gotham"},
    {Name:"Barry Allen", phoneNo:8789343263, city:"Los Angeles"}
]


const filterData = Item.map((val,index) =>{
    if(val.Name==="Bruce Wayne"){
        console.log(val);
        setTimeout(()=>{
            console.log("He is the BATMAN ;)")
        },4000);
    }
})
