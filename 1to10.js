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

function reverseString(str){
    let arr =[];

    for(let i = 0 ; i < str.length ; i++){
        arr[i] = str[i];
    }
    let left = 0 ;
    let right = str.length - 1;

    while(left > right){
        let temp = arr[left];
        arr[left] =  arr[right];
        arr[right]= temp;
    }

    let result = ""

    for(let i = 0 ; i < arr.length ; i++){
        result += arr[i];
    }

return result;
}


console.log(reverseString("hello Mohit Yadav"))

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

function isPalin(str){
    let cleaned = "";

    for (let i = 0 ; i < str.length ; i++){
        let ch = str[i];

        if(
           (ch >='A' && ch <='Z')||
           (ch >='a' && ch <= 'z')||
           (ch >='0' && ch <= '9')
        ){
            if(ch >='A'&& ch<="Z"){
                ch = String.fromCharCode(ch.charCodeAt(0) + 32);
            }
            cleaned += ch;
        }
    }

    let left = 0 ;
    let right = cleaned.length -1;

    while(left < right){
        if(cleaned[left] !== cleaned[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;

}

console.log(isPalin('madam'));
console.log(isPalin("A man, a plan, a canal: Panama "))