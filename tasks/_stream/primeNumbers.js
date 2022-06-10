// check on prime number
const isPrime = (num) => {
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }

    return num > 1;
}

console.log(isPrime(3));
console.log(isPrime(234));
console.log(isPrime(7));

// search prime number from 1 to N

// compexity time: O(n**2)
// compexity memory: O(1)
const getPrimeNumber = (num) => {
    const res = [];

    for(let i = 2; i  < num; i++){
        if(isPrime(i)) res.push(i)
    }

    return res
}

// compexity time: O(n**2)
// compexity memory: O(1)
// algorithm Решето Эратосфена

const getPrimeNumberSieve = (num) => {
    const sieve = [];
    const primes = [];

    for(let i = 2; i <= num; i++){
        if(!sieve[i]){
            primes.push(i);
            for(let j = i ** i; j < num; j+=i){
                sieve[j] = true;
            }
        }
    }
    return primes
}
console.log(getPrimeNumberSieve(120));