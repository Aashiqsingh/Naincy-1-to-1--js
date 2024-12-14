function science(name,per)
{
    console.log(name + " your admission confirm in science stream with per " + per);
    
}

function commerce(name,per)
{
    console.log(name + " your admission confirm in commerce stream with per " + per);
}

function arts(name,per)
{
    console.log(name + " your admission confirm in arts stream with per " + per);
}

var percentage = 61;

if(percentage > 90)
{
    science("naincy",percentage)
}
else if(percentage > 70)
{
    commerce("naincy",percentage)
}
else if(percentage > 50)
{
    arts("naincy",percentage)
}