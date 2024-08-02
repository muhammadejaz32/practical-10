function findPrimes(limit) {
    let num = 2; 
    while (num <= limit) {
        let isPrime = true;
        let divisor = 2;
        
        while (divisor <= Math.sqrt(num)) {
            if (num % divisor === 0) {
                isPrime = false;
                break;
            }
            divisor++;
        }
        
        if (isPrime) {
            console.log(num);
        }
        
        num++;
    }
}

findPrimes(30); 