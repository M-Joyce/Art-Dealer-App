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

// Find a card in cardList
function cardInCardList(card, cardList){
    for (let i = 0; i < cardList.length; i++){
        if (card.number  == cardList[i].number,
            card.color == cardList[i].color,   
            card.suit  == cardList[i].suit ) {
            return true;    
        }
    }
    return false;
}

// Function to match pattern with choices
function matchPatterns(patternNumber, cardChoices = [cards[1], cards[5], cards[9], cards[12]]){
    switch(patternNumber){
        case 0:
            {
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

            // Look for longest consecutive runs
            let maxConsecutive = 0;
            for (let i = 0; i < consecutiveCards.length; i++){
                if (consecutiveCards[i].length > maxConsecutive){
                    maxConsecutive = consecutiveCards[i].length;
                    index = i;
                }
            }

            // Get return cards
            let returnCards = [];
            for ( let i = 0; i < consecutiveCards[index].length; i++){
                let returnCard = cardNumberLookup(
                    consecutiveCards[index][i], cardChoices);
                returnCards.push(returnCard);
            }

            // Return null if no consecutive cards
            if (returnCards.length == 0)
                return null;
            else
                return returnCards;
            break;
            }
        case 1:
            {
            // Primes
            console.log(cardChoices);
            let returnCards = [];
            for (let i = 0; i < cardChoices.length; i++) {
                number = cardChoices[i].number;
                if (number == 2 || number == 3 || number == 5 || 
                    number == 7 || number == 11 || number == 13) {
                    returnCards.push(cardChoices[i]);
                }
            }
            if (returnCards.length == 0)
                return null;
            else
                return returnCards;
            console.log('Pattern number is 1');
            break;
            }
        case 2:
            {
            // Evens
            console.log('Pattern number is 2');
            console.log(cardChoices);
            let returnCards = [];
            for (let i = 0; i < cardChoices.length; i++) {
                number = cardChoices[i].number;
                if (number % 2 == 0) {
                    returnCards.push(cardChoices[i]);
                }
            }
            if (returnCards.length == 0)
                return null;
            else
                return returnCards;
            break;
            }
        case 3:
            {
            // Odds
            console.log('Pattern number is 3');
            console.log(cardChoices);
            let returnCards = [];
            for (let i = 0; i < cardChoices.length; i++) {
                let number = cardChoices[i].number;
                if (number % 2 != 0) {
                    returnCards.push(cardChoices[i]);
                }
            }
            if (returnCards.length == 0)
                return null;
            else
                return returnCards;
            break;
            }
        case 4:
            {
            // Four of a kind
            console.log('Pattern number is 4');
            console.log(cardChoices);
            let returnCards = [];
            let sortedCards = [];
            for (let i = 0; i < cardChoices.length; i++){
                sortedCards.push(Number(cardChoices[i].number));
            }
            // Sort in ascending order
            sortedCards = sortedCards.sort(function(a, b){return a-b});
            console.log(sortedCards);

            // If first and last index of sorted cards are the same number then we have four of a kind.
            if (sortedCards[0] == sortedCards[sortedCards.length - 1]) {
                return cardChoices;
            }

            let cardList = []

            // Return identical numbers
            for (let i = 0; i < cardChoices.length; i++){
                currentCard = cardChoices[i];
                for (let j = 0; j < cardChoices.length; j++){
                    if (i != j){
                        if (currentCard.number == cardChoices[j].number) {
                            if (cardList.length == 0) {
                                cardList.push(currentCard);
                                cardList.push(cardChoices[j]);
                                currentCard = cardChoices[j];
                            }
                            else{
                                cardList.push(cardChoices[j]);
                                currentCard = cardChoices[j];
                            }
                        }
                    }
                }
            }
            console.log('matches');
            console.log(cardList);


            // Removing duplicates from cardList
            if (cardList.length > 0) {
                nonDuplicates = [];
                mark = [];
                for (let i = 0; i < cardList.length; i++){
                    mark.push(true);
                }
                for (let i = 0; i < cardList.length; i++){
                    if (mark[i] == true) {
                        for (let j = i + 1; j < cardList.length; j++){
                            if (cardList[j].index == cardList[i].index) {
                                mark[j] = false;
                            }
                        }
                    }
                }       
                for (let i = 0; i < cardList.length; i++){
                    if (mark[i] == true) {
                        nonDuplicates.push(cardList[i]);
                    }
                }
                console.log('Nondups');
                return nonDuplicates;
            }
            else
                return null;
            break;
            }
        case 5:
            {
            // Two Pairs
            console.log('Pattern number 5');
            console.log(cardChoices);
            let returnCards = [];
            let sortedCards = [];
            for (let i = 0; i < cardChoices.length; i++){
                sortedCards.push(Number(cardChoices[i].number));
            }
            // Sort in ascending order
            sortedCards = sortedCards.sort(function(a, b){return a-b});
            console.log(sortedCards);

            if (sortedCards[0] == sortedCards[1] && sortedCards[2] == sortedCards[3]) {
                return cardChoices;
            }

            // Get all two pairs
            for (let i = 0; i < cardChoices.length; i++){
                for (let j = i + 1; j < cardChoices.length; j++){
                    if (cardChoices[i].number == cardChoices[j].number) {
                        if (returnCards.length == 0) {
                            returnCards.push(cardChoices[i]);
                            returnCards.push(cardChoices[j]);
                        }
                    }
                }
            }

            if (returnCards.length == 0)
                return null;
            else
                return returnCards;
            break;
            }
        case 6:
            // High cards
            console.log(cardChoices);
            returnCards = []
            for (let i = 0; i < cardChoices.length; i++ ){
                if (cardChoices[i].number > 9 || cardChoices[i].number == 1){
                    returnCards.push(cardChoices[i])
                }
            }
            if (returnCards.length == 0)
                return null;
            else
                return returnCards;
            break;
        case 7:
            // Palindrome
            console.log(cardChoices);
            returnCards = []
            // Check first and last card
            if (cardChoices[0].number == cardChoices[3].number) {
                returnCards.push(cardChoices[0])
                returnCards.push(cardChoices[3])
            }
            // Check two middle cards
            if (cardChoices[1].number == cardChoices[2].number) {
                returnCards.push(cardChoices[1])
                returnCards.push(cardChoices[2])
            }
            if (returnCards.length == 0)
                return null;
            else
                return returnCards;
            break;
        case 8:
            // Checker
            console.log(cardChoices);
            returnCards = []

            if (returnCards.length == 0)
                return null;
            else
                return returnCards;
            break
        default:
            console.log('cards.js: Invalid pattern number.');
            console.log(patternNumber)
    }
    
}

returnedCards = matchPatterns(7, [cards[0], cards[1], cards[2], cards[3]])
console.log(returnedCards);
