const red = ()=>{
    let body = document.getElementsByTagName("body")
    body[0].style.backgroundColor = "red"

    setTimeout(()=>{
        green()
    },4000)
}


const green = ()=>{
    let body = document.getElementsByTagName("body")
    body[0].style.backgroundColor = "green"

    setTimeout(()=>{
        blue()
    },4000)
}

const blue = ()=>{
    let body = document.getElementsByTagName("body")
    body[0].style.backgroundColor = "blue"

    setTimeout(()=>{
        yellow()
    },4000)
}

const yellow = ()=>{
    let body = document.getElementsByTagName("body")
    body[0].style.backgroundColor = "yellow"

    setTimeout(()=>{
        orange()
    },4000)
}

const orange = ()=>{
    let body = document.getElementsByTagName("body")
    body[0].style.backgroundColor = "orange"

    setTimeout(()=>{
        purple()
    },4000)
}

const purple = ()=>{
    let body = document.getElementsByTagName("body")
    body[0].style.backgroundColor = "purple"

    setTimeout(()=>{
        pink()
    },4000)
}

const pink = ()=>{
    let body = document.getElementsByTagName("body")
    body[0].style.backgroundColor = "pink"

    setTimeout(()=>{
        red()
    },4000)
}