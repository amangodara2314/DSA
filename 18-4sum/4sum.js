/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let i = 0 
    
    nums.sort((a,b)=>a-b)
    const output = []
    for( let i = 0; i < nums.length - 3; i++){
        if(i > 0 && nums[i] == nums[i-1]) continue
        for(let j = nums.length-1; j > i + 2; j--){
            if(j < nums.length - 1 && nums[j] == nums[j+1]) continue
            let l = i + 1
            let r = j - 1
            while(l<r){
                const sum = nums[i] + nums[j] + nums[l] + nums[r]
                if(sum > target){
                    r--
                }else if(sum<target){
                    l++
                }else{
                    output.push([nums[i] , nums[j] , nums[l] , nums[r]])
                    l++
                    r--
                    while(l<r && nums[l] === nums[l-1]) l++
                    while(l<r && nums[r] === nums[r+1]) r--
                }
            }
        }   
    }
    return output

};