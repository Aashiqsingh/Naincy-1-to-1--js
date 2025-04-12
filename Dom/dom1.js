const submitHandler = (event)=>{
    event.preventDefault();


    const name = document.getElementById("name").value 
    const age = document.getElementById("age").value
    const email = document.getElementById("email").value 
    const pass = document.getElementById("pass").value 


    const nameOutput = document.getElementById("nameOutput");
    const ageOutput = document.getElementById("ageOutput");
    const emailOutput = document.getElementById("emailOutput");
    const passOutput = document.getElementById("passOutput");


    nameOutput.innerHTML = name;
    ageOutput.innerHTML = age;
    emailOutput.innerHTML = email;
    passOutput.innerHTML = pass

    alert("Form submitted!!");



    // console.log("name = ",name);
    // console.log("age = ",age);
    // console.log("email = ",email);
    // console.log("pass = ",pass);

    // alert("Form submitted..")


    // const user = {
    //     name:name,
    //     age:age,
    //     email:email,
    //     password:pass
    // }

    // console.log(user);
    
    
    
    
}