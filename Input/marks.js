var eng = parseInt(prompt("Enter english marks "))
var math = parseInt(prompt("Enter math marks "))
var comp = parseInt(prompt("Enter computer marks "))
var sci = parseInt(prompt("Enter science marks "))
var ss = parseInt(prompt("Enter social studies marks "))


var total = eng + math + comp + sci + ss;
console.log("Total marks of all subject is =",total);


var per = total / 5;
console.log("percentage of marks is =",per);

