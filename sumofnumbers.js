function sumFor(nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}
console.log(sumFor([1, 2, 3, 4]));
function sumWhile(nums) {
    var sum = 0;
    var count = 0;
    while (count < nums.length) {
        sum += nums[count];
        count++;
    }
    return sum;
}
console.log(sumWhile([1, 2, 3, 4]));
function sumRecursion(nums) {
    if (nums.length === 0) {
        return 0;
    }
    return nums[0] + sumRecursion(nums.slice(1));
}
console.log(sumRecursion([1, 2, 3, 4]));
function sumTheFunctionalWay(nums) {
    var sum = nums.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
    return sum;
}
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
