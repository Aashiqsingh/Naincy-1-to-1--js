const getTime = ()=>{
    const date = new Date();


    // console.log(date.getHours());
    // console.log(date.getMinutes());
    // console.log(date.getSeconds());

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = document.getElementById("time");

    time.innerHTML = hours + ":" + minutes + ":" + seconds;
    




    // console.log(date);
    
}

setInterval(getTime,1000);