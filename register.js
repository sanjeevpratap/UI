var name,email,contact,password,submit;

submit=document.getElementById('submit');


console.log(submit)
submit.addEventListener('click',function (evetn){
    event.preventDefault();
    console.log("hello")
    name=document.getElementById('name').value;
    email=document.getElementById('email').value;
    contact=document.getElementById('contact').value;
    password=document.getElementById('password').value;

    console.log(name,email,contact,password)

    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]

    if(user_records.some((v)=>{
        console.log("checking");
        return v.email==email;
    })){
        alert("Duplicate Data");
    }
    else{
        user_records.push({
            "name":name,
            "email":email,
            "password":password,
            "cart":new Array()
        })

    }

    localStorage.setItem("users",JSON.stringify(user_records));

})

