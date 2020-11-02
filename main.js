/******************
 * YOUR CODE HERE *
******************/

	
const doubleAll = function(nums){	
const doubles = nums.map(function(num) {
	return num * 2;
});
	return doubles;
};
const doubleOdd = function(numbers){	
const doublesOdd = numbers.map(function(number) {
	return number % 2 === 1 || number % 2 === -1 ? number * 2: number;
})
	return doublesOdd;
}

const yelledGreetings = function(sentences) {
	yelled = sentences.map(function(sentence) {
		return sentence + '!';
	});
	return yelled;
};

const absoluteValues = function(nums) {
	absolute = nums.map(function(num) {
		return Math.abs(num);
	});
	return absolute;
};

const upperCaseFirstLetters = function(strs) {
const result = strs.map(function(str) {
	let splitStr = str.toLowerCase().split(' ');
	for (let i = 0; i < splitStr.length; i++) {
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}
	return splitStr.join(' ');
})
return result;
};

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
