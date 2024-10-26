var a = parseInt(prompt("Enter the first number "))
var b = parseInt(prompt("Enter the second number "))

var choice = parseInt(prompt("1 -- Addition \n2 -- Subtraction \n3 -- multiplication\n4 -- division \n\n\n\n Enter your choice :"))


switch(choice){
    case 1:
        alert("Addition = "+(a+b));
        break;
    
    case 2:
        alert("Subtraction = "+(a-b));
        break;

    case 3:
        alert("Multiplication = "+(a*b));
        break;
    
    case 4:
        alert("Division = "+(a/b));
        break;
    
    default:
        alert("Invalid choice. Please try again.");
}