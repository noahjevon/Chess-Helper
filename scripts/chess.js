function getTile(tile, row, col) {
    // Paints all tiles white when new tile is selected (Resets board)
    var all = document.getElementsByClassName('col-sm');
        for (var i = 0; i < all.length; i++) {
        all[i].style.backgroundColor = 'white';
}
    document.getElementById(tile).style.backgroundColor='#F5DFCB'
    var piece = document.getElementById("pieces").value;

    switch(piece) {
        case "pawn":
            if (row == 8) {
                let newRow = row - 2;
                let newCol = col;
                paintTile(newRow, newCol)
            } else {
                let newRow = row - 1;
                let newCol = col;
                paintTile(newRow, newCol)
            }
            break;
        case "rook":
            rookMovement()
            function rookMovement() {
                for (i = row + 1; i <= 8; i++) {
                    document.getElementById("row-" + i + "-col-" + col).style.backgroundColor='D5D6EA';
                }
    
                for (i = row - 1; i >= 1; i--) {
                    document.getElementById("row-" + i + "-col-" + col).style.backgroundColor='D5D6EA';
                }
    
                for (i = col + 1; i <= 8; i++) {
                    document.getElementById("row-" + row + "-col-" + i).style.backgroundColor='D5D6EA';
                }
    
                for (i = col - 1; i >= 1; i--) {
                    document.getElementById("row-" + row + "-col-" + i).style.backgroundColor='D5D6EA';
                }
            }
            break;
        case "knight":
            paintTile(row + 2, col + 1)
            paintTile(row + 2, col - 1)
            paintTile(row - 2, col + 1)
            paintTile(row - 2, col - 1)

            paintTile(row + 1, col + 2)     
            paintTile(row + 1, col - 2)
            paintTile(row - 1, col + 2)     
            paintTile(row - 1, col - 2)
            break;
        case "bishop":
            bishopMovement()
            function bishopMovement() {
                for (i = row + 1, x = col - 1; i <=8 && x >=1; i++, x--) {
                    paintTile(i, x)
                }
                for (i = row - 1, x = col + 1; i >=1 && x <=8; i--, x++) {
                    paintTile(i, x)
                }
                for (i = row - 1, x = col - 1; i >=1 && x >=1; i--, x--) {
                    paintTile(i, x)
                }
                for (i = row + 1, x = col + 1; i <=8 && x <=8; i++, x++) {
                    paintTile(i, x)
                }
            }
            break;
        case "king":
            kingMovement()
            function kingMovement() {
                paintTile(row + 1, col + 1)
                paintTile(row + 1, col)
                paintTile(row - 1, col - 1)
                paintTile(row - 1, col)
                paintTile(row, col + 1)
                paintTile(row, col - 1)
                paintTile(row + 1, col - 1)
                paintTile(row - 1, col + 1)
            }
            break;
        case "queen":
            // Wrapped king, bishop and rook movement in functions as the queen uses a combination of all three
            // Reduces lines of code
            kingMovement()
            bishopMovement()
            rookMovement()
            break;
    }

    // paintTile function takes row and colm applies red background color
    function paintTile(row, col) {
        let grid = document.getElementById("row-" + row + "-col-" + col) // Initialise grid variable
        if (grid !== null) { // Check if grid is not null
            document.getElementById("row-" + row + "-col-" + col).style.backgroundColor='#D5D6EA';     
        }
    }

}
