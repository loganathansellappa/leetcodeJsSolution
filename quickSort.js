
//Do note that the O(log n) speed is a best-case/average time, in worst case scenarios it can be O(n2) depending on the implementation.

function quickSort(array) {
    if(array.length < 2) { return array}
    let pivot = array.shift()
    let left = []
    let right = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return([...quickSort(left), pivot, ...quickSort(right)])
}

quickSort([1,0,-1,3])
