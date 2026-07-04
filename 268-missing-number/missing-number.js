/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let totalSum = 0
    let numSum = 0

    for(let i = 1; i <= nums.length; i++){
        numSum += nums[i - 1]
        totalSum += i
    }
    
    return totalSum - numSum
};