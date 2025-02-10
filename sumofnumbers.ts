function sumFor(nums: number[]): number {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

console.log(sumFor([1, 2, 3, 4]));

function sumWhile(nums: number[]): number {
  let sum = 0;
  let count = 0;
  while (count < nums.length) {
    sum += nums[count];
    count++;
  }
  return sum;
}

console.log(sumWhile([1, 2, 3, 4]));

function sumRecursion(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1));
}

console.log(sumRecursion([1, 2, 3, 4]));

function sumTheFunctionalWay(nums: number[]): number {
  const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}

console.log(sumTheFunctionalWay([1, 2, 3, 4]));
