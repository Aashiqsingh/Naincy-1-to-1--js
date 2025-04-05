function green(){

    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "green";

    setTimeout(()=>{
        red()
    },3000);
}

function red(){
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "red";

    setTimeout(()=>{
        blue()
    },3000);
}

function blue(){
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "blue";

    setTimeout(()=>{
        pink()
    },3000);
}

function pink(){
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "pink";

    setTimeout(()=>{
        purple()
    },3000);
}

function purple(){
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "purple";

    setTimeout(()=>{
        orange()
    },3000);
}

function orange(){
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "orange";
    setTimeout(()=>{
        yellow()
    },3000);
}

function yellow(){
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "yellow";
    setTimeout(()=>{
        green()
    },3000);
}