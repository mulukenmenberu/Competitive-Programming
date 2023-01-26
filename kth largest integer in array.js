/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
    let x = [...nums].sort((a,b)=>parseInt(a) - parseInt(b))

    return x[x.length-k]
};