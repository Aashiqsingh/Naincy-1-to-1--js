
var mydiv = document.getElementById("mydiv")

const writeTxt = ()=>{

    const colors = document.getElementById("colors")
    console.log(colors.value);
    


    mydiv.style.height = "200px"
    mydiv.style.width = "200px"
    mydiv.style.outline = "10px dotted " + colors.value
    mydiv.style.backgroundColor = colors.value
    mydiv.style.margin = "100px 400px"

}

const changeShape = ()=>{
    const shape = document.getElementById("shape")
    console.log(shape.value);

    mydiv.style.borderRadius = shape.value
    
}