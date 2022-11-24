const intToRoman = function(num){
    const symbols = {
        M:  1000,
        CM: 900,
        D:  500,
        CD: 400,
        C:  100,
        XC: 90,
        L:  50,
        XL: 40,
        X:  10,
        IX: 9,
        V:  5,
        IV: 4,
        I:  1,
    }
    let answer = ""
    for(let i in symbols){
        answer += i.repeat(Math.floor(num/symbols[i]))
        num = num % symbols[i]
    }
    return answer
}
