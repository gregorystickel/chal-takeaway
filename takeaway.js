// There’s a game, “takeaway”, that is played by two players, using a number of stones.
// The first player goes first. She can take 2, 3, or 5 stones from the pool. The second player goes next; she can also remove 2, 3, or 5 stones. The first player then goes, and so on.
// If a player is unable to move (there are fewer than 2 stones), they lose.

function canWin (n) {
    // none of the legal moves are under two
    if (n < 2) {
        return false
    }

    let legalMoves = [2, 3, 5]

    // if canWin is false for the opponent, then we win
    legalMoves.forEach(move => {
        if (!canWin(n - move)) {
            return true
        }
    })

    // if we can't win from above, we lose
    return false

}


console.log(canWin(1))// false
console.log(canWin(2))// true
console.log(canWin(3))// true
console.log(canWin(4))// true
console.log(canWin(5))// true
console.log(canWin(6))// true
console.log(canWin(7))// false
console.log(canWin(8))// false
console.log(canWin(9))// true
console.log(canWin(100))//true