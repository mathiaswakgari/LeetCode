var longestCommonPrefix = function(strs) {
   let temp = 0
    if(strs.length <= 1) return strs[temp]
    while(strs[0][temp] && strs.every(w => w[temp] === strs[0][temp]))
        temp += 1
    return strs[0].substring(0, temp)
};
