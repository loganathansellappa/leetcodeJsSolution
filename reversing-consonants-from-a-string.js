// We are required to write a JavaScript function that takes in a string of lowercase english alphabets as the only argument.

// The function should construct a new string in which the order of consonants is reversed and the vowels hold their relative positions.

// For example, if the input to the function is −

const reverseConsonants = (s) => {
	const consonants = 'bcdfghjklnpqrstvwxyzBCDFGHJKLNPQRSTVWXYZ';
	let sArray = s.split('');
	let left = 0;
	let right = sArray.length -1;

	while(left < right) {
		while(left < right && !consonants.includes(sArray[left])) {
			left++;

		}
		while(left < right && !consonants.includes(sArray[right])) {
			right --;
		}
		[sArray[left], sArray[right]] = [sArray[right], sArray[left]];
		left++;
		right --;
	}

	return sArray.join('');
}

reverseConsonants('somestring')