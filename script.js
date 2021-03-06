// Assignment: Fib + Nacci

// The Fibonacci sequence is a sequence where each number is the sum of its two predecessors. 
// The sequence starts off like so: (0), 1, 1, 2, 3, 5, 8, etc. 
// The 0 is in parenthesis because it helps the sequence get started but it is not actually part of the sequence.

// Using Closures, make the Fib function with the following specifications:

function fib1() {
    // code here
    let count = 0;
    function nacci() 
    {
        // do something to those variables here
        count++;
        function fibonacciFunc(num){
            if(num <= 1) {
                return num;
            }
            return fibonacciFunc(num - 1) + fibonacciFunc(num - 2);
        }
        console.log(fibonacciFunc(count));
    }
    return nacci;
}

// var fibCounter = fib1();

function fib2(){
    let prev = 0;
    let curr = 1;
    function nacci(){
        const temp = prev;
        console.log(curr);
        // move the curr number up to the prev spot with each pass
        prev = curr;
        // update the prev number by summing it with value of temp (which is set to the prev value)
        curr = curr + temp;
    }
    return nacci;
}
var fibCounter2 = fib2();

fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"

fibCounter2() // should console.log "1"
fibCounter2() // should console.log "1"
fibCounter2() // should console.log "2"
fibCounter2() // should console.log "3"
fibCounter2() // should console.log "5"
fibCounter2() // should console.log "8"