function wordHandler(fname){
    return fname + " wordHandler help to upload the data"
    
}

function pdfHandler(fname){
    return fname + " pdfHandler help to convert pdf to word"
}

function csvHandler(fname){
    return fname + " csvHandler help to convert csv to word"
}

function pngHandler(fname){
    return fname + " pngHandler help to convert png to word"
}

var fileName = "naincy.csv";
var flag;

if(fileName.endsWith(".word")){
    flag = wordHandler(fileName);
}
else if(fileName.endsWith(".pdf")){
    flag = pdfHandler(fileName);
}
else if(fileName.endsWith(".csv")){
    flag = csvHandler(fileName);
}
else if(fileName.endsWith(".png")){
    flag = pngHandler(fileName);
}
else{
    console.log("Invalid file format. Please provide a word, pdf, csv or png file.");
}
console.log(flag);
