interface userType {
    fname:string;
    lname:string;
    favourite:string;
    phone:number;
    userHandleSubmit:Function
}
class User<userType>{
    public fname;
    public lname;
    public favourite;
    public phone;
    constructor(){
        this.fname = "",
        this.lname = "",
        this.favourite = "",
        this.phone = 0
    }

    getData() :any{
        return {
            fname:this.fname,
            lname:this.lname,
            favourite:this.favourite,
            phone:this.phone,
        }
    }
}


const firstname:HTMLInputElement | null = document.querySelector('#fname');
const lastName :HTMLInputElement | null = document.querySelector('#lname');
const favourite:HTMLInputElement | null = document.querySelector('#favourite');
const phoneno  :HTMLInputElement | null = document.querySelector('#phone'); 
const userHandleSubmit: HTMLButtonElement | null = document.querySelector("#handleSubmit");
const displayUser : HTMLDivElement | any = document.querySelector("#data");

userHandleSubmit?.addEventListener('click',(e)=>{
    e.preventDefault();
    if(firstname && lastName && favourite && phoneno){
        const newUser = new User;
        newUser.fname = firstname.value;
        newUser.lname = lastName.value;
        newUser.favourite = favourite.value;
        newUser.phone = phoneno.value;

        const userObj = newUser.getData();
        displayUser.innerHTML = `<p> data </p>
        <p>First Name : ${userObj.fname}</p>
        <p>Last Name : ${userObj.lname}</p>
        <p>favourite : ${userObj.favourite}</p>
        <p>Phone no : ${userObj.phone}</p>`
    }
})
