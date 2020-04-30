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
function matchPatterns(patternNumber, cardChoices = [cards[1], cards[5], cards[9], cards[12]], totalSum = 10){
    switch(patternNumber){
        case 0:
            {
                // High cards
                console.log('Pattern: High cards');
                console.log(cardChoices);
                returnCards = [];
                for (let i = 0; i < cardChoices.length; i++ ){
                    if (cardChoices[i].number > 9 || cardChoices[i].number == 1){
                        returnCards.push(cardChoices[i]);
                    }
                }
                if (returnCards.length == 0)
                    return null;
                else
                    return returnCards;
                break;
            }
        case 1:
            {
                // Odds
                console.log('Pattern: Odds');
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
        case 2:
            {
                // Evens
                console.log('Pattern: Even');
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
                // Same suits
                console.log('Pattern: Same Suits');
                console.log(cardChoices);

                let cardList = [[]]
                let index = 0;
                // Return identical suitk
                for (let i = 0; i < cardChoices.length; i++){
                    currentCard = cardChoices[i];
                    for (let j = 0; j < cardChoices.length; j++){
                        if (i != j){
                            if (currentCard.suit == cardChoices[j].suit) {
                                if (cardList[index].length == 0) {
                                    cardList[index].push(currentCard);
                                    cardList[index].push(cardChoices[j]);
                                    currentCard = cardChoices[j];
                                }
                                else{
                                    cardList[index].push(cardChoices[j]);
                                    currentCard = cardChoices[j];
                                }
                            }
                        }
                    }
                    cardList.push([]);
                    index++;
                }
                console.log('matches');
                console.log(cardList);

                if (cardList.length > 0) {
                    let max = 0;
                    let maxIndex = 0;
                    for (let i = 0; i < cardList.length; i++ ){
                        if (cardList[i].length > 0) {
                            max = cardList[i].length;
                            maxIndex = i;
                        }
                    }
                    if (max == 0)
                        return null;
                    else
                        return cardList[maxIndex]
                }
                else
                    return null;
            }
            break;
        case 4:
            {
                // Different suits
                console.log('Pattern: Different Suits');
                console.log(cardChoices);

                // Removing duplicates from cardList
                let nonDuplicates = [];
                let mark = [];
                for (let i = 0; i < cardChoices.length; i++){
                    mark.push(true);
                }
                for (let i = 0; i < cardChoices.length; i++){
                    if (mark[i] == true) {
                        for (let j = i + 1; j < cardChoices.length; j++){
                            if (cardChoices[j].suit == cardChoices[i].suit) {
                                mark[j] = false;
                            }
                        }
                    }
                }       
                for (let i = 0; i < cardChoices.length; i++){
                    if (mark[i] == true) {
                        nonDuplicates.push(cardChoices[i]);
                    }
                }
                if (nonDuplicates.length > 0)
                    return nonDuplicates;
                else
                    return null;
                    
            }
            break;
        case 5:
            {
                // Check for straight
                console.log('Pattern: Straight');
                console.log(cardChoices);
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
        case 6:
            {
                // Four of a kind
                console.log('Pattern: Four of a kind');
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

                let cardList = [[]]
                let index = 0;
                // Return identical numbers
                for (let i = 0; i < cardChoices.length; i++){
                    currentCard = cardChoices[i];
                    for (let j = 0; j < cardChoices.length; j++){
                        if (i != j){
                            if (currentCard.number == cardChoices[j].number) {
                                if (cardList[index].length == 0) {
                                    cardList[index].push(currentCard);
                                    cardList[index].push(cardChoices[j]);
                                    currentCard = cardChoices[j];
                                }
                                else{
                                    cardList[index].push(cardChoices[j]);
                                    currentCard = cardChoices[j];
                                }
                            }
                        }
                    }
                    cardList.push([]);
                    index++;
                }
                console.log('matches');
                console.log(cardList);

                if (cardList.length > 0) {
                    let max = 0;
                    let maxIndex = 0;
                    for (let i = 0; i < cardList.length; i++ ){
                        if (cardList[i].length > 0) {
                            max = cardList[i].length;
                            maxIndex = i;
                        }
                    }
                    if (max == 0)
                        return null;
                    else
                        return cardList[maxIndex]
                }
                else
                    return null;
                break;
            }
        case 7:
            {
                // Two Pairs
                console.log('Pattern: Two Pairs');
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
        case 8:
            {
                // Primes
                console.log('Pattern: Primes');
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
        case 9:
            {
                // Palindrome
                console.log('Pattern: Palindrome');
                console.log(cardChoices);
                returnCards = [];
                // Check first and last card
                if (cardChoices[0].number == cardChoices[3].number) {
                    returnCards.push(cardChoices[0]);
                    returnCards.push(cardChoices[3]);
                }
                // Check two middle cards
                if (cardChoices[1].number == cardChoices[2].number) {
                    returnCards.push(cardChoices[1]);
                    returnCards.push(cardChoices[2]);
                }
                if (returnCards.length == 0)
                    return null;
                else
                    return returnCards;
                break;
            }
        case 10:
            {
                // Checker
                console.log('Pattern: Checker');
                console.log(cardChoices);
                let returnCards = [];

                let allReturnPossible = [];
                let index = 0;
                for (let i = 0; i < cardChoices.length; i++ ){
                    let compareIndex = (i + 2) % cardChoices.length;
                    if (cardChoices[i].color == cardChoices[compareIndex].color) {
                        let ajacentIndex = (i + 1) % cardChoices.length;
                        let ajacentCompareIndex = (ajacentIndex + 2) % cardChoices.length;
                        allReturnPossible.push([]);
                        if (cardChoices[ajacentIndex].color == cardChoices[ajacentCompareIndex].color 
                            && cardChoices[i].color != cardChoices[ajacentIndex].color) {
                            allReturnPossible[index].push(cardChoices[i]);
                            allReturnPossible[index].push(cardChoices[compareIndex]);
                            allReturnPossible[index].push(cardChoices[ajacentIndex]);
                            allReturnPossible[index].push(cardChoices[ajacentCompareIndex]);
                            break;
                        }
                        allReturnPossible[index].push(cardChoices[i]);
                        allReturnPossible[index].push(cardChoices[compareIndex]);
                        index++;
                    }

                }

                let mostCardsIndex = 0;
                let mostCards = 0;
                if (allReturnPossible != 0) {
                    for (let i = 0; i < allReturnPossible.length; i++ ){
                        if (allReturnPossible[i].length > mostCards) {
                            mostCardsIndex = i;
                            mostCards = allReturnPossible[i].length;
                        }
                    }
                    for (let i = 0; i < allReturnPossible[mostCardsIndex].length; i++ ){
                        returnCards.push(allReturnPossible[mostCardsIndex][i]);
                    }
                }

                if (returnCards.length == 0)
                    return null;
                else
                    return returnCards;
                break
            }
        case 11:
            {
                // Sum to a number (given in argument)
                console.log('Subset sum');
                // Filter out facecards
                cardChoicesFilter = [];
                for (let i = 0; i < cardChoices.length; i++ ){
                    if (cardChoices[i].number <= 10) {
                        cardChoicesFilter.push(cardChoices[i]);
                    }
                }
                cardChoices = cardChoicesFilter;
                
                console.log(cardChoices);
                let returnCards = [];
                let possibleReturns = [];
                console.log('random number');
                console.log(totalSum);
                
                // Subset sum problem
                let subsetA = new Array(cardChoices.length + 1);
                let subsetB = new Array(cardChoices.length + 1);

                for (let i = 0; i <= cardChoices.length; i++ )
                    subsetA[i] = new Array(totalSum + 1);
                for (let i = 0; i <= cardChoices.length; i++ )
                    subsetB[i] = new Array(totalSum + 1);

                // Set initial values
                for (let i = 0; i <= cardChoices.length; i++ )
                    subsetA[i][0] = true;
                for (let i = 1; i <= totalSum; i++ )
                    subsetA[0][i] = false;

                // Change value based on the subset values
                for (let i = 1; i <= cardChoices.length; i++ ){
                    for (let j = 1; j <= totalSum; j++ ){
                        let sumAble1 = subsetA[i-1][j];
                        let sumAble2 = false;
                        if ((j - cardChoices[i-1].number) >= 0)
                            sumAble2 = subsetA[i-1][j-cardChoices[i-1].number];
                        if (sumAble2) 
                            subsetB[i][j] = 2;
                        else if (sumAble1)
                            subsetB[i][j] = 1;
                        else
                            subsetB[i][j] = 0;
                        subsetA[i][j] = sumAble1 || sumAble2;
                    }   
                }

                // Get values that sum to totalSum
                if (subsetA[cardChoices.length][totalSum]){
                    for (let i = 0; i < cardChoices.length; i++ ){
                        if (subsetB[cardChoices.length - i][totalSum] == 2) {
                            returnCards.push(cardChoices[cardChoices.length - 1 - i]);
                            totalSum -= cardChoices[cardChoices.length - 1 - i].number;
                        }
                    }
                }
                
                if (returnCards.length == 0)
                    return null;
                else
                    return returnCards;
                break;
            }
        default:
            {
                console.log('cards.js: Invalid pattern number.');
                console.log(patternNumber)
            }      
    }
}



