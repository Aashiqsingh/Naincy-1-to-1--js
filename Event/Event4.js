function changeColor(){

    let colorSelect = document.getElementById('colorSelect');
    let selectColor = colorSelect.value;
    console.log(selectColor);
    
    
    let box = document.getElementById('box');

    box.style.height = "200px"
    box.style.width = "200px"
    box.style.backgroundColor = selectColor;
}