// sum of every number from 1 to 1000
let finalSum = 0
for(let i = 1; i <= 1000; i++) {
    finalSum += i
}
console.log(finalSum)

// sum of every odd number from 93 to 845
let oddSum = 0
for(let i = 93; i <= 843; i++) {
    if(i % 2 != 0) {
    continue; 
}
    oddSum += i;
}
console.log(oddSum)

// product of every number that is divisible by 6 from 1 to 400
let finalProduct = 0
for(let i = 1; i <= 400; i++) {
    if(i % 6 == 0){finalProduct *= i}
}
console.log(finalProduct)

// determine if an input is prime 
// const prime = [5, 8, 25, 31, 11, 9, 20, 23, 17, 14]
// for(let i = 0; i < prime.length; i++) {
    
// }