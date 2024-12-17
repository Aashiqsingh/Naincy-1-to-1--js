function lasvegas(name , amount){

    return name + " your tour confirm in lasvegas with amount " + amount;
}

function singapore(name , amount){
    return name + " your tour confirm in singapore with amount " + amount;
}

function philippines(name , amount){
    return name + " your tour confirm in philippines with amount " + amount;
}

function goa(name , amount){
    return name + " your tour confirm in goa with amount " + amount;
}

var budget = 4000;
var flag;

if(budget > 4000){
    flag = lasvegas("naincy",budget)
}
else if(budget > 3000){
    flag = singapore("jimmy",budget)
}
else if(budget > 2000){
    flag = philippines("mary",budget)
}
else if(budget > 1000){
    flag = goa("sarah",budget)
}

console.log(flag);
