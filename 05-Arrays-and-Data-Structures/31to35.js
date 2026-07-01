// Arrays and Data Structures
// 31. Two Sum II
// Given a sorted array of numbers and a target sum, find two numbers
// that add up to the target. Return their indices.
// Example: Input: [2, 7, 11, 15], target = 9 → Output: [1, 2]

function twoSum(num , target){

    let left = 0 ;
    let right = num.length - 1;

    while(left < right){

        let sum = num[left] + num[right];

        if(sum === target){
            return [left + 1 , right + 1];
        }

        if(sum < target){
            left++;
        } else {
            right--;
        }
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1, 2, 3, 4, 5], 8));
console.log(twoSum([-3, -1, 0, 2, 4], 1));

//brute force

function twoSumBruteForce(num , target){

    for(let i = 0 ; i < num.length ; i++){
        for(let j = i + 1 ; j < num.length ; j++){
            if(num[i]+num[j] === target){
                return [i + 1 , j + 1];
            }
        }
    }
    return [];
}
console.log(twoSumBruteForce([2, 7, 11, 15], 9));
console.log(twoSumBruteForce([1, 2, 3, 4, 5], 8));
console.log(twoSumBruteForce([-3, -1, 0, 2, 4], 1));

// 32. Merge Sorted Arrays
// Merge two sorted arrays into a single sorted array.
// Example: Input: [1, 3, 5], [2, 4, 6] → Output: [1, 2, 3, 4, 5, 6]

//built-in function

function mergeSortedArrays(arr1, arr2){
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));

//without built-in function

function mergeSortedArraysWithoutBuiltIn(arr1, arr2){
    let i = 0 ;
    let j = 0 ;
    let result = [];

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;
}

console.log(mergeSortedArraysWithoutBuiltIn([1, 3, 5], [2, 4, 6]));
console.log(mergeSortedArraysWithoutBuiltIn([1, 2, 3], [4, 5, 6]));

// 33. Maximum Subarray
// Given an array of numbers, find the contiguous subarray with the
// largest sum.
// Example: Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4] → Output: 6
// (subarray: [4, -1, 2, 1] )

function maxSubArray(nums) {
let maxsum = nums[0];
let currentsum = nums[0];

for(let i = 1 ; i < nums.length ; i++){
    currentsum = Math.max(nums[i], currentsum + nums[i]);
    maxsum = Math.max(maxsum, currentsum);
}
return maxsum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-1,-2,-3,-4,-5]));

//brute force

function maxSubArrayBruteForce(nums){

    let maxSum = -Infinity;

    for(let i = 0 ; i < nums.length ; i++){
        let sum = 0 ;
        for ( let j = i ; j < nums.length ; j++){
            sum += nums[j];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}
console.log(maxSubArrayBruteForce([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArrayBruteForce([-1,-2,-3,-4,-5]));


// 34. Remove Element
// Given an array and a value, remove all instances of that value and
// return the new length.
// Example: Input: [3, 2, 2, 3], val = 3 → Output: 2 (array becomes
// [2, 2] )

function removeElement(nums,val){

    let i = 0 ; 
    for(let j = 0 ; j < nums.length ; j++){

        if(nums[j] !== val){
            nums[i] = nums[j];
            i++;
        }
    }
    
    nums.length = i;
   
    return i;
}
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));

// 35. Search in Rotated Sorted Array
// Given a sorted array rotated at some point, find if a target number
// exists.
// Example: Input: [4, 5, 6, 7, 0, 1, 2], target = 0 → Output: 4

//brute force

function searchInRotatedSortedArray(nums, target){

    for(let i = 0 ; i < nums.length ; i++) {
        if(nums[i] === target){
            return i ;
        }
    }
    return -1;
}
console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0));
console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3));  

//binary search

function searchInRotatedSortedArrayBinarySearch(nums, target){

    let left = 0 ;
    let right = nums.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right)/2);

        if(nums[mid] === target){
            return mid;
        }

        if(nums[left] <= nums[mid]){

            if(target >= nums[left] && target < nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }   
        } else{
            if(target > nums[mid] && target <= nums[right]){
                left = mid + 1;
            } else{
                right = mid - 1;
            }
        }
    }
    return -1;
}

console.log(searchInRotatedSortedArrayBinarySearch([4, 5, 6, 7, 0, 1, 2], 0));
console.log(searchInRotatedSortedArrayBinarySearch([4, 5, 6, 7, 0, 1, 2], 3));
console.log(searchInRotatedSortedArrayBinarySearch([1], 0));