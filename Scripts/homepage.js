let bodyTag = document.getElementById("body");
let imgTag = document.getElementById("turn");
let spanTags = document.querySelectorAll("span");
let divTag = document.getElementById("winner");
let playAgain = document.getElementById("playAgain");
let xImg = "https://Guptasai.github.io/Tic-Tac-Toe/Images/x.png";
let oImg = "https://Guptasai.github.io/Tic-Tac-Toe/Images/o.png";
let winningRows = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let clickedCount = 0;
function changeTurn(){
    imgTag.src = (imgTag.getAttribute("src")==xImg)?oImg:xImg;
}
function stopPlay(){
    for (let i=0;i<spanTags.length;i++){
        spanTags[i].removeEventListener("click",play);
    }
}
function gameOver(winnerStatement){
    divTag.textContent = winnerStatement;
    playAgain.style.display = "block";
    stopPlay();
}
function check(element){
    clickedCount++;
    for (let i=0;i<winningRows.length;i++){
        if (winningRows[i].includes(parseInt(element.id)-1)){
            let rowConsidered = winningRows[i];
            if ((spanTags[rowConsidered[0]].className==element.className)&&(spanTags[rowConsidered[1]].className==element.className)&&(spanTags[rowConsidered[2]].className==element.className)){
                let winnerStatement = element.className + " Wins!!!";
                gameOver(winnerStatement);
            }
            else if (clickedCount==9){
                gameOver("Draw");
            }
        }
    }
}
function eventListeners(){
    clickedCount = 0;
    divTag.textContent = "";
    playAgain.style.display = "none";
    imgTag.src = xImg;
    for (let i=0;i<spanTags.length;i++){
        spanTags[i].className = "NA";
        spanTags[i].innerHTML = ""
        spanTags[i].addEventListener("click",play)
    }
}
    function play(event){
    let image = document.createElement("img");
    image.src = imgTag.src;
    image.alt = imgTag.alt;
    event.target.appendChild(image);
    event.target.className = imgTag.getAttribute("src")[7];
    check(event.target);
    changeTurn();
    event.target.removeEventListener("click",play)
}
eventListeners();