// sum of every number from 1 to 1000
let finalSum = 0
for(let i = 1; i <= 1000; i++) {
    finalSum += i
}
console.log(finalSum)

// sum of every odd number from 93 to 845
let oddSum = 0
for(let i = 93; i <= 845; i++) {
    if(i % 2 != 0) {oddSum += i;}
}
console.log(oddSum)

// product of every number that is divisible by 6 from 1 to 400
let finalProduct = 1
for(let i = 1; i <= 400; i++) {
    if(i % 6 == 0){finalProduct *= i;}
}
console.log(finalProduct)

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

// factorial
function factorial(num) {
    for(let i = num - 1; i > 0; i--) {
        num *= i;
    }
    return num;
}
console.log(factorial(4));

// GCF
function GCF(num1, num2) {
    while(num2 != 0) {
        const coolio = num2;
        num2 = num1 % num2;
        num1 = coolio;
    }
    return num1;
}
console.log(GCF(18, 24));

