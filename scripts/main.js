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
    );
}

function logScore (computer, you) {
  alert(`Computer: ${computer}; You: ${you}`);
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const gameData = document.querySelector('#gameData');

const roundResult = document.createElement('h3');

rockBtn.addEventListener('click', () => {
  roundResult.textContent = playRound('Rock', computerPlay());
})

paperBtn.addEventListener('click', () => {
  roundResult.textContent = playRound('Paper', computerPlay());
})

scissorsBtn.addEventListener('click', () => {
  roundResult.textContent = playRound('Paper', computerPlay());
})

gameData.appendChild(roundResult);