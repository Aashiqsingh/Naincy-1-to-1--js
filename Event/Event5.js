function sizeIncrease(){
    let box = document.getElementsByClassName("box")[0];

    box.style.height = "400px";
    box.style.width = "400px";
    box.style.backgroundColor = "green";
    box.style.transition = "0.5s";
    box.style.borderRadius = "50%";
}

function sizeDecrease(){
    let box = document.getElementsByClassName("box")[0];

    box.style.height = "200px";
    box.style.width = "200px";
    box.style.backgroundColor = "red";
    box.style.borderRadius = "0%";
}
