class Vorrang {
    constructor(relations) {
        this.graph = new Map();
        this.inDegreeMap = new Map();

        for (const [source, target] of relations) {
            if (!this.graph.has(source)) {
                this.graph.set(source, new Set());
                this.inDegreeMap.set(source, 0);
            }
            if (!this.graph.has(target)) {
                this.graph.set(target, new Set());
                this.inDegreeMap.set(target, 0);
            }
            this.graph.get(source).add(target);
            this.inDegreeMap.set(target, this.inDegreeMap.get(target) + 1);
        }

        this.queue = Array.from(this.inDegreeMap.keys()).filter(node => this.inDegreeMap.get(node) === 0);
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.queue.length === 0) {
                    return { done: true };
                }

                const current = this.queue.shift();

                for (const neighbor of this.graph.get(current)) {
                    this.inDegreeMap.set(neighbor, this.inDegreeMap.get(neighbor) - 1);
                    if (this.inDegreeMap.get(neighbor) === 0) {
                        this.queue.push(neighbor);
                    }
                }

                return { value: current, done: false };
            }
        };
    }
}

// Beispiel
const studentenLeben = new Vorrang([
    ["schlafen", "studieren"],
    ["essen", "studieren"],
    ["studieren", "prüfen"]
]);

// Test
const result = [];
for (const next of studentenLeben) {
    result.push(next);
}

console.assert(result.join('') === "schlafenessenstudierenprüfen", "Test nicht bestanden");
