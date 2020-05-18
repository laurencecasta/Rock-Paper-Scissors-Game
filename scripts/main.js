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
  return `Computer: ${computer} | You: ${you}`;
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const gameData = document.querySelector('#gameData');

const roundResult = document.createElement('h3');
const tally = document.createElement('h3');

let userScore = 0;
let compScore = 0;
rockBtn.addEventListener('click', () => {
  if (roundResult.textContent == 'You win.' || roundResult.textContent == 'You lose!') {
    return;
  }
  if (userScore == 5 || compScore == 5) {
    if (userScore > compScore) {
      roundResult.textContent = 'You win.';
    } else {
      roundResult.textContent = 'You lose!';
    }
    return;
  }

  roundText = playRound('Rock', computerPlay());
  roundResult.textContent = roundText;
  if (userWins(roundText) === true) {
    userScore++;
  } else if (userWins(roundText) === false) {
    compScore++;
  }

  tally.textContent = logScore(compScore, userScore);

  if (roundResult.textContent == 'You win.' || roundResult.textContent == 'You lose!') {
    return;
  }
  if (userScore == 5 || compScore == 5) {
    if (userScore > compScore) {
      roundResult.textContent = 'You win.';
    } else {
      roundResult.textContent = 'You lose!';
    }
    return;
  }
})

paperBtn.addEventListener('click', () => {
  if (roundResult.textContent == 'You win.' || roundResult.textContent == 'You lose!') {
    return;
  }
  if (userScore == 5 || compScore == 5) {
    if (userScore > compScore) {
      roundResult.textContent = 'You win.';
    } else {
      roundResult.textContent = 'You lose!';
    }
    return;
  }
  
  roundText = playRound('Rock', computerPlay());
  roundResult.textContent = roundText;
  if (userWins(roundText) === true) {
    userScore++;
  } else if (userWins(roundText) === false) {
    compScore++;
  }
  tally.textContent = logScore(compScore, userScore);

  if (roundResult.textContent == 'You win.' || roundResult.textContent == 'You lose!') {
    return;
  }
  if (userScore == 5 || compScore == 5) {
    if (userScore > compScore) {
      roundResult.textContent = 'You win.';
    } else {
      roundResult.textContent = 'You lose!';
    }
    return;
  }
  
})

scissorsBtn.addEventListener('click', () => {
  if (roundResult.textContent == 'You win.' || roundResult.textContent == 'You lose!') {
    return;
  }
  if (userScore == 5 || compScore == 5) {
    if (userScore > compScore) {
      roundResult.textContent = 'You win.';
    } else {
      roundResult.textContent = 'You lose!';
    }
    return;
  }
  
  roundText = playRound('Rock', computerPlay());
  roundResult.textContent = roundText;
  if (userWins(roundText) === true) {
    userScore++;
  } else if (userWins(roundText) === false) {
    compScore++;
  }
  tally.textContent = logScore(compScore, userScore);

  if (roundResult.textContent == 'You win.' || roundResult.textContent == 'You lose!') {
    return;
  }
  if (userScore == 5 || compScore == 5) {
    if (userScore > compScore) {
      roundResult.textContent = 'You win.';
    } else {
      roundResult.textContent = 'You lose!';
    }
    return;
  }
  
})

gameData.appendChild(roundResult);
gameData.appendChild(tally);