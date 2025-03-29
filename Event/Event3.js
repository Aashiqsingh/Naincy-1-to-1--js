
// var a = 1;
var colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange", "brown", "choclate"];
function changeColor(){
    // console.log(a++);

    var randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);

    var mydiv = document.getElementsByClassName("mydiv")[0];
    mydiv.style.backgroundColor = colors[randomIndex];
    
    
}