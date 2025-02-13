var isSorted = function(nums) {
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            return false; 
        }
    }
    return true; 
};

console.log(isSorted([1, 2, 3, 4])); // true

console.log(isSorted([1, 3, 2, 4])); // false

