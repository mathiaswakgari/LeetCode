const singleNumber = function (nums) {
    let num = null
    for(let i = 0; i < nums.length; i++) {
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i]))
            num = nums[i]
    }
    return num
}
