var cards = ["queen", "queen", "king", "king"];
var cardOne = cards[0];
var cardTwo = cards[2];
var cardThree = cards[1];
var cardFour = cards[3];
var cardsInPlay = [];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardThree);
console.log("User flipped queen")
console.log("User flipped king")
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1])
{ alert("You found a match!")}
else {
	alert("Sorry, try again");
} }