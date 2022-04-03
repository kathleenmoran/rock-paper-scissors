function computerPlay() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function didPlayerWinRound(playerSelection, computerSelection) {
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
        const didPlayerWinMessage = `You ${playerWon ? 'won' : 'lost'}!`;
        const winnerMove = playerWon ? playerSelection : computerSelection;
        const loserMove = playerWon ? computerSelection : playerSelection;
        const beatMessage = `${winnerMove.charAt(0).toUpperCase()}${winnerMove.substring(1)} beats ${loserMove.toLowerCase()}.`;
        return `${didPlayerWinMessage} ${beatMessage}`;
    }
}

function generateFinalMessage(playerScore, computerScore) {
    const didPlayerWinMessage = (playerScore > computerScore) ? 'You won!' : (computerScore > playerScore) ? 'You lost!' : 'It\'s a tie!';
    const scoreMessage = `Final score: You - ${playerScore}; Computer - ${computerScore}.`;
    return `GAME OVER. ${didPlayerWinMessage} ${scoreMessage}`;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 5;

    while (rounds > 0) {
        let playerMove = prompt('Please enter "rock", "paper", or "scissors".');
        let computerMove = computerPlay();
        let roundResult = didPlayerWinRound(playerMove, computerMove);
        console.log(generateRoundMessage(roundResult, playerMove, computerMove));
        
        if (roundResult !== null) {
            roundResult ? ++playerScore : ++computerScore;
            --rounds;
        }
    }

    console.log(generateFinalMessage(playerScore, computerScore));
}

game();