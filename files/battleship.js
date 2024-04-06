var firstTime = true;
var playerOneTurn = true;
var popUpActive = false;
var name1, name2;
var place1, place2;
var high, low;
var numbers = ['0','1','2','3','4','5','6','7','8','9','10'];
var letters = ['','A','B','C','D','E','F','G','H','I','J'];
var aircraft1 = new Set();
var aircraft2 = new Set();
var battleship1 = new Set();
var battleship2 = new Set();
var submarine1 = new Set();
var submarine2 = new Set();
var hits1 = new Set();
var hits2 = new Set();
var misses1 = new Set();
var misses2 = new Set();
var turnCounter = 0;
var playerOneScore = 24;
var playerTwoScore = 24;

function getName() {
    if (firstTime == false ) {
        //Gets names and places of second player
        name2 = document.getElementById("name").value;
        place2 = document.getElementById("placements").value;

        //Reminding user to fill out parameters
        if ( name2 === "" ) {
            var paragraphName = document.getElementById("paragraphName");
            paragraphName.innerHTML = "You must insert a name for Player 2";
        } else if ( place2 === "" ) {
            var paragraphPlace = document.getElementById("paragraphPlace");
            paragraphPlace.innerHTML = "You must insert a ship placements like the example";
        } else {
            //Clears value so Player2 can't see answers
            document.getElementById("name").value = "";
            document.getElementById("placements").value = "";

            //Modifies test to ask for the name of player 2
            var paragraphName = document.getElementById("paragraphName");
            paragraphName.innerHTML = "Name of Player 2";
            hideStart();
            console.log("Should have hid start");
        }

    } else {
        //Gets names and places of first player and also clears whats in the textboxes
        name1 = document.getElementById("name").value;
        place1 = document.getElementById("placements").value;

        //Reminding user to fill out parameters
        if ( name1 === "" ) {
            var paragraphName = document.getElementById("paragraphName");
            paragraphName.innerHTML = "You must insert a name for Player 1";
        } else if ( place1 === "" ) {
            var paragraphPlace = document.getElementById("paragraphPlace");
            paragraphPlace.innerHTML = "You must insert a ship placements like the example";
        } else {
            //Clears value so Player2 can't see answers
            document.getElementById("name").value = "";
            document.getElementById("placements").value = "";

            //Modifies test to ask for the name of player 2
            var paragraphName = document.getElementById("paragraphName");
            paragraphName.innerHTML = "Name of Player 2";
            firstTime = false;
        }
    }
}

function parsePlayerOne() {
    //Take user input and divides it into sections
    var splitPlace1 = place1.split(';');

    var letter1 = splitPlace1[0].slice(2,3);
    var number1 = splitPlace1[0].slice(3,5);
    var letter2;
    var number2;
    if (number1 != 10) {
        number1 = splitPlace1[0].slice(3,4);
        letter2 = splitPlace1[0].slice(5,6);
        number2 = splitPlace1[0].slice(6,8);
        if (number2 != 10) {
            number2 = splitPlace1[0].slice(6,7);
        }
    } else {
        letter2 = splitPlace1[0].slice(6,7);
        number2 = splitPlace1[0].slice(7,9);
        if (number2 != 10) {
            number2 = splitPlace1[0].slice(7,8);
        } 
    }

    if (letter1 == (letter2)) {
        if (number2 == 10) {
            for (i = number1; i <= 10; i++) {
                aircraft1.add(letter1 + "" + i)
            }
        } else {
            for (i = number1; i <= number2; i++) {
                aircraft1.add(letter1 + "" + i)
            }
        }
    } else {
        for (i in letters) {
            if (letters[i] == (letter1)) {
                low = i;
            }
            if (letters[i] == (letter2)) {
                high = i;
            }
        }
        //For loop wouldn't work when high = 10 so this is the compromise
        if (high == 10) {
            for (i = low; i <= 10; i++) {
                aircraft1.add(letters[i] +""+ number1);
            }
        } else {
            for (i = low; i <= high; i++) {
                aircraft1.add(letters[i] +""+ number1);
            }
        }
    }

    //Battleship 1
    letter1 = splitPlace1[1].slice(2,3);
    number1 = splitPlace1[1].slice(3,5);
    if (number1 != 10) {
        number1 = splitPlace1[1].slice(3,4);
        letter2 = splitPlace1[1].slice(5,6);
        number2 = splitPlace1[1].slice(6,8);
        if (number2 != 10) {
            number2 = splitPlace1[1].slice(6,7);
        }
    } else {
        letter2 = splitPlace1[1].slice(6,7);
        number2 = splitPlace1[1].slice(7,9);
        if (number2 != 10) {
            number2 = splitPlace1[1].slice(7,8);
        } 
    }

    if (letter1 == (letter2)) {
        if (number2 == 10) {
            for (i = number1; i <= 10; i++) {
                battleship1.add(letter1 + "" + i)
            }
        } else {
            for (i = number1; i <= number2; i++) {
                battleship1.add(letter1 + "" + i)
            }
        }
    } else {
        for (i in letters) {
            if (letters[i] == (letter1)) {
                low = i;
            }
            if (letters[i] == (letter2)) {
                high = i;
            }
        }
        //For loop wouldn't work when high = 10 so this is the compromise
        if (high == 10) {
            for (i = low; i <= 10; i++) {
                battleship1.add(letters[i] +""+ number1);
            }
        } else {
            for (i = low; i <= high; i++) {
                battleship1.add(letters[i] +""+ number1);
            }
        }
    }

    letter1 = splitPlace1[2].slice(2,3);
    number1 = splitPlace1[2].slice(3,5);
    if (number1 != 10) {
        number1 = splitPlace1[2].slice(3,4);
        letter2 = splitPlace1[2].slice(5,6);
        number2 = splitPlace1[2].slice(6,8);
        if (number2 != 10) {
            number2 = splitPlace1[2].slice(6,7);
        }
    } else {
        letter2 = splitPlace1[2].slice(6,7);
        number2 = splitPlace1[2].slice(7,9);
        if (number2 != 10) {
            number2 = splitPlace1[2].slice(7,8);
        } 
    }

    if (letter1 == (letter2)) {
        if (number2 == 10) {
            for (i = number1; i <= 10; i++) {
                submarine1.add(letter1 + "" + i)
            }
        } else {
            for (i = number1; i <= number2; i++) {
                submarine1.add(letter1 + "" + i)
            }
        }
    } else {
        for (i in letters) {
            if (letters[i] == (letter1)) {
                low = i;
            }
            if (letters[i] == (letter2)) {
                high = i;
            }
        }
        //For loop wouldn't work when high = 10 so this is the compromise
        if (high == 10) {
            for (i = low; i <= 10; i++) {
                submarine1.add(letters[i] +""+ number1);
            }
        } else {
            for (i = low; i <= high; i++) {
                submarine1.add(letters[i] +""+ number1);
            }
        }
    }
}

function parsePlayerTwo() {
    //Take user input divides it into sections
    var splitPlace2 = place2.split(';');

    var letter1 = splitPlace2[0].slice(2,3);
    var number1 = splitPlace2[0].slice(3,5);
    var letter2;
    var number2;
    if (number1 != 10) {
        number1 = splitPlace2[0].slice(3,4);
        letter2 = splitPlace2[0].slice(5,6);
        number2 = splitPlace2[0].slice(6,8);
        if (number2 != 10) {
            number2 = splitPlace2[0].slice(6,7);
        }
    } else {
        letter2 = splitPlace2[0].slice(6,7);
        number2 = splitPlace2[0].slice(7,9);
        if (number2 != 10) {
            number2 = splitPlace2[0].slice(7,8);
        } 
    }

    if (letter1 == letter2) {
        if (number2 == 10) {
            for (i = number1; i <= 10; i++) {
                aircraft2.add(letter1 + "" + i)
            }
        } else {
            for (i = number1; i <= number2; i++) {
                aircraft2.add(letter1 + "" + i)
            }
        }
    } else {
        for (i in letters) {
            if (letters[i] == letter1) {
                low = i;
            }
            if (letters[i] == (letter2)) {
                high = i;
            }
        }
        //For loop wouldn't work when high = 10 so this is the compromise
        if (high == 10) {
            for (i = low; i <= 10; i++) {
                aircraft2.add(letters[i] +""+ number1);
            }
        } else {
            for (i = low; i <= high; i++) {
                aircraft2.add(letters[i] +""+ number1);
            }
        }
    }

    letter1 = splitPlace2[1].slice(2,3);
    number1 = splitPlace2[1].slice(3,5);
    if (number1 != 10) {
        number1 = splitPlace2[1].slice(3,4);
        letter2 = splitPlace2[1].slice(5,6);
        number2 = splitPlace2[1].slice(6,8);
        if (number2 != 10) {
            number2 = splitPlace2[1].slice(6,7);
        }
    } else {
        letter2 = splitPlace2[1].slice(6,7);
        number2 = splitPlace2[1].slice(7,9);
        if (number2 != 10) {
            number2 = splitPlace2[1].slice(7,8);
        } 
    }

    if (letter1 == (letter2)) {
        if (number2 == 10) {
            for (i = number1; i <= 10; i++) {
                battleship2.add(letter1 + "" + i)
            }
        } else {
            for (i = number1; i <= number2; i++) {
                battleship2.add(letter1 + "" + i)
            }
        }
    } else {
        for (i in letters) {
            if (letters[i] == (letter1)) {
                low = i;
            }
            if (letters[i] == (letter2)) {
                high = i;
            }
        }
        //For loop wouldn't work when high = 10 so this is the compromise
        if (high == 10) {
            for (i = low; i <= 10; i++) {
                battleship2.add(letters[i] +""+ number1);
            }
        } else {
            for (i = low; i <= high; i++) {
                battleship2.add(letters[i] +""+ number1);
            }
        }
    }

    letter1 = splitPlace2[2].slice(2,3);
    number1 = splitPlace2[2].slice(3,5);
    if (number1 != 10) {
        number1 = splitPlace2[2].slice(3,4);
        letter2 = splitPlace2[2].slice(5,6);
        number2 = splitPlace2[2].slice(6,8);
        if (number2 != 10) {
            number2 = splitPlace2[2].slice(6,7);
        }
    } else {
        letter2 = splitPlace2[2].slice(6,7);
        number2 = splitPlace2[2].slice(7,9);
        if (number2 != 10) {
            number2 = splitPlace2[2].slice(7,8);
        } 
    }

    if (letter1 == (letter2)) {
        if (number2 == 10) {
            for (i = number1; i <= 10; i++) {
                submarine2.add(letter1 + "" + i)
            }
        } else {
            for (i = number1; i <= number2; i++) {
                submarine2.add(letter1 + "" + i)
            }
        }
    } else {
        for (i in letters) {
            if (letters[i] == (letter1)) {
                low = i;
            }
            if (letters[i] == (letter2)) {
                high = i;
            }
        }
        //For loop wouldn't work when high = 10 so this is the compromise
        if (high == 10) {
            for (i = low; i <= 10; i++) {
                submarine2.add(letters[i] +""+ number1);
            }
        } else {
            for (i = low; i <= high; i++) {
                submarine2.add(letters[i] +""+ number1);
            }
        }
    }
}

function hideStart() {
    //hides the intro form
    document.getElementById("intro").setAttribute('class', 'hidden');
    indicateTurn();
}

function indicateTurn() {
    var turn = document.getElementById("turnIndicator");

    //Hide boards during the trade off
    document.getElementById("leftBoardSpace1").setAttribute('class', 'hidden');
    document.getElementById("rightBoardSpace1").setAttribute('class', 'hidden');
    document.getElementById("leftBoardSpace2").setAttribute('class', 'hidden');
    document.getElementById("rightBoardSpace2").setAttribute('class', 'hidden');

    //Hide name of current player
    document.getElementById("nameDiv").setAttribute('class', 'hidden');

    if ( playerOneTurn == true ) {
        turn.innerHTML = "Click confirm to begin "+ name1 +"'s turn!";
    } else {
        turn.innerHTML = "Click confirm to begin "+ name2 +"'s turn!";
    }

    //If the player wins the game is over
    if ( playerOneScore == 0 || playerTwoScore == 0 ) {
        victory();
    } else {
        //Make the div including the turn information visible
        document.getElementById("turnDiv").setAttribute('class', 'textFormat');
    }
}

function playerTurn() {
    //States which player's turn it currently. Used for when passing between players
    var turnName = document.getElementById("nameIndicator");
    document.getElementById("nameDiv").setAttribute('class', 'bigText');
    if ( playerOneTurn == true ) {
        turnName.innerHTML = name1 +"'s turn!";
    } else {
        turnName.innerHTML = name2 +"'s turn!";
    }

    //Hide button
    document.getElementById("turnDiv").setAttribute('class', 'hidden');

    //create board once for player 1 and once for player 2
    if (turnCounter == 0) {
        createBoard1();
    } else if (turnCounter == 1) {
        createBoard2();
    } else if (turnCounter % 2 == 0) {//Now flip flop between which one you render starting with Player 1
        document.getElementById("leftBoardSpace1").setAttribute('class', 'leftSpace');
        document.getElementById("rightBoardSpace1").setAttribute('class', 'rightSpace');
        document.getElementById("leftBoardSpace2").setAttribute('class', 'hidden');
        document.getElementById("rightBoardSpace2").setAttribute('class', 'hidden');
    } else {
        document.getElementById("leftBoardSpace2").setAttribute('class', 'leftSpace');
        document.getElementById("rightBoardSpace2").setAttribute('class', 'rightSpace');
        document.getElementById("leftBoardSpace1").setAttribute('class', 'hidden');
        document.getElementById("rightBoardSpace1").setAttribute('class', 'hidden');
    }
}

function createBoard1() {
    parsePlayerOne();
    parsePlayerTwo();

    document.getElementById("leftBoardSpace1").setAttribute('class', 'leftSpace');
    document.getElementById("rightBoardSpace1").setAttribute('class', 'rightSpace');

    //Sets text "Your Board" below current player's board
    var leftBoard = document.createElement("leftBoard");
    leftBoard.setAttribute('class', 'bigText');
    leftBoard.innerHTML = "Your Board";
    document.getElementById("leftBoardSpace1").appendChild(leftBoard);

    //Sets text "Enemy Board" below enemy board
    var rightBoard = document.createElement("rightBoard");
    rightBoard.setAttribute('class', 'bigText');
    rightBoard.innerHTML = "Enemy Board";
    document.getElementById("rightBoardSpace1").appendChild(rightBoard);

    //Creating your board and uses numbers[] and letters[] from top of file
    for (j in numbers) {
        for (i in letters) {
            if (j == 0 && i == 0) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'numberTile');
                document.getElementById("leftBoard1").appendChild(tile);
            } else if (j == 0) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'numberTile');
                tile.innerHTML = letters[i];
                document.getElementById("leftBoard1").appendChild(tile);
            } else if (i == 0 && j != 0) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'numberTile');
                tile.innerHTML = numbers[j];
                document.getElementById("leftBoard1").appendChild(tile);
            } else if ((aircraft1.has(letters[i] +""+ numbers[j]))) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'yourTile');
                tile.innerHTML = "A";
                document.getElementById("leftBoard1").appendChild(tile);
            } else if ((battleship1.has(letters[i] +""+ numbers[j]))) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'yourTile');
                tile.innerHTML = "B";
                document.getElementById("leftBoard1").appendChild(tile);
            } else if ((submarine1.has(letters[i] +""+ numbers[j]))) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'yourTile');
                tile.innerHTML = "S";
                document.getElementById("leftBoard1").appendChild(tile);
            } else {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'yourTile');
                document.getElementById("leftBoard1").appendChild(tile);
            }
        }
    }

    //Creating enemy board
    for (j in numbers) {
        for (i in letters) {
            if (j == 0 && i == 0) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'numberTile');
                document.getElementById("rightBoard1").appendChild(tile);
            } else if (j == 0) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'numberTile');
                tile.innerHTML = letters[i];
                document.getElementById("rightBoard1").appendChild(tile);
            } else if (i == 0 && j != 0) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'numberTile');
                tile.innerHTML = numbers[j];
                document.getElementById("rightBoard1").appendChild(tile);
            } else {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'enemyTile');
                tempValue = 1 +""+ letters[i] +""+ numbers[j];
                tile.setAttribute('id', tempValue);
                tile.addEventListener('click', function() {cellClicked1(this.getAttribute('id'));});
                document.getElementById("rightBoard1").appendChild(tile);
            }
        }
    }
}

function cellClicked1(coords) {
    let usable = coords.slice(1);//Gets A1 instead of 1A1
    if (document.getElementById(coords).getAttribute('class') == 'hitTile') {
        popUpMsg("You have already hit this tile, try again!");
    } else if (document.getElementById(coords).getAttribute('class') == 'missTile') {
        //Do nothing because we don't want to fire on a spot that already fired on
    } else if (aircraft2.has(usable) && popUpActive == false) {
        aircraft2.delete(usable);
        if (aircraft2.size == 0){
            popUpMsg("Hit! You sunk "+ name1 +"'s Aircraft Carrier");
            playerTwoScore -= 10;
        } else {
            popUpMsg("Hit!");
        }
        document.getElementById(coords).setAttribute('class', 'hitTile');
    } else if (battleship2.has(usable) && popUpActive == false) {
        battleship2.delete(usable);
        if (battleship2.size == 0){
            popUpMsg("Hit! You sunk "+ name1 +"'s Battleship");
            playerTwoScore -= 8;
        } else {
            popUpMsg("Hit!");
        }
        document.getElementById(coords).setAttribute('class', 'hitTile');
    } else if (submarine2.has(usable) && popUpActive == false) {
        submarine2.delete(usable);
        if (submarine2.size == 0){
            popUpMsg("Hit! You sunk "+ name1 +"'s Submarine");
            playerTwoScore -= 6;
        } else {
            popUpMsg("Hit!");
        }
        document.getElementById(coords).setAttribute('class', 'hitTile');
    } else if (popUpActive == false) {
        popUpMsg("Miss!");
        document.getElementById(coords).setAttribute('class', 'missTile');
    }
}

function createBoard2() {
    document.getElementById("leftBoardSpace2").setAttribute('class', 'leftSpace');
    document.getElementById("rightBoardSpace2").setAttribute('class', 'rightSpace');

    //Sets text "Your Board" below current player's board
    var leftBoard = document.createElement("leftBoard");
    leftBoard.setAttribute('class', 'bigText');
    leftBoard.innerHTML = "Your Board";
    document.getElementById("leftBoardSpace2").appendChild(leftBoard);

    //Sets text "Enemy Board" below enemy board
    var rightBoard = document.createElement("rightBoard");
    rightBoard.setAttribute('class', 'bigText');
    rightBoard.innerHTML = "Enemy Board";
    document.getElementById("rightBoardSpace2").appendChild(rightBoard);

    //Creating your board and uses numbers[] and letters[] from top of file
    for (j in numbers) {
        for (i in letters) {
            if (j == 0 && i == 0) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'numberTile');
                document.getElementById("leftBoard2").appendChild(tile);
            } else if (j == 0) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'numberTile');
                tile.innerHTML = letters[i];
                document.getElementById("leftBoard2").appendChild(tile);
            } else if (i == 0 && j != 0) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'numberTile');
                tile.innerHTML = numbers[j];
                document.getElementById("leftBoard2").appendChild(tile);
            } else if ((aircraft2.has(letters[i] +""+ numbers[j]))) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'yourTile');
                tile.innerHTML = "A";
                document.getElementById("leftBoard2").appendChild(tile);
            } else if ((battleship2.has(letters[i] +""+ numbers[j]))) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'yourTile');
                tile.innerHTML = "B";
                document.getElementById("leftBoard2").appendChild(tile);
            } else if ((submarine2.has(letters[i] +""+ numbers[j]))) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'yourTile');
                tile.innerHTML = "S";
                document.getElementById("leftBoard2").appendChild(tile);
            } else {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'yourTile');
                document.getElementById("leftBoard2").appendChild(tile);
            }
        }
    }

    //Creating enemy board
    for (j in numbers) {
        for (i in letters) {
            if (j == 0 && i == 0) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'numberTile');
                document.getElementById("rightBoard2").appendChild(tile);
            } else if (j == 0) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'numberTile');
                tile.innerHTML = letters[i];
                document.getElementById("rightBoard2").appendChild(tile);
            } else if (i == 0 && j != 0) {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'numberTile');
                tile.innerHTML = numbers[j];
                document.getElementById("rightBoard2").appendChild(tile);
            } else {
                var tile = document.createElement("tile");
                tile.setAttribute('class', 'enemyTile');
                tempValue = 2 +""+ letters[i] +""+ numbers[j];
                tile.setAttribute('id', tempValue);
                tile.addEventListener('click', function() {cellClicked2(this.getAttribute('id'));});
                document.getElementById("rightBoard2").appendChild(tile);
            }
        }
    }
}

function cellClicked2(coords) {
    let usable = coords.slice(1);//Gets A1 instead of 2A1
    if (document.getElementById(coords).getAttribute('class') == 'hitTile') {
        popUpWarning("You have already hit this tile, try again!");
    } else if (document.getElementById(coords).getAttribute('class') == 'missTile') {
        //Do nothing because we don't want to fire on a spot that already fired on
    } else if (aircraft1.has(usable) && popUpActive == false) {
        aircraft1.delete(usable);
        if (aircraft1.size == 0){
            popUpMsg("Hit! You sunk "+ name2 +"'s Aircraft Carrier");
            playerOneScore -= 10;
        } else {
            popUpMsg("Hit!");
        }
        document.getElementById(coords).setAttribute('class', 'hitTile');
    } else if (battleship1.has(usable) && popUpActive == false) {
        battleship1.delete(usable);
        if (battleship1.size == 0){
            popUpMsg("Hit! You sunk "+ name2 +"'s Battleship");
            playerOneScore -= 8;
        } else {
            popUpMsg("Hit!");
        }
        document.getElementById(coords).setAttribute('class', 'hitTile');
    } else if (submarine1.has(usable) && popUpActive == false) {
        submarine1.delete(usable);
        if (submarine1.size == 0){
            popUpMsg("Hit! You sunk "+ name2 +"'s Submarine");
            playerOneScore -= 6;
        } else {
            popUpMsg("Hit!");
        }
        document.getElementById(coords).setAttribute('class', 'hitTile');
    } else if (popUpActive == false){
        popUpMsg("Miss!");
        document.getElementById(coords).setAttribute('class', 'missTile');
    }
}

function popUpWarning(inputString) {
    document.getElementById("popUpWarning").setAttribute('class', 'popUpWarning');
    document.getElementById("popUpWarningText").innerHTML = inputString;
    popUpActive = true;
}

function hidePopUpWarning() {
    document.getElementById("popUpWarning").setAttribute('class', 'hidden');
    document.getElementById("popUpWarningText").innerHTML = "";
    popUpActive = false;
}

function popUpMsg(inputString) {
    document.getElementById("popUpMsg").setAttribute('class', 'popUpMsg');
    document.getElementById("popUpMsgText").innerHTML = inputString;
    popUpActive = true;
}

function hidePopUpMsg() {
    document.getElementById("popUpMsg").setAttribute('class', 'hidden');
    document.getElementById("popUpMsgText").innerHTML = "";
    popUpActive = false;
    playerOneTurn = !playerOneTurn; //Flips who's turn it is
    turnCounter++; //Increment turn counter
    indicateTurn();
}

function victory() {
    //Hide both boards
    document.getElementById("leftBoardSpace2").setAttribute('class', 'hidden');
    document.getElementById("rightBoardSpace2").setAttribute('class', 'hidden');
    document.getElementById("leftBoardSpace1").setAttribute('class', 'hidden');
    document.getElementById("rightBoardSpace1").setAttribute('class', 'hidden');

    //Display name of who won
    var victorName = document.getElementById("victorName");
    document.getElementById("victorDiv").setAttribute('class', 'bigText');
    if ( playerOneScore == 0 ) {
        victorName.innerHTML = name2 +" is the Winner!";
    } else {
        victorName.innerHTML = name1 +" is the Winner!";
    }
    //Display scores
    var score1 = document.getElementById("score1");
    score1.innerHTML = name1 +"'s score is: "+ playerOneScore;
    var score2 = document.getElementById("score2");
    score2.innerHTML = name2 +"'s score is: "+ playerTwoScore;
}