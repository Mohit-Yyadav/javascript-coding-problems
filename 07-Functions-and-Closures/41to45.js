// Functions and Closures
// 41. Counter Closure
// Create a function that returns a counter function, incrementing by 1
// each call.
// Example: let counter = createCounter(); counter(); → Output: 1 ,
// counter(); → 2

function createCounter(){
    let count = 0 ;

    return function (){
        count++;
        return count;
    }
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// 42. Memoize Function
// Write a function that memoizes the results of another function to avoid
// redundant calculations.
// Example: Memoize a Fibonacci function for faster computation.

function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache[key] !== undefined) {
            console.log("Result from Cache");
            return cache[key];
        }

        console.log("Calculating...");
        const result = fn(...args);

        cache[key] = result;

        return result;
    };
}

function fibonacci(n) {
    if (n <= 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoFib = memoize(fibonacci);

console.log(memoFib(10));
console.log(memoFib(10));
console.log(memoFib(8));
console.log(memoFib(8));



// 43. Debounce Function
// Implement a debounce function that limits the rate at which a function
// can fire.
// Example: Input: Function called 3 times in 300ms with 500ms debounce
// → Executes once after 500ms.

function debounce(fn,delay){
    let timer;

    return function (...args){
        clearTimeout(timer);

        timer = setTimeout(() =>{
            fn(...args);
        }),delay;
    }
}

function search(text){
    console.log("Searching",text);
}

const debouncedSearch = debounce(search , 500);

debouncedSearch("H");
debouncedSearch("He");
debouncedSearch("Hel");
debouncedSearch("Hell");
debouncedSearch("Hello");


// 44. Throttle Function
// Implement a throttle function that ensures a function is called at most
// once every n milliseconds.
// Example: Input: Function called 5 times in 1000ms with 500ms throttle
// → Executes at most twice.

function throttle(fn, delay){
    let lastExecution = 0 ;
    return function (...args){
        const now = Date.now();

        if(now - lastExecution >= delay){
            lastExecution = now;
            fn(...args);
        }
    }
}

function printMessage(msg){
    console.log(msg);
}

const  throttlePrint = throttle(printMessage,500);

const interval = setInterval(() =>{
    throttlePrint("hello");
},100);

setTimeout(() =>{
    clearInterval(interval);
},2000);


// 45. Curry Function
// Implement a function that curries another function.
// Example: Input: curry(sum)(1)(2)(3) → Output: 6

function curry(fn) {
    return function curried(...args) {

        // If enough arguments are provided
        if (args.length >= fn.length) {
            return fn(...args);
        }

        // Otherwise collect more arguments
        return function (...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    };
}

// Normal function
function sum(a, b, c) {
    return a + b + c;
}

// Curry it
const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1, 2)(3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1, 2, 3));
