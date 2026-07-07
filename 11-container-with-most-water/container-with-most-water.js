/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
    let left = 0
    let right = heights.length - 1
    let max = 0

    while(left < right){
        const height = Math.min(heights[left],heights[right])
        const distance = right - left
        const areaOfWater = height * distance
        max = Math.max(areaOfWater, max)

        if(heights[left] > heights[right]){
            right--
        }else{
            left++
        }
    }
    return max
};