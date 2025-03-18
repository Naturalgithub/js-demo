/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { 
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        // console.log(nums[i])
        console.log(map.get((target - nums[i])))
        
        if(map.get((target - nums[i])) !== undefined) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i)
            
        }
    }

};

 
console.log(twoSum([2,7,11,15], 9)) // [0,1]


const a = new Array(10)
// a
