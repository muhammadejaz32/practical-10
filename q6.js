function printFibonacci(n) {
    let a = 0, b = 1, count = 0;
    while (count < n) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
        count++;
    }
}
printFibonacci(5); 