// Promises and Asynchronous
// 46. Promise Delay
// Write a function that returns a promise resolving after a specified delay.
// Example: delay(1000).then(() => console.log("Done")) → Logs after 1
// second.

function delay(milliseconds){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },milliseconds);
    })
}

delay(1000).then(()=>{
    console.log("Done");
})


// 47. Async Sum
// Given an array of async functions returning numbers, compute their
// sum.
// Example: Input: [async () => 1, async () => 2] → Output: 3

async function asyncSum(functions){
    let sum = 0 ;

    for(const fn of functions){
        const value = await fn();
        sum += value;
    }

    return sum;
}

const numbers = [
    async () => 1,
    async () => 2,
];

asyncSum(numbers).then((result)=>{
    console.log(result);
})

// 48. Retry Promise
// Write a function that retries a promise-based function up to n times
// on failure.
// Example: Input: Promise fails twice, succeeds on third try → Output:
// Success result.

async function retryPromise(fn,retries){
    while (retries > 0){
        try{
            return await fn();
        }catch(error){
            retries--;

            if(retries === 0){
                throw error;
            }
        }
    }
}

let attempts = 0 ; 

async function task(){
    attempts ++;
    if(attempts < 3){
        throw new Error("Failed");
    }

    return "Success";
}

retryPromise(task,3)
.then((result)=> console.log(result))
.catch((error) => console.log(error.message));

// 49. Parallel Promise Execution
// Given an array of promises, return their results in the order they were
// passed, once all resolve.
// Example: Input: [Promise.resolve(1), Promise.resolve(2)] → Output:
// [1, 2]

async function parallerExecution(promises){
    return await Promise.all(promises);
}

const promises = [
    Promise.resolve(1),
    Promise.resolve(2),

];

parallerExecution(promises).then((result)=>{
    console.log(result);
})


// 50. Sequential Promise Execution
// Given an array of async functions, execute them sequentially and return
// their results.
// Example: Input: [async () => 1, async () => 2] → Output: [1, 2]

async function sequentialExecution(functions) {
  const results = [];

  for (const fn of functions) {
    const value = await fn();
    results.push(value);
  }

  return results;
}


const tasks = [
  async () => 1,
  async () => 2,
  async () => 3,
];

sequentialExecution(tasks).then((result) => {
  console.log(result);
});