const romanToInt = function(s) {
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
        V:  5,
        I:  1,
    }
    let answer = 0
    for(let i =0; i < s.length; i++){

        if(symbols[s[i]] < symbols[s[i + 1]])
            answer -= symbols[s[i]]

        else
            answer += symbols[s[i]];

    }
    return answer
};
