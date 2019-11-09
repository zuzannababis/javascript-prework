function getMoveName(randomNumber){
	if(randomNumber == 1){
	return 'kamień';
	} else if(randomNumber == 2){
	  return 'papier';
	} else if(randomNumber == 3){
	  return 'nożyce';
	} else {
	  printMessage('Nie znam ruchu o id ' + randomNumber + '.');
	  return 'nieznany ruch';
	}
  }


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
    computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
} */

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

console.log('gracz zagrał: ' + playerMove);

/* if(playerInput == '1'){
    playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){
    playerMove = 'nożyce';
} */

printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove){
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		printMessage('Ty wygrywasz!');
	} else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		printMessage('Ja wygrywam!');
	} else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		printMessage('Ja wygrywam!');
	} else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		printMessage('Ty wygrywasz!');
	} else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		printMessage('Ja wygrywam!');
	} else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		printMessage('Ty wygrywasz!');
	} else if( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
		printMessage('BŁĄD SYSTEMU');
	} else if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
		printMessage('BŁĄD SYSTEMU');
	} else if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
		printMessage('BŁĄD SYSTEMU');
	} else{
		printMessage('Remis!');
  }
}

displayResult(computerMove, playerMove)
