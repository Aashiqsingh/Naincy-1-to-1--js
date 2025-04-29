const calculate = ()=>{

    const result = document.getElementById("result");

    const a = document.getElementById("no1").value
    const b = document.getElementById("no2").value

    const no1 = parseInt(a)
    const no2 = parseInt(b)

    const choice = document.getElementById("choice").value;

    switch(choice){
        case "+":            
            result.innerHTML = "Addition = " +  (no1 + no2);
            break;
        case "-":
            result.innerHTML = "Subtraction = " +  (no1 - no2);
            break;
        case "*":
            result.innerHTML = "Multiplication = " +  (no1 * no2);
            break;
        case "/":
            result.innerHTML = "Division = " +  (no1 / no2);
            break;
        case "%":
            result.innerHTML = "Modulus = " +  (no1 % no2);
            break;
        defaul:
            result.innerHTML = "Invalid Operation";
            break;
    }
}