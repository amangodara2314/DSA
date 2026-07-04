/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length < 2) return nums
    let left = 0
    let right = 1

    while(right < nums.length){
        if(nums[left] !== 0){
            left++
            right++
            continue
        }
        while(right < nums.length && nums[right] === 0){
            right++
        }
        if(nums.length === right) return nums
        const temp = nums[right]
        nums[right] = nums[left]
        nums[left] = temp
        left++
        right++
    }

    return nums
};