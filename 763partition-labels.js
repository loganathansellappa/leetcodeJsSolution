/**
https://www.youtube.com/watch?v=m3IDZ3_L2o8
763. Partition Labels
Medium

7769

293

Add to List

Share
You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

 

Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
Example 2:

Input: s = "eccbbbbdec"
Output: [10]
 

Constraints:

1 <= s.length <= 500
s consists of lowercase English letters.
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    
    let currentPartition = s.lastIndexOf(s[0])
    let startPos = 0
    let result = []
    
    for(i=1; i < s.length; i++) {
        //
        // Extend the partition when the index of the character exceeds the current partition limit
        //
        if(i < currentPartition && s.lastIndexOf(s[i]) > currentPartition) {
            currentPartition = s.lastIndexOf(s[i])
        }
     
        //
        // This happens only when there are no charaacters of the previous partition
        //
        if(i > currentPartition) { 
            result.push(currentPartition+1 - startPos)
            currentPartition = s.lastIndexOf(s[i])
            startPos = i
        }
        
        //
        // When currntPartition index is last postion 
        //
        if(i === s.length -1) {
            result.push(currentPartition+1 - startPos)
        }
        
    }
    
    return result
    
};