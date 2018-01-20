﻿// Complete each of the questions below. You can see the expected result for each of the questions by 

function Question1(inputArray) {
	// DUPLICATE AN ARRAY
	// You should write a function that repeats an array twice and returns it.
	// The original array should not be modified.
	return [...inputArray, ...inputArray];
		// return inputArray.concat(inputArray.slice(0));	

}

function Question2(inputArray) {
	// REVERSE AN ARRAY
	// You should write a function that reverses an array and returns it.
	// The original array should not be modified.

	return inputArray.slice().reverse();
}

function Question3(inputArray, itemToFind) {
	// COUNT THE NUMBER OF ELEMENTS IN AN ARRAY
	// You should write a function that returns a count of the number of 'itemToFind' that exist in 'inputArray'
	
	return inputArray.filter(i => i == itemToFind).length;
}

function Question4(deckOfCardsArray) {
	// SHUFFLE A DECK OF CARDS
	// You should write a function that shuffles the items in 'deckOfCardsArray'
	// The original array should be modified

	// No return value needed
	// const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
	function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
	}
	shuffleArray(deckOfCardsArray);

}

function Question5(inputString) {
	// REVERSE THE WORDS IN A STRING
	// You should write a function that reverses the order of the words in a string. The letters in
	// the words should be unchanged.
	// e.g. "the cat sat on the mat" should become "mat the on sat cat the"
	
	return inputString.split(" ").reverse().join(" ");
}