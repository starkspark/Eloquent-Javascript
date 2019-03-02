//Q1
function min(a,b){
	return Math.min(a,b);
}

//Q2
function isEven(number){
	if (number % 2 === 0) {
		return true;
    }
	else{
		return false;
    }
}

//Q3 Part 1
function hey(word){
	let found = 0;
	for (let count = 0; count < word.length; count++){
		if (word[count] == "B"){
			found += 1;
        }
    }
	return found;
}

console.log(countBs("BBC"));
// → 2

//Q4 Part 2
function countChar(word, letter){
	let found = 0;
	for (let count = 0; count < word.length; count++){
		if (word[count] == letter){
			found += 1;
        }
    }
	return found;
}

console.log(countChar("kakkerlak", "k"));
// → 4