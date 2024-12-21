function findReverseNum(num){

    let rev = 0;
    while(num!=0){
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    return rev;

}

var x = findReverseNum(4589)
console.log(x);