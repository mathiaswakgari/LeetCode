const plusOne = function (digits) {
    let answer = []
    let formatted = digits.join("")
    formatted = BigInt(formatted) + BigInt(1)
    formatted = formatted.toString().split("");
    for(let num of formatted){
        answer.push(Number(num))
    }
    return answer
}
