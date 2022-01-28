// Pairwise
// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

// Index	0	1	2	3	4
// Value	7	9	11	13	15
// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

function pairwise(arr, arg) {
    let sum = 0

    arr = arr.map(item => {
        return {
            value: item,
            hasBeenUsed: false
        }
    })

    arr.forEach((item, index) => {
        let subArr = arr.slice(index + 1, arr.length)

        subArr.forEach((subItem, subIndex) => {
            let realIndex = index + subIndex + 1

            if (item.value + subItem.value === arg) {
                
                if (!item.hasBeenUsed && !subItem.hasBeenUsed) {
                    item.hasBeenUsed = true
                    arr[realIndex].hasBeenUsed = true
                    sum += index + realIndex
                }

            }
        })
    })

    return sum
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7)) //should return 11.
// console.log(pairwise([1, 1, 1], 2)) // should return 1.
// console.log(pairwise([0, 0, 0, 0, 1, 1], 1)) // should return 10.