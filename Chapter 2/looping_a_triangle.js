let cat = '#';
for(let i=0; i<7; i++){
    console.log(cat);
    cat += "#";
}

//using the while loop and the hint in the book
console.log("//using the while loop and the hint in the book")
cat = "#";
while(true){
    console.log(cat);
    cat += "#";
    if(cat.length > 7){
        break;
    }
}