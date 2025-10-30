var findDuplicates = function(nums) {
    let b = new Map();
    let result = [];

    for (let i = 0; i < nums.length; i++){
        if (b.get(nums[i])) {
            b.set(nums[i], b.get(nums[i]) + 1);
        } else {
            b.set(nums[i], 1);
        }
    }
    for (let [nums, freq] of b) {
        if (freq > 1) {
            result.push(nums);
        }
    }
    return result;
};