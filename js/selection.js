/*
 *  Author: Khanh Vong
 *  Project: ArtDealerGame/GameUI
 *  Description: UI for ArtDealerApp game play. Process card selections and submissions.
 */

var count = 0;
var currentRound = 0;
var totalRounds;

// Shuffling around elements
function shuffleCards(){
    let randomIndex;
    let allCards = document.getElementsByClassName("cards");

    // Swap cards with random card for all cards
    for (let i = 0; i < allCards.length; i++ ){
        randomIndex = Math.random() * (allCards.length - 1);
        randomIndex = randomIndex.toFixed();

        let randomSrc = allCards[randomIndex].src;
        let randomAlt = allCards[randomIndex].alt;
        let randomId = allCards[randomIndex].id;
        let randomOnclick = allCards[randomIndex].getAttribute('onclick');
        let randomStyle = allCards[randomIndex].style.border;

        let currentSrc = allCards[i].src;
        let currentAlt = allCards[i].alt;
        let currentId = allCards[i].id;
        let currentOnclick = allCards[i].getAttribute('onclick');
        let currentStyle = allCards[i].style.border;

        allCards[randomIndex].src = currentSrc;
        allCards[randomIndex].alt = currentAlt;
        allCards[randomIndex].id = currentId;
        allCards[randomIndex].setAttribute("onclick", currentOnclick)
        allCards[randomIndex].style.border = currentStyle;

        allCards[i].src = randomSrc;
        allCards[i].alt = randomAlt;
        allCards[i].id = randomId;
        allCards[i].setAttribute("onclick", randomOnclick);
        allCards[i].style.border = randomStyle;
    }
}

// Get augument passed from href
function getArgument(argName) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(argName);
}

// Perform when a card at the seller's table is clicked
function makeSelection(cardId) {
    // Get card that was clicked on
    let cardChoice = document.getElementById(cardId);

    // Get all choices given to dealer so far
    let selection0 = document.getElementById("choice0");
    let selection1 = document.getElementById("choice1");
    let selection2 = document.getElementById("choice2");
    let selection3 = document.getElementById("choice3");
    let allSelections = [selection0, selection1, selection2, selection3];

    // Check selected cards to see if card that's just been clicked has been selected
    let beenSelected = false;
    for (let i = 0; i < allSelections.length; i++ ){
        if (allSelections[i].alt == cardChoice.alt) {
            beenSelected = true;
        }
    }

    // Determine to add or remove card
    if (cardChoice.style.border == "0px none" && beenSelected == false) {
        // For adding a new card
        
        // Draw box around selected cards
        cardChoice.style.border = "2px solid red";

        // Look for openings on the buyer's table
        let selectedCardChoice = null;
        
        // Loop backward so that cards are filled left to right
        for (let i = 0; i < allSelections.length; i++ ){
            if (allSelections[i].alt == "choice") {
                selectedCardChoice = allSelections[i];
                count = (i + 1) % 4
                break;
            }
        }

        // If no openings on buyer's table
        if (selectedCardChoice != null){
            // Fill empty slot with opening card
            let selectedCardId = selectedCardChoice.alt;

            selectedCardChoice.alt = cardId;
            selectedCardChoice.src = cardChoice.src;
        }
        else{ // Remove a card on the buyer's table
            
            // Erase box around removed card on the seller's table
            document.getElementById(allSelections[count].alt).style.border = "0px none";

            // Add new card
            allSelections[count].alt = cardId;
            allSelections[count].src = cardChoice.src;
            allSelections[count].style.border = "0px none";

            // Move to next index for next removal should that be the case again
            count++;
            count = count % 4;
        }

    }
    else{ // Take the card back if card is already on the seller's table
        
        // Erase box on seller's table
        cardChoice.style.border = "0px none";

        // Update buyer's table
        for (let i = 0; i < allSelections.length; i++ ){
            // Remove the card and open up the slot
            if (allSelections[i].alt == cardId) {
                allSelections[i].alt = "choice";
                allSelections[i].src = "pictures/cards/blank.png";
                allSelections[i].style.border = "0px none";
                break;
            }
        }
    }
}

// Take away card from buyer's table
function clearCard(slotId) {
    let slot = document.getElementById(slotId);

    // Clearing card on seller's table
    if (slot.alt != "choice") {
        let cardId = slot.alt;
        document.getElementById(cardId).style.border = "0px none";
    }

    // Clearing slot
    slot.alt = "choice";
    slot.src = "pictures/cards/blank.png";
    slot.style.border = "0px none";
}

// Function to reset the seller and buyer's table
function clearSelections() {
    // Grab all elements on buyers's table
    let selection0 = document.getElementById("choice0");
    let selection1 = document.getElementById("choice1");
    let selection2 = document.getElementById("choice2");
    let selection3 = document.getElementById("choice3");
    let allSelections = [selection0, selection1, selection2, selection3];

    // Resetting count index
    count = 0;

    // Remove all cards from buyers's table
    for (let i = 0; i < allSelections.length; i++ ){
        // Only remove when there's a card on the buyers's table
        if (allSelections[i].alt != "choice") {
            // Erase box from seller's table
            document.getElementById(allSelections[i].alt).style.border = "0px none";

            // Set slots on buyer's to indicate empty slots
            allSelections[i].alt = "choice";
            allSelections[i].src = "pictures/cards/blank.png";
            allSelections[i].style.border = "0px none";
        }
    }
}


// Set global sum for 'sum of number' pattern
let totalSum = 0;
// Change pattern selections based on game
let randomPattern = 0;
// Start a new round by changing buying pattern
function startNewRound() {
    // Select from pattern with respect to game level
    if (document.title == "K-2 Game") {
        randomPattern = Math.random() * 100 % 3;
        randomPattern = Number(randomPattern.toFixed());
    }else if (document.title == "3-5 Game") {
        randomPattern = Math.random() * 100 % 7 + 4;
        randomPattern = Number(randomPattern.toFixed());
    }
    else if (document.title == "6-8 Game") {
        randomPattern = Math.random() * 100 % 8 + 7;
        randomPattern = Number(randomPattern.toFixed());
        totalSum = Math.floor((Math.random() * 20) + 10 );
    }
    else{
        console.log(document.title);
    }
    console.log(randomPattern);
    let message = document.getElementById("message");
    message.innerHTML = "";
}

// Function for submission of cards
function submitSelections() {
    // Get all choices given to dealer so far
    let selection0 = document.getElementById("choice0");
    let selection1 = document.getElementById("choice1");
    let selection2 = document.getElementById("choice2");
    let selection3 = document.getElementById("choice3");
    let allSelections = [selection0, selection1, selection2, selection3];

    // Validate that seller has offered up four cards
    let hasError = false;
    for (let i = 0; i < allSelections.length; i++ ){
        // If there's an empty slot 
        if (allSelections[i].alt == "choice"){
            // Print error message
            alert("Please select four cards to submit.");
            hasError = true;
            break;
        }
    }   

    // If no errors detected proceed with submission
    let cardIndexes = [];
    if (hasError == false) {
        for (let i = 0; i < allSelections.length; i++ ){
            // Get card index for lookup by extracting
            let cardIndex = allSelections[i].alt.replace("card", "");
            cardIndex = Number(cardIndex);
            cardIndexes.push(cardIndex);
        }

        // Check Pattern
        let returnCards;
        if (document.title == "K-2 Game") {
            returnedCards = matchPatterns(randomPattern, [cards[0][cardIndexes[0]], cards[0][cardIndexes[1]], cards[0][cardIndexes[2]], cards[0][cardIndexes[3]]], totalSum);
        }
        else{
            returnedCards = matchPatterns(randomPattern, [cards[1][cardIndexes[0]], cards[1][cardIndexes[1]], cards[1][cardIndexes[2]], cards[1][cardIndexes[3]]], totalSum);
        }
        
        console.log(returnedCards);

        if (returnedCards != null) {
            // Start new round if all four cards matches our pattern
            if (returnedCards.length == 4) {
                // Reset UI and increment round
                clearSelections();
                currentRound++;

                document.getElementById("roundCounter").innerHTML = currentRound + "/" + totalRounds

                // Check if all rounds are finished
                if (currentRound < totalRounds) {
                    alert("Buyer has brought all your cards!");
                    console.log("Starting new round");
                    startNewRound();
                }
                // One game is finished, move on to end game screen
                else{
                    // Print verbally correct messages
                    if (currentRound == 1) 
                        alert("Congratulations! You've completed all " + currentRound + " round!");
                    else
                        alert("Congratulations! You've completed all " + currentRound + " rounds!");
                    location.replace("./GameOverMenu.html");
                }
            }
            // Highlight cards brought by buyer
            else if (returnedCards.length > 0) {
                for (let i = 0; i < allSelections.length; i++ ){
                    allSelections[i].style.border = "0px none";
                }
                for (let i = 0; i < returnedCards.length; i++ ){
                    let card = returnedCards[i];
                    for (let j = 0; j < allSelections.length; j++ ){
                        let cardIndex = allSelections[j].alt.replace("card", "");
                        cardIndex = Number(cardIndex);
                        if (card.index == cardIndex) {
                            allSelections[j].style.border = "2px solid yellow";
                            break;
                        }
                    }
                }
                let message = document.getElementById("message");
                if (returnedCards.length == 1)
                    message.innerHTML = "Buyer brought " + returnedCards.length + " card.";
                else
                    message.innerHTML = "Buyer brought " + returnedCards.length + " cards.";
            }
        }
        else{
            let message = document.getElementById("message");
            message.innerHTML = "No cards were brought by the buyer. Try again.";
            for (let i = 0; i < allSelections.length; i++ ){
                allSelections[i].style.border = "0px none";
            }
        }
    }
}

shuffleCards();

// On page load start the round
startNewRound();

// Set round number of rounds to play
totalRounds = getArgument('rounds');
console.log("Total rounds are " + totalRounds);
