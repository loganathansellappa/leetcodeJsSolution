// 243. Shortest Word Distance
// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

// For example, Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = “coding”, word2 = “practice”, return 3. Given word1 = "makes", word2 = "coding", return 1.

const shortestDistance = (words, word1, word2)  => {
	indexOne =  words.indexOf(word1)
	indexTwo =  words.indexOf(word2)
	return Math.max(indexOne, indexTwo) - Math.min(indexOne, indexTwo) 	
}
shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice")
