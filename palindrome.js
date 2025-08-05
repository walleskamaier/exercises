

// Resolução do exercício
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    
    for (let i = 0; i < x.length; (i * 10) + (x % 10) )
    

    if (x === i) {
        return true
    } else {
        return false
    }
};

console.log(isPalindrome(121))