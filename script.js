// Good Luck 💪🏾
function plusHashCount(str) {
    let hashCount = 0;
    let plusCount = 0;

    for (let char of str) {
        if (char === '#') {
            hashCount++;
        } else if (char === '+') {
            plusCount++;
        }
    }

    return [hashCount, plusCount];
}

// Test cases
console.log(plusHashCount("###+"));        // ➞ [3, 1]
console.log(plusHashCount("##+++#"));      // ➞ [3, 3]
console.log(plusHashCount("#+++#+#++#"));  // ➞ [6, 4]
console.log(plusHashCount(""));            // ➞ [0, 0]
