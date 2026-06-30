// JavaScript Problems

//Variables , Data Types , and Operators

//1. Reverse a String

//Given a String , return a new string with the Characters reversed   Example : Input : "hello" -> Output : "olleh"

//With Built-in Function

function reverseStringbuilit(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStringbuilit("hello  Mohit Yadav"));

//Without Built-in Function

function reverseString(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    arr[i] = str[i];
  }
  let left = 0;
  let right = str.length - 1;

  while (left > right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }

  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

console.log(reverseString("hello Mohit Yadav"));

// 2. Check Palindrome

//Write a function to check if a string is a palindrome(ignoring case and non - alphanumeric characters).
// Example: Input : "A man, a plan , a canal: panama" --> Output : true

//With Built-in Function

function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

//Without built in function

function isPalin(str) {
  let cleaned = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (
      (ch >= "A" && ch <= "Z") ||
      (ch >= "a" && ch <= "z") ||
      (ch >= "0" && ch <= "9")
    ) {
      if (ch >= "A" && ch <= "Z") {
        ch = String.fromCharCode(ch.charCodeAt(0) + 32);
      }
      cleaned += ch;
    }
  }

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalin("madam"));
console.log(isPalin("A man, a plan, a canal: Panama "));

//3 .. FizzBuzz
// Given a number n , return an array of strings from 1 to n where
// multiples of 3 are "Fizz" , multiples of 5 are "Buzz" , and multiples of
// both are "FizzBuzz" .
// Example: Input: n = 5 → Output: ["1", "2", "Fizz", "4", "Buzz"]


function fizzBuzz(n){
    let result = [];

    for(let i = 1; i <= n ; i++){

        if(i % 3 === 0 && i % 5 === 0 ){
            result.push("FizzBuzz");
        }else if ( i % 3 === 0 ){
            result.push("Fizz");
        }else if ( i % 5 === 0){
            result.push("Buzz");
        }else{
            result.push(i.toString());
        }
    }

    return result;
}


console.log(fizzBuzz(15))



// 4 Find Maximum Number
// Given an array of numbers, return the largest number.
// Example: Input: [3, 1, 4, 1, 5] → Output: 5


//With Built-in Function

function findMax(arr){
    return Math.max(...arr);
}


console.log(findMax([3,1,4,1,5]));


//Without Built-in Function

function findMaxx(arr) {

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }

    }

    return max;
}

console.log(findMaxx([3, 1, 4, 1, 5])); // 5



// 5. Sum of Array
// Write a function to calculate the sum of all numbers in an array.
// Example: Input: [1, 2, 3, 4] → Output: 10

function sumnumber(arr){
    let total = 0 ;
    for(let i = 0 ; i < arr.length ; i++){
        total += arr[i];
    }

    return total;
}

console.log(sumnumber([1,2,3,4]))


// 6. Check Even or Odd
// Given a number, return true if it is even, false if odd.
// Example: Input: 4 → Output: true


function checkEvenOdd(n){
    if(n % 2 === 0)return true

    return false
}

console.log(checkEvenOdd(5));
console.log(checkEvenOdd(4))

// 7. Convert String to Number
// Convert a string containing a number to its numeric equivalent without
// using built-in parse functions.
// Example: Input: "123" → Output: 123


//Without Built-in Function
function stringToNumber(str){
    let num = 0 ;

    for(let i = 0 ; i < str.length ; i++){
        num = num * 10 + (str[i] - "0");
    }

    return num;
}

console.log(stringToNumber("1234"));

//With Built-in Function

function stringToNUm(str){
    return Number(str);
}

console.log(stringToNUm("12345"))

// 8. Count Vowels
// Given a string, count the number of vowels (a, e, i, o, u).
// Example: Input: "hello" → Output: 2

//Without Built-in Function

function countVowels(str){
    let count = 0 ;

for(let i = 0 ; i < str.length ; i++){
    let ch = str[i];

    if(
        ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ||
        ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U" 
    )count++;
}

return count;

}


console.log(countVowels("helloO"))
console.log(countVowels("qwertyuiopasdfghjklzxcvbnm"))


// With Built-in Function

function countVowels(str) {

    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("hello")); // 2


// 9. Remove Duplicates from Array
// Given an array of numbers, return a new array with duplicates removed.
// Example: Input: [1, 2, 2, 3, 1] → Output: [1, 2, 3]

//Without Built-in Function

function removeDuplicate(arr){

    let result = [];

    for(let i = 0 ; i < arr.length ; i++){

        let isDuplicate = false;

        for(let j = 0 ; j < result.length ; j++){

            if(arr[i] === result[j]){
                isDuplicate = true;
                break;
            }
        }
        if(!isDuplicate){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeDuplicate([1,2,2,3,1]))



//with Built-in Function

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 1]));

// 10. Find First Non-Repeating Character
// Given a string, return the index of the first non-repeating character.
// Return -1 if none exists.
// Example: Input: "leetcode" → Output: 0


//without Built-in Function

function findFirstNonRepeatingCharacter(str) {
 
    for (let i = 0 ; i < str.length ; i++){

        let unique = true;

        for(let j = 0 ; j < str.length ; j++){

            if(str[i] === str[j] && i !== j ){
                unique = false;
                break;
            }
        }

        if(unique){
            return i;
        }
    }

    return -1;

}

console.log(findFirstNonRepeatingCharacter("leetcodle"))
