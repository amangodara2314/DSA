/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if(nums.length < 2) return nums
    let low = 0
    let mid = 0
    let high = nums.length - 1
    while(mid <= high){
        if(nums[mid] === 0){
            const temp = nums[low]
            nums[low] = nums[mid]
            nums[mid] = temp
            low++
            mid++
        }else if(nums[mid] === 1){
            mid++
        }else {
             const temp = nums[high]
            nums[high] = nums[mid]
            nums[mid] = temp
            high--
        }
    }
};