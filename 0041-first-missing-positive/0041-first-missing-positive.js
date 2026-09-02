/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;
    
    for(let i = 0; i < n; i++){
        if(nums[i] > n || nums[i] < 1){
            nums[i] = n + 1
        }
    }

    for(let i = 0; i < n; i++){
       const value = Math.abs(nums[i]);

        if (value > n) continue;

        const index = value - 1;

        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    for(let i = 0; i < n; i++){
        if(nums[i] > 0){
            return i+1
        }
    }

    return n + 1
};

