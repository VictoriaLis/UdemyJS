function factorial(num) {
    let factorialNum = num;

    for (let i = 1; i < num; i++) {
        factorialNum = factorialNum * (num - i);

    }

    return factorialNum;
}
console.log(factorial(3));
// 5! = 5*4*3*2*1


function recursiveFactorial(num) {
    return (num == 1) ? num : num * recursiveFactorial(num - 1);

};



console.log(recursiveFactorial(3));
// recursiveFactorial(5) = return 5 * 4 * 3* 2* 1;
// recursiveFactorial(4) = 4*3*2*1
// recursiveFactorial(3) = 3*2*1
// recursiveFactorial(2) = 2*1
// recursiveFactorial(1) = 1