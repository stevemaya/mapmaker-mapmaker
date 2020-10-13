/******************
 * YOUR CODE HERE *
******************/

	
function doubleAll(num){	
	const doubles = [];
	for(let i = 0; i < num.length; i ++){
	doubles.push(num[i] * 2);
	}
	return doubles;
	}
	
	function yelledGreetings(sentence){
	const exclaimed = [];
	for(let i = 0; i < sentence.length; i ++){
	exclaimed.push(sentence[i] + '!');
	}
	return exclaimed;
	}
	
	function absoluteValues(num){
	const absolute = [];
	for(let i = 0; i < num.length; i++){
	const value = Math.abs(num[i]);
	absolute.push(value);
	}
	return absolute;
	}
	
	function upperCaseFirstLetters(firstLetters){
	const upperCase = [];
	for(let i = 0; i < firstLetters.length; i++){
  upperCase.push(firstLetters[i].charAt(0).toUpperCase() +
  firstLetters[i].toLowerCase().slice(1));
	}
	return upperCase;
	}
	
	function changeToInitials(acronym){
	const initials = [];
	for(let i = 0; i < acronym.length; i++){
  initials.push(acronym[i].toUpperCase().charAt(0) +
  acronym[i].substring(acronym[i].indexOf(' ')).charAt(1));
	}
	return initials;
  }
  

/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
