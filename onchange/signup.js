const submitHandler = (event)=>{
    event.preventDefault();

    let first_name = document.getElementById("first").value
    let last_name = document.getElementById("last").value 
    let age = document.getElementById("age").value 
    let mobile = document.getElementById("mobile").value 
    let email = document.getElementById("email").value 


    var user = {
        firstName:first_name,
        lastName:last_name,
        age:age,
        mobile:mobile,
        email:email
    }

    alert("User signup successfully...");
    console.log(user);

    
}