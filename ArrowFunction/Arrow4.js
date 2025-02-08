const isPrime = (num)=>{

    for(let i=2;i<num;i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;

}

var x = isPrime(13)
console.log(x == true ? "Prime number" : "Not prime number");
