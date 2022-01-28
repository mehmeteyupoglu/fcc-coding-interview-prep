// No Repeats Please
// Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
// Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

function permAlone(str) {

    function getPermutation(str) {
        if (str.length === 1) {
            return [str]
        }

        let firstLetter = str.slice(0, 1)
        let permutations = getPermutation(str.slice(1))
        let permutationArr = []

        for (let i = 0; i < permutations.length; i++) {
            let individualWord = permutations[i]

            for (let j = 0; j < individualWord.length + 1; j++) {

                let newWord = ''

                newWord += individualWord.slice(0, j) + firstLetter + individualWord.slice(j, individualWord.length)
                permutationArr.push(newWord)
            }

        }

        return permutationArr
    }

    let _permutationArr = getPermutation(str).filter(item => {

        let subItem = item.split("")

        for (let i = 0; i < subItem.length; i++) {
            if (subItem[i] === subItem[i + 1]) {
                return
            }
        }

        return item

    })
    
    return _permutationArr.length
}

console.log(permAlone('zzzzzzzz'))