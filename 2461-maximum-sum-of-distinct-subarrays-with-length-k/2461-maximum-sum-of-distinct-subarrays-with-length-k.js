/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {

    let maxCount = 0
    let currCount = 0
    const map = new Map()

    for(let i = 0; i < k; i++){
        currCount += nums[i] 
        map.set(nums[i],(map.get(nums[i]) || 0) + 1)
    }

    if(map.size === k){
        maxCount = Math.max(currCount,maxCount)
    }

    for(let i = k; i < nums.length; i++){
        const left = nums[i-k]

        map.set(left,map.get(left) - 1)

        currCount -= left

        if(map.get(left) === 0){
            map.delete(left)
        }

        const right = nums[i]

        map.set(right, (map.get(right) || 0) + 1)

        currCount += right

        if(map.size === k){
            maxCount = Math.max(currCount,maxCount)
        }
    }

    return maxCount
};