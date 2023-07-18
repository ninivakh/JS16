function calc(array, sum) {
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    sum = 0;
    while (array.length > 0) {
        sum += array.pop();
    }
    return sum;
}
console.log(calc());