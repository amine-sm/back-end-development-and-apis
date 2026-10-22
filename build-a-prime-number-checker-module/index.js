

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(6)); // false
console.log(isPrime(9)); // false

module.exports={isPrime}