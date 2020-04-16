// Program that plays “neither yes, nor no” with the user. Specifically, the programs asks the user to enter text until either “yes” or “no” is typed, which ends the game.
let word = '';
while (word !== 'yes' && word !== 'no')
{
    word = prompt('Do you want to play "Neither yes, nor no" with me?');
    if (word !== 'yes' && word !== 'no')
        console.log(`${word}`);
}
console.log("Game Ends")
