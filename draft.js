function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
//pow (2,4) = 2 * pow(2,3) = 16
//pow (2,3) = 2 * pow(2,2) = 8
//pow (2,2) = 2 * pow(2,1) = 4
//pow(2,1) = 2

