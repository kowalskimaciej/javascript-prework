{
    const playGame = function(playerChoice) {
            clearMessages();
        
    const getMoveName = function(moveId) {
        if (moveId == 1) {
            return 'kamień';
        } else if (moveId == 2) {
            return 'papier';
        } else if (moveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nieprawidłowy ruch ' + moveId + '.');
            return 'nieznany ruch';
        }
    };

    const playerMove = getMoveName(playerChoice);
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
        
    printMessage('Twój ruch to: ' + playerMove);
    printMessage('Mój ruch to: ' + computerMove);
        
    const displayResult = function(computerMove, playerMove) {
        if (computerMove == 'kamień' && playerMove == 'papier') {
            printMessage('Wygrywasz!');
        } else if (computerMove == 'papier' && playerMove == 'nożyce') {
            printMessage('Wygrywasz!');  
        } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
            printMessage('Wygrywasz!');  
        } else if (computerMove == 'papier' && playerMove == 'kamień') {
            printMessage('Przegrywasz!');  
        } else if (computerMove == 'nożyce' && playerMove == 'papier') {
            printMessage('Przegrywasz!');  
        } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
            printMessage('Przegrywasz!');  
        } else if (computerMove == 'kamień' && playerMove == 'kamień') {
            printMessage('Remis!');  
        } else if (computerMove == 'papier' && playerMove == 'papier') {
            printMessage('Remis!');  
        } else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
            printMessage('Remis!');  
        } else {
            printMessage('Zły wybór! Wybierz poprawną liczbę!');
        }
    };
        
    displayResult(computerMove, playerMove);
    };

    document.getElementById('play-rock').addEventListener('click', function() {
        playGame(1);
    });

    document.getElementById('play-paper').addEventListener('click', function() {
        playGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function() {
        playGame(3);
    });
}