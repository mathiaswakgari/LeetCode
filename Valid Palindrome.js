const isPalindromeTwo = function (s) {
    const regex = /[A-Za-z0-9]/
    let formattedS = []
    for(let letter of s)
        if(regex.test(letter)) formattedS.push(letter.toLowerCase())
    formattedS =  formattedS.join("")
    let reverseS = ""
    for(let i = formattedS.length - 1; i >=0; i-- )
        reverseS += formattedS[i]
    return reverseS === formattedS
}
