function computerPlay() {
    let moves = ['Rock', 'Paper', 'Scissors']
    let randomIndex = Math.floor(Math.random() * moves.length)
    return moves[randomIndex]
}