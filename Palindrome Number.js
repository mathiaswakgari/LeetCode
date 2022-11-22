var isPalindrome = function(x) {
    const numStr =x.toString()
    let reverseNumber = []
    for(let letter of numStr)
        reverseNumber.unshift(letter)
    return x === parseInt(reverseNumber.join(""))

};

isPalindrome(121)
