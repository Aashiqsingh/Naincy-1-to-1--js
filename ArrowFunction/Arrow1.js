// const demo = ()=>{
//     console.log('Demo function is running');
// }


// demo()


const add = (a,b)=>{
    console.log("Addition = ",a+b);
    
}
const sub = (a,b)=>{
    console.log("Subtraction = ",a-b);
}

const mul = (a,b)=>{
    console.log("Multiplication = ",a*b);
}

const div = (a,b)=>{
    console.log("Division = ",a/b);
    
}

var a = parseInt(prompt("Enter first number :"));
var b = parseInt(prompt("Enter second number :"));
var choice = parseInt(prompt("1 for Add \n2 for Sub \n3 for Mul \n 4 for Div \n\n\n Enter your choice :"));

switch(choice){
    case 1: add(a,b);
            break;

    case 2: sub(a,b);
            break;

    case 3: mul(a,b);
            break;

    case 4: div(a,b);
            break;

    default: console.log("Invalid choice..");
    
}