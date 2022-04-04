const names = ["Avorio", "Briannita","Ali"];
function writeCards(names, event="birthday") {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}

function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -= 1;
    }
    console.log(startingNumber)
};