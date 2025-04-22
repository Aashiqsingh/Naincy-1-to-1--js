const submitHandler = (event)=>{
    event.preventDefault();

    Email.send({
        Host : "s1.maildns.net",
        Username : "aashiqsingh56789@gmail.com",
        Password : "Aashiq@6354",
        To : 'kamnaninaincy02@gmail.com',
        From : "aashiqsingh56789@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)  
    );

    alert("Message sent")
}