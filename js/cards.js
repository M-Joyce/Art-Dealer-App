// Create a deck of 52 cards
const cards = [
     {number: 1,  color: 'black' , suit: 'spade', index: 0}, 
     {number: 2,  color: 'black' , suit: 'spade', index: 1},
     {number: 3,  color: 'black' , suit: 'spade', index: 2},
     {number: 4,  color: 'black' , suit: 'spade', index: 3},
     {number: 5,  color: 'black' , suit: 'spade', index: 4},
     {number: 6,  color: 'black' , suit: 'spade', index: 5},
     {number: 7,  color: 'black' , suit: 'spade', index: 6},
     {number: 8,  color: 'black' , suit: 'spade', index: 7},
     {number: 9,  color: 'black' , suit: 'spade', index: 8},
     {number: 10, color: 'black' , suit: 'spade', index: 9},
    {number: 11, color: 'black' , suit: 'spade', index: 10},
    {number: 12, color: 'black' , suit: 'spade', index: 11},
    {number: 13, color: 'black' , suit: 'spade', index: 12},
                                                    
    {number: 1,  color: 'red' , suit: 'diamond', index: 13},   
    {number: 2,  color: 'red' , suit: 'diamond', index: 14},
    {number: 3,  color: 'red' , suit: 'diamond', index: 15},
    {number: 4,  color: 'red' , suit: 'diamond', index: 16},
    {number: 5,  color: 'red' , suit: 'diamond', index: 17},
    {number: 6,  color: 'red' , suit: 'diamond', index: 18},
    {number: 7,  color: 'red' , suit: 'diamond', index: 19},
    {number: 8,  color: 'red' , suit: 'diamond', index: 20},
    {number: 9,  color: 'red' , suit: 'diamond', index: 21},
    {number: 10, color: 'red' , suit: 'diamond', index: 22},
    {number: 11, color: 'red' , suit: 'diamond', index: 23},
    {number: 12, color: 'red' , suit: 'diamond', index: 24},
    {number: 13, color: 'red' , suit: 'diamond', index: 25},

      {number: 1,  color: 'red' , suit: 'heart', index: 26},   
      {number: 2,  color: 'red' , suit: 'heart', index: 27},
      {number: 3,  color: 'red' , suit: 'heart', index: 28},
      {number: 4,  color: 'red' , suit: 'heart', index: 29},
      {number: 5,  color: 'red' , suit: 'heart', index: 30},
      {number: 6,  color: 'red' , suit: 'heart', index: 31},
      {number: 7,  color: 'red' , suit: 'heart', index: 32},
      {number: 8,  color: 'red' , suit: 'heart', index: 33},
      {number: 9,  color: 'red' , suit: 'heart', index: 34},
      {number: 10, color: 'red' , suit: 'heart', index: 35},
      {number: 11, color: 'red' , suit: 'heart', index: 36},
      {number: 12, color: 'red' , suit: 'heart', index: 37},
      {number: 13, color: 'red' , suit: 'heart', index: 38},

      {number: 1,  color: 'black' , suit: 'club', index: 39}, 
      {number: 2,  color: 'black' , suit: 'club', index: 40},
      {number: 3,  color: 'black' , suit: 'club', index: 41},
      {number: 4,  color: 'black' , suit: 'club', index: 42},
      {number: 5,  color: 'black' , suit: 'club', index: 43},
      {number: 6,  color: 'black' , suit: 'club', index: 44},
      {number: 7,  color: 'black' , suit: 'club', index: 45},
      {number: 8,  color: 'black' , suit: 'club', index: 46},
      {number: 9,  color: 'black' , suit: 'club', index: 47},
      {number: 10, color: 'black' , suit: 'club', index: 48},
      {number: 11, color: 'black' , suit: 'club', index: 49},
      {number: 12, color: 'black' , suit: 'club', index: 50},
      {number: 13, color: 'black' , suit: 'club', index: 51}
];                                                    

// Set random pattern number on load
let randomPattern = Math.random() * 100 % 4;
randomPattern = Number(randomPattern.toFixed());

// Return a card from a list of choices given its number 
function cardNumberLookup(number, cardChoices){
    for ( let i = 0; i < cardChoices.length; i++ ){
        if (number == cardChoices[i].number)
            return cardChoices[i];
    }
    return null;
}

// Function to match pattern with choices
function matchPatterns(patternNumber, cardChoices = [cards[1], cards[5], cards[9], cards[3]]){
    switch(patternNumber){
        case 0:
            // Check for straight

            // Get card number and sort them
            var sortedCards = [];
            for (let i = 0; i < cardChoices.length; i++){
                sortedCards.push(Number(cardChoices[i].number));
            }
            // Sort in ascending order
            sortedCards = sortedCards.sort(function(a, b){return a-b});

            // Look for consecutive cards
            let consecutiveCards = [[]];
            let index = 0;
            console.log('Sorted Cards:');
            console.log(sortedCards);
            let currentCard = sortedCards[0];
            let nextCard = sortedCards[0];
            for (let i = 0; i < sortedCards.length -1; i++){
                currentCard = sortedCards[i];
                if (sortedCards[i] + 1 == sortedCards[i + 1]){
                    if (consecutiveCards[index].length == 0){
                        consecutiveCards[index].push(sortedCards[i]);
                        consecutiveCards[index].push(sortedCards[i + 1]);
                    }
                    else{
                        consecutiveCards[index].push(sortedCards[i + 1]);
                    }
                    nextCard = sortedCards[i + 1];
                }
                else{
                    consecutiveCards.push([]);
                    index++;
                }
            }

            // Account for ace as high card
            if (nextCard == 13) {
                console.log('next is 13');
                currentCard = 13
                for (let i = 0; i < sortedCards.length; i++) {
                    if (sortedCards[i] == 1) {
                        consecutiveCards.push([]);
                        index++;
                        consecutiveCards[index].push(nextCard);
                        consecutiveCards[index].push(sortedCards[i]);
                        break;
                    }
                }
                
                for (let i = sortedCards.length - 1; i >= 0; i--) {
                    if (sortedCards[i] == currentCard - 1) {
                        consecutiveCards[index].push(sortedCards[i]);
                        currentCard = sortedCards[i];
                    }
                }
            }

            console.log(consecutiveCards);
            // Look for longest consecutive runs
            let maxConsecutive = 0;
            for (let i = 0; i < consecutiveCards.length; i++){
                if (consecutiveCards[i].length > maxConsecutive){
                    maxConsecutive = consecutiveCards[i].length;
                    index = i;
                }
            }
            console.log(consecutiveCards[index]);

            // Get return cards
            returnCards = [];
            for ( let i = 0; i < consecutiveCards[index].length; i++){
                let returnCard = cardNumberLookup(
                    consecutiveCards[index][i], cardChoices);
                returnCards.push(returnCard);
            }
            console.log(returnCards);

            // Return null if no consecutive cards
            if (returnCards.length == 0)
                return null;
            else
                return returnCards;
            break;
        case 1:
            console.log('Pattern number is 1');
            break;
        case 2:
            console.log('Pattern number is 2');
            break;
        case 3:
            console.log('Pattern number is 3');
            break;
        case 4:
            console.log('Pattern number is 4');
            break;
        default:
            console.log('cards.js: Invalid pattern number.');
            console.log(patternNumber)
    }
    
}

returnedCards = matchPatterns(0)
console.log(returnedCards);
