var pname,pprice,pcart;

pcart=document.getElementById('pcart');
pname=document.getElementById('pname1');
console.log(pcart,pname)

pcart.addEventListener('click',function (event){
    event.preventDefault();
    console.log("hello")
    pname=document.getElementById('pname1').innerHTML;
    pprice=document.getElementById('pprice1').innerHTML;


    console.log(pname,pprice);

    let user_records=new Array();
    let cart_array;
    user_records=JSON.parse(localStorage.getItem('users'));
    user_email=localStorage.getItem('email')


    if (user_records.some((user) => {
        console.log("checking");
        return user.email === user_email;
    })) {
        let currentUser = user_records.find((user) => user.email === user_email);
        cart_array = currentUser.cart || []; // Ensure cart is initialized as an empty array if undefined
    
        console.log(cart_array);
    
        // Push new product details into the cart
        cart_array.push({
            "pname": pname,  // Assuming pname is defined elsewhere
            "pprice": pprice // Assuming pprice is defined elsewhere
        });
    
        // Update the user's cart back into the user_records
        currentUser.cart = cart_array;
    }

    localStorage.setItem("users",JSON.stringify(user_records));

})






    
