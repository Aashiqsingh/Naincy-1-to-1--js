const lasvegas = (fname,amount)=>{
    console.log(fname + " your lasvegas trip is confirm with package " + amount);
    
}
const singapore = (fname,amount)=>{
    console.log(fname + " your singapore trip is confirmed with package " + amount);
}

const hawaii = (fname,amount)=>{
    console.log(fname + " your hawaii trip is confirmed with package " + amount);
}
const goa = (fname,amount)=>{
    console.log(fname + " your goa trip is confirmed with package " + amount);
}

var budget = 600;
if(budget > 3500)
{
    lasvegas("samir",budget);
}
else if(budget > 2500)
{
    singapore("tejas",budget);
}
else if(budget > 1500)
{
    hawaii("naincy",budget);
}
else if(budget > 500){
    goa("rahul",budget);
}
else{
    console.log("Insufficient budget for any trip.");
}