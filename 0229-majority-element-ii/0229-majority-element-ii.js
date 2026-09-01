/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const n = nums.length 
    const t = parseInt(nums.length/3,0)
    let left = 0 
    let right = n - 1
    const map = new Map()
    const output = []

    while(left <= right){
        map.set(nums[left],(map.get(nums[left]) || 0) + 1)

        if(map.get(nums[left]) === t+1){
            output.push(nums[left])
        }
        map.set(nums[right],(map.get(nums[right]) || 0) + 1)

        if(left !== right && map.get(nums[right]) === t+1){
            output.push(nums[right])
        }

        left++
        right--
    }

    return output
};