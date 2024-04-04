{

 const playGame = function(playerChoise){clearMessages()
    const getMoveName = function(argMoveId){
            if(argMoveId == 1){
            return 'kamień';
            } else if(argMoveId == 2){
                return 'papier';
            } else if(argMoveId == 3){
                return 'nożyce';
            } else { 
                printMessage('Nie prawidłowy ruch ' + argMoveId + '.');
                return 'nieznany ruch';
            }
        }

        const argPlayerMove = getMoveName(playerChoise);
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const argComputerMove = getMoveName(randomNumber);
    
        console.log('Gracz wpisał: ' + playerChoise);
        printMessage('Twój ruch to: ' + argPlayerMove);
      
        console.log('Wylosowana liczba to: ' + randomNumber);  
        printMessage('Mój ruch to: ' + argComputerMove); 
    
        
        const displayResult = function(argComputerMove, argPlayerMove){
            if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
                printMessage('Ty wygrywasz!');
            } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
                printMessage('Ty wygrywasz!');  
            } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                printMessage('Ty wygrywasz!');  
            } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
                printMessage('Wygrał komputer');  
            } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
                printMessage('Wygrał komputer');  
            } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
                printMessage('Wygrał komputer');  
            } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
                printMessage('Nikt nie wygrywa - remis');  
            } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
                printMessage('Nikt nie wygrywa - remis');  
            } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
                printMessage('Nikt nie wygrywa - remis');  
            } else {
                printMessage('Wybrałeś złą liczbę - wpisz poprawną');
            }
        }
        console.log('Ruchy: Twój - ' + argComputerMove, ', Komputer - ' + argPlayerMove);
        
        displayResult(argComputerMove, argPlayerMove);
    }
    
    document.getElementById('play-rock').addEventListener('click', function(){
        playGame('1');
    });
    
    document.getElementById('play-paper').addEventListener('click', function(){
        playGame('2');
    });
    
    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame('3');
    });
    
    }