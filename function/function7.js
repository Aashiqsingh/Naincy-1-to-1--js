function wordHandler(fname){
    console.log(fname + " wordHandler help to upload the data");
    
}

function pdfHandler(fname){
    console.log(fname + " pdfHandler help to convert pdf to word");
}

function csvHandler(fname){
    console.log(fname + " csvHandler help to convert csv to word");
}

function pngHandler(fname){
    console.log(fname + " pngHandler help to convert png to word");
}

var fileName = "naincy.word";

if(fileName.endsWith(".word")){
    wordHandler(fileName);
}
else if(fileName.endsWith(".pdf")){
    pdfHandler(fileName);
}
else if(fileName.endsWith(".csv")){
    csvHandler(fileName);
}
else if(fileName.endsWith(".png")){
    pngHandler(fileName);
}
else{
    console.log("Invalid file format. Please provide a word, pdf, csv or png file.");
}