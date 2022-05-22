
//
//https://leetcode.com/problems/largest-number/
const comparator = (a, b) => a+b  > b+a ? -1 : 1

const largestNumber = (array) => {
	if(array.length === 1 ||  [...new Set(array)].length === 1 & array[0] === 0) {
      return array[0].toString()
	} else if  ([...new Set(array)].length === 1) {
		return array.join('')
	} else {
		return array.map((a) => a.toString()).sort(comparator).join('')
	}
}

largestNumber([3,30,34,5,9])
