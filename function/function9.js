function add(a,b){
    let c = a + b;
    console.log("Addition = ",c);
    
}
function sub(a,b){
    let c = a - b;
    console.log("Subtarct = ",c);
    
}
function mul(a,b){
    let c = a * b;
    console.log("Multiply = ",c);
    
}
function div(a,b){
    let c = a / b;
    console.log("Divide = ",c);
    
}

var no1 = parseInt(prompt("Enter first number :-"))
var no2 = parseInt(prompt("Enter second number :-"))

var choice = parseInt(prompt("1 for Add \n2 for Sub \n3 for Mul \n4 for Div \n\nEnter your choice :"))
switch(choice){
    case 1: add(no1,no2)
            break;

    case 2: sub(no1,no2)
            break;

    case 3: mul(no1,no2)
            break;

    case 4: div(no1,no2);
            break;
    
    default:
            console.log("Please select right choice..");
            break;
            
}