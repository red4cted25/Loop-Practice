// sum of every number from 1 to 1000
let finalSum = 0
for(let i = 1; i <= 1000; i++) {
    finalSum += i
}
console.log(finalSum)

console.log('')
// sum of every odd number from 93 to 845
let oddSum = 0
for(let i = 93; i <= 845; i++) {
    if(i % 2 != 0) {oddSum += i;}
}
console.log(oddSum)

console.log('')
// product of every number that is divisible by 6 from 1 to 400
let finalProduct = 1
for(let i = 1; i <= 400; i++) {
    if(i % 6 == 0){finalProduct *= i;}
}
console.log(finalProduct)

console.log('')
// determine if an input is prime 
const prime = [1, 8, 25, 31, 11, 9, 20, 23, 17, 14]
for(let i = 0; i < prime.length; i++) {
    if(prime[i] > 1) {
        let isPrime = true;
        for(let x = 2; x <= Math.floor(Math.sqrt(i)); x++) {
            if(i % x === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) {
            console.log(prime[i] + " ...is a prime number!");
        } else {
            console.log(prime[i] + " ... is NOT a prime number!");
        }
    } else {
        console.log(prime[i] + " ...is NOT a prime number");
    }
}

console.log('')
// find every prime 1-100
const possiblePrime = [];
for(let i = 1; i <= 100; i++) {
    if(i > 1) {
        let isPrime = true;
        for(let x = 2; x <= Math.floor(Math.sqrt(i)); x++) {
            if(i % x === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) {
            possiblePrime.push(i);
        }
    }
}
console.log(possiblePrime);

console.log('')
// factorial
function factorial(num) {
    for(let i = num - 1; i > 0; i--) {
        num *= i;
    }
    console.log(num);
}
factorial(4);

console.log('')
// GCF
function GCF(num1, num2) {
    while(num2 != 0) {
        const coolio = num2;
        num2 = num1 % num2;
        num1 = coolio;
    }
    console.log(num1);
}
GCF(18, 24);

console.log('')
// diamond of size x
function diamond(x){
    for(let i = 0; i < x + 1; i++){
        let current = []
        for(let j = 0; j < i; j++){
            current.push('*')
        }
    console.log(current.join(''))
    }
}
diamond(5)

console.log('')
// triangle of size x
function triangle(x){
    for(let i = 0; i < x + 1; i++){
        let current = []
        for(let j = 0; j < i; j++){
            current.push('*')
        }
    console.log(current.join(''))
    }
    for (let i = x - 1; i >= 1; i--){
        let current = [];
        for (let j = 0; j < i; j++){
            current.push('*');
        }
        console.log(current.join(''));
    }
}
triangle(5)

console.log('')
// calculate the series
function series(number) {
    let series = []
    let sum = 0
    for(let i = 1; i <= number; i++){
        let cool = []
        let currentSum = 0;
        for(let j = 1; j <= i; j++){
            cool.push(j);
            currentSum += j;
        }
        sum += currentSum;
    }
    console.log(sum);
}
series(5)

console.log('')
// Fibonacci series
function fibonacci(input) {
    let n1 = 0, n2 = 1, nextTerm = 0;
    for (let i = 1; i <= input; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}
fibonacci(10)

console.log('')
// square made of the numbers
function square(coolion) {
    let square = '';
    for(let i = 0; i <= coolion; i++){
        for(let j = 0; j <= coolion; j++){
            square += j + ' ';
        }
        square += '\n';
    }
    console.log(square)
}
square(8)