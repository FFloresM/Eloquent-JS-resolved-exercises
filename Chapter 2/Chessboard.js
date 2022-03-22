let chessBoard = "";
let black = "#";
let white = " ";
let size = 8;

for(let i=0; i<size; i++){
    for(let j=1; j<=size; j++){
        if((j+i)%2==0){
            chessBoard+=black;
        }else if((j+i)%2!=0){
            chessBoard+=white;
        }
    }
    if(i!=size-1)
        chessBoard+='\n';
}
console.log(chessBoard)