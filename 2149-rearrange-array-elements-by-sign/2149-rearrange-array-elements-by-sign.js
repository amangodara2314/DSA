/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const output = Array.from({length:nums.length})
    let e = 0
    let o = 1

    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 0){
            output[o] = nums[i]
            o += 2
        }else{
            output[e] = nums[i]
            e += 2
        }
    }
    return output
};