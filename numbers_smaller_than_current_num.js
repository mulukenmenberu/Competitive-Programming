/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
 let x = [...nums].sort((a,b)=>a-b)
 return nums.map((a)=>x.indexOf(a))
};