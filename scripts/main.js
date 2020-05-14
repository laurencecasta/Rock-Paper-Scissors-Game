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
  let winCase = (
    (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock')
    );
  let tieCase = (playerSelection == computerSelection);
  return (
    tieCase ? 'You tied this round.' :
    winCase ? `You win this round. ${playerSelection} beats ${computerSelection}.` :
    `You lose this round! ${computerSelection} beats ${playerSelection}.`
    );
}

function userWins(message) {
  return (
    (message.slice(4, 7) == 'tie') ? 'tie' :
    (message.slice(4, 7) == 'win') ? true :
    false
    )
}

function logScore (computer, you) {
  console.log(`Computer: ${computer}; You: ${you}`)
}

function game () {
  let userScore = 0;
  let computerScore = 0;
  let userPlay;
  for (let i = 0; i < 5; i++) {
    userPlay = prompt('Enter your play (rock, paper, scissors): ');
    let roundResult = playRound(userPlay, computerPlay());
    console.log(roundResult);
    switch(userWins(roundResult)) {
      case true:
        userScore++;
        logScore(computerScore, userScore);
        break;
      case false:
        computerScore++;
        logScore(computerScore, userScore);
        break;
      default:
        logScore(computerScore, userScore);
    }
  }
  console.log(
    (userScore > computerScore) ? 'You win.' :
    (userScore < computerScore) ? 'You lose!':
    'It was a tie.'
    );
}

