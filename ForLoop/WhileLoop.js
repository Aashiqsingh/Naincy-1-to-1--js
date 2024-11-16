// var num = 12345;

// var rev = 0;
// while(num!=0){
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);
// }

// console.log("Reverse number = ",rev);



// Palindrome number

var num = 121;
var flag = num;
var rev = 0;
while(num!=0){
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
}

if(flag === rev){
    console.log("It is palindrome number");
    
}
else{
    console.log("It is not palindrome number");
}
