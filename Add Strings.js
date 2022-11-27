var addStrings = function(num1, num2) {
    let res = '',
        dot = 0,
        sum;
    let i = num1.length - 1,
        j = num2.length - 1;
    while (i >= 0 || j >= 0) {
        let a = Number(num1[i--]);
        let b = Number(num2[j--]);
        if (a == undefined || isNaN(a)) {
            a = 0;
        } else if (b == undefined || isNaN(b)) {
            b = 0;
        }
        sum = a + b + dot;
        res = sum % 10 + res;
        dot = sum > 9 ? 1 : 0;
    }
    return (dot ? 1 : "") + res}
