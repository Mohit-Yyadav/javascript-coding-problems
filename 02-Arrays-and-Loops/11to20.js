// Arrays and Loops
// 11. Rotate Array
// Given an array and a number k , rotate the array to the right by k
// steps.
// Example: Input: [1, 2, 3, 4, 5], k = 2 → Output: [4, 5, 1, 2, 3]

//Without Built - in Function

function rotateArray(arr, k) {

    let n = arr.length;
    
    k = k % n;

    let result = new Array(n);


    for(let i = 0 ; i < n ; i++){

        let newIndex = (i + k) % n;

        result[newIndex] = arr[i];
    }

    return result;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([1, 2, 3, 4, 5], 7));




// 12. Find Missing Number
// Given an array of numbers from 1 to n with one number missing, find
// the missing number.
// Example: Input: [1, 2, 4, 5] → Output: 3

function findMissing(arr){

    let n = arr.length + 1;

    let sum = (n * (n + 1))/2;

    let actualSum = 0;

    for(let i = 0 ; i < arr.length ; i++){
        actualSum += arr[i];
    }

    return sum - actualSum;
}

console.log(findMissing([1, 2, 4, 5]))
console.log(findMissing([1, 2, 3, 4, 5]))


// 13. Move Zeros
// Given an array of numbers, move all zeros to the end while maintaining
// the relative order of non-zero elements.
// Example: Input: [0, 1, 0, 3, 12] → Output: [1, 3, 12, 0, 0]

function moveZeros(arr) {

    let j = 0 ;

    for ( let i = 0 ; i < arr.length ; i++){
        
        if (arr[i] !== 0){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }

    return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12]))
console.log(moveZeros([1, 0, 0, 3, 12]))



// 14. Array Intersection
// Given two arrays, return an array of their common elements.
// Example: Input: [1, 2, 2, 1], [2, 2] → Output: [2]

//With Built-in Function
function arrayIntersection(arr1, arr2) {

    let result = [];
   
    for(let num of arr2){

        if(arr1.includes(num) && !result.includes(num)){
            result.push(num);
        }
    }

    return result;
}

console.log(arrayIntersection([1, 2, 2, 1], [2, 2]))


//Without Built-in Function

function intersection(arr1, arr2) {

    let result = [];

    for (let i = 0; i < arr1.length; i++) {

        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j]) {

                let exists = false;

                for (let k = 0; k < result.length; k++) {

                    if (result[k] === arr1[i]) {
                        exists = true;
                        break;
                    }

                }

                if (!exists) {
                    result.push(arr1[i]);
                }

                break;
            }
        }
    }

    return result;
}

console.log(intersection([1,2,2,1],[2,2]));

// 15. Sum of Two Numbers
// Given an array of numbers and a target sum, return the indices of two
// numbers that add up to the target.
// Example: Input: [2, 7, 11, 15], target = 9 → Output: [0, 1]


//without Built-in Function

function sumOfTwo(arr, target) {

    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i + 1 ; j < arr.length ; j++){

            if(arr[i] + arr[j] === target){
                return [i, j];
            }
        }
    }

    return [];
}

console.log(sumOfTwo([2, 7, 11, 15], 9))
console.log(sumOfTwo([3, 2, 4], 6))


// 16. Contains Duplicate
// Given an array of numbers, return true if any value appears at least
// twice.
// Example: Input: [1, 2, 3, 1] → Output: true

//without Built-in Function

function containsDuplicate(arr) {

    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i + 1 ; j < arr.length ; j++){

            if(arr[i] === arr[j]){
                return true;
            }
        }
    }

    return false;
}

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))

// 17. Product of Array Except Self
// Given an array of numbers, return an array where each element is the
// product of all other elements.
// Example: Input: [1, 2, 3, 4] → Output: [24, 12, 8, 6]

function productOfArray(arr) {

    let result = [];

    for(let i = 0 ; i < arr.length ; i++){

        let product = 1; 
        for(let j = 0 ; j < arr.length ; j++){
            if(i !== j){
                product *= arr[j];
                        }
        }
        result.push(product);
    }
    return result;
    }

    console.log(productOfArray([1, 2, 3, 4]))
    console.log(productOfArray([1, 2, 3, 4, 5]))


    //Divison Method

    function productofArrayDiv(arr){
        let totalProduct = 1;

        for(let num of arr){
totalProduct *= num;
        }
        let result = [];

        for(let num of arr){
            result.push(totalProduct / num);
        }

        return result;
    }

    console.log(productofArrayDiv([1, 2, 3, 4]))
    console.log(productofArrayDiv([1, 2, 3, 4, 5]))

// 18. Find Second Largest
// Given an array of numbers, find the second largest number.
// Example: Input: [10, 5, 8, 12] → Output: 10

function secondLargest(arr) {

    let max = -Infinity ;
    let secondMax = -Infinity ;

    for(let num of arr){

        if(num > max){
            secondMax = max;
            max = num;
        }else if (num > secondMax && num !== max){
            secondMax = num;
        }
    }

    return secondMax;
}

console.log(secondLargest([10, 5, 8, 12]))
console.log(secondLargest([1, 2, 3, 4, 5]))

//using set + sort()

function findSecondLargest(arr) {
    let unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);
    return unique[1];

}

console.log(findSecondLargest([10, 5, 8, 12]))
console.log(findSecondLargest([1, 2, 3, 4, 5]))

// 19. Chunk Array
// Given an array and a size, split the array into subarrays of the given size.
// Example: Input: [1, 2, 3, 4, 5], size = 2 → Output: [[1, 2], [3,
// 4], [5]]

function chunkArray(arr, size) {

    let result = [];

    for(let i = 0 ; i < arr.length ; i += size){
       let chunk = [];
       for(let j = i ; j < i + size && j < arr.length ; j++){
        chunk.push(arr[j]);
       } 
       result.push(chunk);
    }
    return result;
    }

    console.log(chunkArray([1, 2, 3, 4, 5], 2))
    console.log(chunkArray([1, 2, 3, 4, 5, 6], 3))

// 20. Flatten Array
// Given a nested array, flatten it into a single-level array.
// Example: Input: [1, [2, 3], [4, [5]]] → Output: [1, 2, 3, 4, 5]

//using Flat()

function flattenArrayflat(arr){
    return arr.flat(Infinity);

}

console.log(flattenArrayflat([1, [2, 3], [4, [5]]]))
console.log(flattenArrayflat([1, [2, 3], [4, [5, [6]]]]))

//without function in built in

function flattenArray(arr){

    let result = [];

    function flatten(item){
        for(let i = 0 ; i < item.length ; i++){

            if(Array.isArray(item[i])){
                flatten(item[i]);
            }else{
                result.push(item[i]);   
            }
        }
    }

    flatten(arr);
    return result;

}

console.log(flattenArray([1, [2, 3], [4, [5]]]))
console.log(flattenArray([1, [2, 3], [4, [5, [6]]]]))