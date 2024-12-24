function flight(option)
{
    console.log(option.name + " flight is confirm with ticket charges " + option.charge);
    
}
function car(option)
{
    console.log(option.name + " car is confirm with ticket charges " + option.charge);
}

function train(option)
{
    console.log(option.name + " train is confirm with ticket charges " + option.charge);
}

function bus(option)
{
    console.log(option.name + " bus is confirm with ticket charges " + option.charge);
}



var budget = 7000

if(budget > 8000)
{
    flight({name:"naincy",charge:budget})
}
else if(budget > 6000)
{
    car({name:"pallavi",charge:budget})
}
else if(budget > 4000)
{
    train({name:"rahul",charge:budget})
}
else if(budget > 2000){
    bus({name:"kiran",charge:budget})
}