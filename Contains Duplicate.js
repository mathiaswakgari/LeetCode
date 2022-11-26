onst containsDuplicate = function (nums) {
    for(let num of nums)
        if (nums.indexOf(num) !== nums.lastIndexOf(num))
            return true
    return false
}
