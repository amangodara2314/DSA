/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length 
    k = k % n

    let left = n - k
    let right = n - 1

    while(left < right){
        const temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        left++
        right--
    }

    left = 0
    right = n - k - 1

    while(left < right){
        const temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        left++
        right--
    }

    left = 0 
    right = n - 1

    while(left < right){
        const temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        left++
        right--
    }

    return nums
};