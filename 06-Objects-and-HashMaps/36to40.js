// Objects and Hash Maps
// 36. Word Frequency
// Given a string, return an object with the frequency of each word.
// Example: Input: "hello world hello" → Output: { hello: 2, world: 1
// }

//using Object
function wordFrequency(str){
    let words = str.split(' ');
    let frequency = {};

    for(let word of words){
        if(frequency[word]){
            frequency[word]++;
        }else{
            frequency[word] = 1;
        }
    }
    return frequency;
}


console.log(wordFrequency("hello world hello")); // Output: { hello: 2, world: 1 }
console.log(wordFrequency("this is a test this is only a test")); // Output: { this: 2, is: 2, a: 2, test: 2, only: 1 }


//Using Map 

function wordFrequencyMap(str){
    let map = new Map();

    for(let word of str.split(" ")){
        if(map.has(word)){
            map.set(word, map.get(word) + 1);
        }else{
            map.set(word, 1);
        }
    }
    return map;
}

console.log(wordFrequencyMap("hello world hello")); // Output: Map { 'hello' => 2, 'world' => 1 }
console.log(wordFrequencyMap("this is a test this is only a test")); // Output: Map { 'this' => 2, 'is' => 2, 'a' => 2, 'test' => 2, 'only' => 1 }

// 37. Valid Anagram
// Given two strings, check if one is an anagram of the other.
// Example: Input: "anagram", "nagaram" → Output: true

//using Sorting

function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false

//using object/hashmap

function isAnagramMap(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let count = {};

    for(let char of str1){
        count[char]= (count[char] || 0) + 1;
    }

    for(let char of str2){
        if(!count[char]){
            return false;
        }
        count[char]--;
    }
    return true;
}

console.log(isAnagramMap("anagram", "nagaram")); // Output: true
console.log(isAnagramMap("hello", "world")); // Output: false

// 38. First Unique Character in Object
// Using an object, find the first unique character in a string.
// Example: Input: "loveleetcode" → Output: 2 (character: v )

//using object

function firstUniqueChar(str){
    let count = {};

    for(let char of str){
        count[char] = (count[char] || 0) + 1;
    }

    for(let i = 0 ; i < str.length ; i++){
        if(count[str[i]] === 1){
            return i ;
        }
    }

    return -1;
}
console.log(firstUniqueChar("loveleetcode")); // Output: 2
console.log(firstUniqueChar("aabbcc")); // Output: -1

//brute Force 
function firstUniqueCharBruteForce(str){
    for(let i = 0 ; i < str.length ; i++){
        let isUnique = true;

        for(let j = 0 ; j < str.length ; j++){
            if(i !== j && str[i]=== str[j]){
                isUnique = false;
                break;
            }
        }
        if(isUnique){
            return i;
        }
    }
    return -1;
}
console.log(firstUniqueCharBruteForce("loveleetcode")); // Output: 2
console.log(firstUniqueCharBruteForce("aabbcc")); // Output: -1


// 39. Top K Frequent Elements
// Given an array of numbers, return the k most frequent elements.
// Example: Input: [1, 1, 1, 2, 2, 3], k = 2 → Output: [1, 2]

//using object and sorting

function topKFrequent(nums, k) {

   let frequency = {};

   for (let num of nums){
    frequency[num] = (frequency[num] || 0 ) + 1;
   }

   let entries = Object.entries(frequency);

   entries.sort((a,b) => b[1] - a[1]);

   let result = [];

   for(let i = 0 ; i < k ; i++){
    result.push(Number(entries[i][0]));
   }

   return result;
}

console.log(topKFrequent([1,1,1,2,2,3],2));
console.log(topKFrequent([1,2,3,4,5,6,7,8,9,10],3));
console.log(topKFrequent([1,1,2,2,3,3,4,4],2));

//using map

function topKFrequentMap(nums, k){
    let map = new Map();

    for(let num of nums){
        map.set(num,(map.get(num) || 0) + 1);
    }

    return [...map.entries()].sort((a,b) => b[1] - a[1]).slice(0,k).map(entry => entry[0]);
}

console.log(topKFrequentMap([1,1,1,2,2,3],2));
console.log(topKFrequentMap([1,2,3,4,5,6,7,8,9,10],3));
console.log(topKFrequentMap([1,1,2,2,3,3,4,4],2));

// 40. Intersection of Multiple Arrays
// Given multiple arrays, return an array of elements common to all arrays.
// Example: Input: [[1, 2, 3], [2, 3, 4], [2, 3, 5]] → Output: [2, 3]

//using filer and every

function intersection(arrays){

    return arrays[0].filter(num => arrays.every(arr => arr.includes(num)));
}
console.log(intersection([[1, 2, 3], [2, 3, 4], [2, 3, 5]])); // Output: [2, 3]
console.log(intersection([[1, 2], [2, 3], [2, 4]])); // Output: [2]
console.log(intersection([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Output: []

//without built-in methods

function intersectionWithoutBuiltIn(arrays){
    let result = [];
   for(let i = 0 ; i < arrays[0].length ; i++){
    let num = arrays[0][i];
    let iscommon = true;
    for(let j = 1 ; j < arrays.length ; j++){
        let found = false;
        for(let k = 0 ; k < arrays[j].length; k++){
            if(arrays[j][k] === num){
                found = true;
                break;
            }
        }
        if(!found){
            iscommon = false;
            break;
        }
    }
    if(iscommon){
        result.push(num);
    }
   }
   return result;
}