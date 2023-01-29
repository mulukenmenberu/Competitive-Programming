/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums = nums.sort((a,b)=>a-b)
    let index =[]
    if(nums.indexOf(target)=== -1){
        return []
    }
    for(let x=0;x<nums.length;x++){
        if(nums[x] == target){
            index.push(x)
        }
    }
    return index
    
};