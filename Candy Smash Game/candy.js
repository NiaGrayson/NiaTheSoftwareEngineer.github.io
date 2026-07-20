
var candies = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
var board = []
var row = 9;
var columns = 9;
var score = 0;

var currTile;
var otherTile;

var gameStarted = false;

window.onload = function() {

    document.getElementById("startButton").addEventListener("click", function() {

        if (!gameStarted) {
            gameStarted = true;

            document.getElementById("startButton").disabled = true;

            score = 0;
            document.getElementById("score").innerText = score;

            startGame();

            window.setInterval(function(){
                crushCandy();
                slideCandy();
                generateCandy();
            }, 300);
        }

    });

}

function randomCandy() {
    return candies[Math.floor(Math.random() * candies.length)]; //0 - 5.99
}

function addScore(points) {
    score += points;
    document.getElementById("score").innerText = score;
}

function startGame() {
    for (let r = 0; r < row; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            // <img id="0-0" src="./images/Red.png">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./candy-crush-master/images/" + randomCandy() + ".png";

            //DRAG FUNCTIONALITY
            tile.setAttribute("draggable", true);
            tile.addEventListener("dragstart", dragStart); //click on candy, initialize drag process
            tile.addEventListener("dragover", dragOver); //click on candy, drag over another candy
            tile.addEventListener("dragenter", dragEnter); //drag onto candy another candy
            tile.addEventListener("dragleave", dragLeave); //leave candy over another candy
            tile.addEventListener("drop", dragDrop); //drop a candy over another candy
            tile.addEventListener("dragend", dragEnd); //after the drag process completed, swap the candies 

            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }
    
    console.log(board);
}

function dragStart() {
    //this refers to the img that was clicked on for dragging
    currTile = this; 
}

function dragOver(e) {
    e.preventDefault();
}   

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave(e) {
    e.preventDefault();
}

function dragDrop() {
    //This refers to the target tile that was dropped on
    otherTile = this;
}    

function dragEnd() {
    if (!currTile || !otherTile) {
    return;
}

if (currTile.src.includes("blank") || otherTile.src.includes("blank")) {
    return;
}  

    let currCoords = currTile.id.split("-"); // id = "0-0" => ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = c2 == c-1 && r == r2;
    let moveRight = c2 == c+1 && r == r2;

    let moveUp = r2 == r-1 && c == c2;
    let moveDown = r2 == r+1 && c == c2;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;
    
    if (isAdjacent) {
        let currImg = currTile.src
        let otherImg = otherTile.src
        currTile.src = otherImg;
        otherTile.src = currImg;
        
        let validMove = checkValid();
        if (!validMove) {
            let currImg = currTile.src
            let otherImg = otherTile.src
            currTile.src = otherImg;
            otherTile.src = currImg;
        }
    }    
}

function crushCandy() {
    //crushFive();
    //crushFour();
    crushThree();
 
}

function crushThree() {
    //check rows
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < columns - 2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                
                addScore(30);

                candy1.src = "./candy-crush-master/images/blank.png";
                candy2.src = "./candy-crush-master/images/blank.png";
                candy3.src = "./candy-crush-master/images/blank.png";  
            }
        }
    }  
    
    //check columns
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < row - 2; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {

                addScore(30);

                candy1.src = "./candy-crush-master/images/blank.png";
                candy2.src = "./candy-crush-master/images/blank.png";
                candy3.src = "./candy-crush-master/images/blank.png";  
            }
        }
    }  
}

function checkValid() {
     //check rows
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < columns - 2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                return true;
            }
        }
    } 
      

    //check columns
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < row - 2; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
               return true;
            }
        }
    } 

    return false;  

}         
    
function slideCandy() {
    for (let c = 0; c < columns; c++) {
        let ind = row - 1;

        for (let r = row - 1; r >= 0; r--) {
            if (!board[r][c].src.includes("blank")) {
                board[ind][c].src = board[r][c].src;

                if (ind != r) {
                    board[r][c].src = "./candy-crush-master/images/blank.png";
                }

                ind -= 1;
            }
        }

        for (let r = ind; r >= 0; r--) {
            board[r][c].src = "./candy-crush-master/images/blank.png";
        }
    }
}

function generateCandy() {
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < row; r++) {
            if (board[r][c].src.includes("blank")) {
                board[r][c].src = "./candy-crush-master/images/" + randomCandy() + ".png";
                break;
            }
        }
    }
}
