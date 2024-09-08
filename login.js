var name,email,contact,password,submit;

submit=document.getElementById('submit');


console.log(submit)
submit.addEventListener('click',function (evetn){
    event.preventDefault();
    console.log("hello")
    email=document.getElementById('email').value;
    password=document.getElementById('password').value;

    // console.log(name,email,contact,password)

    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]

    if(user_records.some((v)=>{
        console.log("checking");
        return v.email==email && v.password==password; 
    })){
        alert("Login Successful");
        let current_user=user_records.filter((v)=>{
            return v.email==email && v.password==password
        })[0];
        localStorage.setItem("name",current_user.name);
        localStorage.setItem("email",current_user.email);
        window.location.href="home.html"
    }
    else{
        alert("Invalid Credentials");

    }


})

