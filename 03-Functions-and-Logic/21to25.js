// Functions and Logic
// 21. Factorial
// Write a function to compute the factorial of a number.
// Example: Input: 5 → Output: 120

function factorial(n){
    let fact = 1;
    for(let i = 1; i <= n ; i++){
        fact *= i;  
    }
    return fact;
}
console.log(factorial(5));

// 22. Fibonacci Sequence
// Given a number n , return the first n numbers of the Fibonacci
// sequence.
// Example: Input: 6 → Output: [0, 1, 1, 2, 3, 5]

function fibonacci(n){
    let fib = [0,1];
    for(let i = 2 ; i < n ; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib;
}

console.log(fibonacci(6));
console.log(fibonacci(7));

// 23. Is Prime Number
// Write a function to check if a number is prime.
// Example: Input: 11 → Output: true

function isPrime(num){
    if(num <= 1){
        return false;
    }

    for(let i = 2 ; i*i < num ; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(11));
console.log(isPrime(12));


// 24. Power of Two
// Given a number, return true if it is a power of two.
// Example: Input: 16 → Output: true

function isPowerOfTwo(num){
    if(num < 1){
        return false;
    }

    while(num % 2 === 0){
        num /= 2;
    }
    return num === 1;
}

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(17));
console.log(isPowerOfTwo(18));


// 25. Capitalize Words
// Given a string, capitalize the first letter of each word.
// Example: Input: "hello world" → Output: "Hello World"

function capitalizeWords(str){

    let result = "";
    let newWord = true;

    for ( let i = 0 ; i < str.length ; i++){

        let ch = str[i];

        if(newWord && ch >= "a" && ch <= "z"){
            result += String.fromCharCode(ch.charCodeAt(0) - 32);
            newWord = false;
        }else{
            result += ch;
        }

        if(ch === " "){
            newWord = true;
        }
    }

    return result;
}

console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("HELLO WORLD"));
