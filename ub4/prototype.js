// Person Prototyp
function Person(name) {
    this.name = name;
    this.cars = [];
}

// Auto Prototyp
function Auto(make, model) {
    this.make = make;
    this.model = model;
    this.owner = null;
}

// Funktion zum Hinzufügen eines Autos zu einer Person
Person.prototype.addCar = function (car) {
    this.cars.push(car);
    car.owner = this;
};

// Funktion zum Überprüfen von Autobesitzkonflikten
function conflict(car) {
    if (car.owner === null) {
        return false; // Das Auto hat keinen Besitzer
    }

    // Überprüfen, ob das Auto von mehr als einer Person besessen wird
    var otherOwners = car.owner.cars.filter(function (c) {
        return c !== car;
    });

    return otherOwners.length > 0;
}

// Beispielanwendung
var person1 = new Person("John");
var person2 = new Person("Alice");

var car1 = new Auto("Toyota", "Camry");
var car2 = new Auto("Honda", "Accord");

person1.addCar(car1);
person2.addCar(car2);

console.log(conflict(car1)); // false, da car1 nur von person1 besessen wird
console.log(conflict(car2)); // false, da car2 nur von person2 besessen wird

person2.addCar(car1);

console.log(conflict(car1)); // true, da car1 nun von beiden Personen besessen wird
