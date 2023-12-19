// identity Funktion
function identity(x) {
    return x;
}

// identity_function Funktion
function identity_function(x) {
    return function() {
        return x;
    };
}

// add und mul Funktionen
function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

// addf Funktion
function addf(x) {
    return function(y) {
        return x + y;
    };
}

// applyf Funktion
function applyf(binaryFunction) {
    return function(x) {
        return function(y) {
            return binaryFunction(x, y);
        };
    };
}

// Beispiele
console.log(identity(5)); // Ausgabe: 5

var idFunc = identity_function(10);
console.log(idFunc()); // Ausgabe: 10

console.log(add(3, 4)); // Ausgabe: 7
console.log(mul(5, 6)); // Ausgabe: 30

var addFunc = addf(2);
console.log(addFunc(3)); // Ausgabe: 5

var addApply = applyf(add);
console.log(addApply(3)(4)); // Ausgabe: 7

var mulApply = applyf(mul);
console.log(mulApply(5)(6)); // Ausgabe: 30
