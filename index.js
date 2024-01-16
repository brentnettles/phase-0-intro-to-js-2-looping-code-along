function writeCards(names, event) {
    let thankYouMessages = [];
  
    // use array
    for (let i = 0; i < names.length; i++) {
      // message
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouMessages.push(message);
    }
    return thankYouMessages;
}

// no duplicate countDown functions
function countDown(startingNumber) {
    let currentNumber = startingNumber;  

    while (currentNumber >= 0) {
        console.log(currentNumber);
        currentNumber--;
    }
}