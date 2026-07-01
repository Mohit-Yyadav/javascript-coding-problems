
// Strings and Patterns
// 26. Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without
// repeating characters.
// Example: Input: "abcabcbb" → Output: 3 (substring: "abc" )

function lengthofLongestSubstring(s){

   
    let max = 0;

    for (let i = 0 ; i < s.length ; i++){
         let current = "";

         for (let j = i ; j < s.length ; j++){
             if(current.includes(s[j])){
            break;
        }

        current += s[j];
        max = Math.max(max, current.length);
       
         }
       
    }
  

    return max;
}
console.log(lengthofLongestSubstring("abbcabcbb"));
console.log(lengthofLongestSubstring("bbbbb"));


// 27. Group Anagrams
// Given an array of strings, group all anagrams together.
// Example: Input: ["eat", "tea", "tan", "ate", "nat", "bat"] →
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

function groupAnagrams(strs) {

    let map = {};

    for (let word of strs){
        let key = word.split("").sort().join("");

        if(!map[key]){
            map[key]=[];
        }
        map[key].push(word);
    }
    return Object.values(map);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// 28. Longest Palindromic Substring
// Given a string, find the longest substring that is a palindrome.
// Example: Input: "babad" → Output: "bab" or "aba"

function longestPalindrome(str) {

    if(str.length < 2) return str;

    let start = 0 ; 
    let maxLength = 1;

    function expand(left,right){

        while(
            left >= 0 && 
            right <str.length &&
            str[left] === str[right]
        ){
            left--;
            right++;
        }

        let length = right - left - 1;
        if(length > maxLength){
            maxLength = length;
            start = left + 1;
        }

        
    }

    for(let i = 0 ; i < str.length ; i++){
        expand(i, i);
        expand(i, i + 1);
    }

  return str.substring(start, start + maxLength);
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));


// 29. Valid Parentheses
// Given a string containing parentheses, check if they are valid (properly
// nested).
// Example: Input: "()[]{}" → Output: true

function isValid(s){
    let stack = [];

    for(let char of s){

        if(
            char === "(" ||
            char === "[" ||
            char === "{"
        ){
            stack.push(char);
        }
        else {
            let top = stack.pop();
            if(
                (char === ")" && top !== "(") ||
                (char === "]" && top !== "[") ||
                (char === "}" && top !== "{")
            ){
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));

// 30. String Compression
// Given a string, compress it by counting consecutive characters.
// Example: Input: "aabcccccaaa" → Output: "a2b1c5a3"


function compressString(str){

    let result = "";
    let count = 1;

    for(let i = 0 ; i < str.length ; i++){

        if(str[i] === str[i+1]){
            count ++ ;
        }else{
            result += str[i] + count;
            count = 1;
        }
    }
    return result;

}

console.log(compressString("aabcccccaaa"));
console.log(compressString("abcde"));
console.log(compressString("aaabbbccc"));