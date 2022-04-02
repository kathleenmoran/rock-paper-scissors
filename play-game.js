function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return null;
    }

    switch (playerSelection) {
        case 'rock':
            return computerSelection === 'scissors';
        case 'paper':
            return computerSelection === 'rock';
        case 'scissors':
            return computerSelection === 'paper';
        default:
            return null;
    }
}

function generateRoundMessage(playerWon, playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'It\'s a tie!';
    }
    else if (playerWon === null) {
        return 'You entered an invalid move. Please enter either "rock", "paper", or scissors".';
    }
    else {
        let didPlayerWinMessage = `You ${playerWon ? 'won' : 'lost'}!`;
        let winnerMove = playerWon ? playerSelection : computerSelection;
        let loserMove = playerWon ? computerSelection : playerSelection;
        let beatMessage = `${winnerMove.charAt(0).toUpperCase()}${winnerMove.substring(1)} beats ${loserMove.toLowerCase()}.`;
        return `${didPlayerWinMessage} ${beatMessage}`;
    }
}

function generateFinalMessage(playerScore, computerScore) {
    let didPlayerWinMessage = (playerScore > computerScore) ? 'You won!' : (computerScore > playerScore) ? 'You lost!' : 'It\'s a tie!';
    let scoreMessage = `Final score: You - ${playerScore}; Computer - ${computerScore}.`;
    return `GAME OVER. ${didPlayerWinMessage} ${scoreMessage}`;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 5;

    while (rounds > 0) {
        let playerMove = prompt('Please enter "rock", "paper", or "scissors".');
        let computerMove = computerPlay();
        let roundResult = playRound(playerMove, computerMove);
        console.log(generateRoundMessage(roundResult, playerMove, computerMove));
        
        if (roundResult !== null) {
            roundResult ? ++playerScore : ++computerScore;
            --rounds;
        }
    }

    console.log(generateFinalMessage(playerScore, computerScore));
}

game();