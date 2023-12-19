function topsort(dependencies) {
    const graph = new Map();

    // Erstelle den gerichteten Graphen basierend auf den Abhängigkeiten
    dependencies.forEach(([from, to]) => {
        if (!graph.has(from)) {
            graph.set(from, []);
        }
        graph.get(from).push(to);
    });

    const visited = new Set();
    const result = [];

    function visit(node) {
        if (visited.has(node)) {
            return;
        }

        visited.add(node);

        const dependencies = graph.get(node) || [];
        dependencies.forEach(visit);

        result.unshift(node);
    }

    // Starte die topologische Sortierung für jeden nicht besuchten Knoten
    graph.forEach((dependencies, node) => {
        visit(node);
    });

    return result;
}

// Beispieltest
const dependencies = [
    ["schlafen", "studieren"],
    ["essen", "studieren"],
    ["studieren", "prüfen"]
];

const sortedTasks = topsort(dependencies);

// Überprüfe, ob die Sortierung korrekt ist
console.assert(sortedTasks.indexOf("schlafen") < sortedTasks.indexOf("studieren"), "Fehler: Schlafen vor Studieren");
console.assert(sortedTasks.indexOf("essen") < sortedTasks.indexOf("studieren"), "Fehler: Essen vor Studieren");
console.assert(sortedTasks.indexOf("studieren") < sortedTasks.indexOf("prüfen"), "Fehler: Studieren vor Prüfen");

console.log("Topologische Sortierung:", sortedTasks);
