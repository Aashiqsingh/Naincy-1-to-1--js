var num = parseInt(prompt("Enter the number"));

switch(num%2==0){
    case true:
        alert(num + " is Even number");
        break;

    case false:
        alert(num + " is Odd number");
        break;

    default:
        alert("Invalid input");
        break;
}