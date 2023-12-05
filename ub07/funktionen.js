// Funktion curry
function curry(binaryFunction, arg1) {
    return function(arg2) {
        return binaryFunction(arg1, arg2);
    };
}

// Beispiel: add3 = curry(add, 3); add3(4) ergibt 7
const add = (a, b) => a + b;
const add3 = curry(add, 3);
console.log(add3(4)); // Ausgabe: 7

// Beispiel: curry(mul, 5)(6) ergibt 30
const mul = (a, b) => a * b;
console.log(curry(mul, 5)(6)); // Ausgabe: 30

// Funktion methodize
function methodize(binaryFunction) {
    return function(y) {
        return binaryFunction(this, y);
    };
}

// Beispiel: (3).add(4) ergibt 7
Number.prototype.add = methodize(add);
console.log((3).add(4)); // Ausgabe: 7

// Funktion demethodize
function demethodize(method) {
    return function(x, y) {
        return method.call(x, y);
    };
}

// Beispiel: demethodize(Number.prototype.add)(5, 6) ergibt 11
console.log(demethodize(Number.prototype.add)(5, 6)); // Ausgabe: 11

// Funktion twice
function twice(binaryFunction) {
    return function(x) {
        return binaryFunction(x, x);
    };
}

// Beispiel: var double = twice(add); double(11) ergibt 22
const double = twice(add);
console.log(double(11)); // Ausgabe: 22

// Beispiel: var square = twice(mul); square(11) ergibt 121
const square = twice(mul);
console.log(square(11)); // Ausgabe: 121

// Funktion composeu
function composeu(func1, func2) {
    return function(x) {
        return func2(func1(x));
    };
}

// Beispiel: composeu(double, square)(3) ergibt 36
console.log(composeu(double, square)(3)); // Ausgabe: 36

// Funktion composeb
function composeb(func1, func2) {
    return function(x, y, z) {
        return func2(func1(x, y), z);
    };
}

// Beispiel: composeb(add, mul)(2, 3, 5) ergibt 25
console.log(composeb(add, mul)(2, 3, 5)); // Ausgabe: 25

// Funktion once
function once(func) {
    let hasBeenCalled = false;
    return function() {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            return func.apply(this, arguments);
        } else {
            throw new Error("Function can only be called once.");
        }
    };
}

// Beispiel: add_once = once(add); add_once(3, 4) ergibt 7
const add_once = once(add);
console.log(add_once(3, 4)); // Ausgabe: 7
// add_once(3, 4); // Auskommentiert, um den Fehler zu zeigen

// Funktion counterf
function counterf(initialValue) {
    return {
        inc: function() {
            return ++initialValue;
        },
        dec: function() {
            return --initialValue;
        }
    };
}

// Beispiel: counter = counterf(10); counter.inc() ergibt 11
const counter = counterf(10);
console.log(counter.inc()); // Ausgabe: 11
console.log(counter.dec()); // Ausgabe: 10

// Funktion revocable
function revocable(func) {
    return {
        invoke: function() {
            if (func) {
                return func.apply(this, arguments);
            }
        },
        revoke: function() {
            func = null;
        }
    };
}

// Beispiel ohne alert:
const consoleLog = revocable(console.log);
consoleLog.invoke("Hello, World!"); // führt zu console.log("Hello, World!");
consoleLog.revoke();

// "Array Wrapper"-Objekt
function vector() {
    const privateArray = [];

    return {
        append: function(value) {
            privateArray.push(value);
        },
        store: function(index, value) {
            privateArray[index] = value;
        },
        get: function(index) {
            return privateArray[index];
        }
    };
}

// Beispiel:
const my_vector = vector();
my_vector.append(7);
my_vector.store(1, 8);
console.log(my_vector.get(0)); // Ausgabe: 7
console.log(my_vector.get(1)); // Ausgabe: 8
