function fibonacci(n) {
    let fibTable = Array(n + 1).fill(null);
    fibTable[0] = 0;
    fibTable[1] = 1;

    for (let i = 2; i <= n; i++) {
        fibTable[i] = fibTable[i - 1] + fibTable[i - 2];
    }

    return fibTable;
}

// Berechnen und Ausgeben der ersten 2000 Fibonacci-Zahlen
const fibNumbers = fibonacci(2000);
console.log(fibNumbers);

// Finden der größten Fibonacci-Zahl, die sich als Integer sicher speichern lässt
const maxSafeInteger = Number.MAX_SAFE_INTEGER;
let largestSafeFibonacci = 0;
let indexOfLargestSafeFibonacci = 0;

for (let i = 0; i < fibNumbers.length; i++) {
    if (fibNumbers[i] <= maxSafeInteger) {
        largestSafeFibonacci = fibNumbers[i];
        indexOfLargestSafeFibonacci = i + 1; // Fibonacci-Folge beginnt bei 1
    } else {
        break;
    }
}

console.log("Größte Fibonacci-Zahl als Integer:", largestSafeFibonacci);
console.log("Position in der Fibonacci-Folge:", indexOfLargestSafeFibonacci);

// Finden der größten Fibonacci-Zahl, die sich als Number speichern lässt
const maxNumberValue = Number.MAX_VALUE;
let largestNumberFibonacci = 0;
let indexOfLargestNumberFibonacci = 0;

for (let i = 0; i < fibNumbers.length; i++) {
    if (fibNumbers[i] <= maxNumberValue) {
        largestNumberFibonacci = fibNumbers[i];
        indexOfLargestNumberFibonacci = i + 1; // Fibonacci-Folge beginnt bei 1
    } else {
        break;
    }
}

console.log("Größte Fibonacci-Zahl als Number:", largestNumberFibonacci);
console.log("Position in der Fibonacci-Folge:", indexOfLargestNumberFibonacci);

// Verwendung von BigInt für alle 2000 Fibonacci-Zahlen
function fibonacciBigInt(n) {
    let fibTable = Array(n + 1).fill(null);
    fibTable[0] = BigInt(0);
    fibTable[1] = BigInt(1);

    for (let i = 2; i <= n; i++) {
        fibTable[i] = fibTable[i - 1] + fibTable[i - 2];
    }

    return fibTable;
}

const fibNumbersBigInt = fibonacciBigInt(2000);

// Finden der größten Fibonacci-Zahl mit BigInt
let largestBigIntFibonacci = fibNumbersBigInt[0];
let indexOfLargestBigIntFibonacci = 0;

for (let i = 1; i < fibNumbersBigInt.length; i++) {
    if (fibNumbersBigInt[i] > largestBigIntFibonacci) {
        largestBigIntFibonacci = fibNumbersBigInt[i];
        indexOfLargestBigIntFibonacci = i + 1; // Fibonacci-Folge beginnt bei 1
    }
}

console.log("Größte Fibonacci-Zahl mit BigInt:", largestBigIntFibonacci);
console.log("Position in der Fibonacci-Folge:", indexOfLargestBigIntFibonacci);
