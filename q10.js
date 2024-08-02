function power(base, exponent) {
    let result = 1;
    let count = 0;
    
    while (count < exponent) {
        result *= base;
        count++;
    }
    
    return result;
}

console.log(power(3, 2));
