function sendEmail() {

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    const serviceId = "service_qafq7mo"
    const templateId = "template_8wdfghr"

    emailjs.send(serviceId, templateId, params).then((res) => {
        console.log("email res....", res);
        alert("email sent..")

    }).catch((err) => {
        console.log("email error...", err);

    })

}

// sendEmail()