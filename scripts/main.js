function getNum() {return Math.floor(Math.random() * 3)}

function computerPlay () {
  switch (getNum()) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
    default:
      console.log('There was an error');
  }
}

function capFirst (str) {
  return str.replace(str[0], str[0].toUpperCase());
}

function playRound (playerSelection, computerSelection) {
  playerSelection = capFirst(playerSelection.toLowerCase());// sanitize user input
  console.log(playerSelection);
  winCase = (
    (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock')
    );
  tieCase = (playerSelection == computerSelection);
  return (
    tieCase ? 'You tied.' :
    winCase ? `You win. ${playerSelection} beats ${computerSelection}.` :
    `You lose! ${computerSelection} beats ${playerSelection}.`
    )
}

