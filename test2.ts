function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}


const nums = [2, 3, 5, 6, 7, 8, 9, 10];
const target = 10;
console.log(searchInsert(nums, target));

// note that mid is the middle index of the array
// left is the starting index of the array
// right is the end index of the array
// we use a while loop to search for the target in the array
// if the target is greater than the middle value, we search the right half
// if the target is less than the mid value, we search the left half
// if the target is equal to the mid value, we return the mid index
// if the target is not found, we return the left index which is the insertion position