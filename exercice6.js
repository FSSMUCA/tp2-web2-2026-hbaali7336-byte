// Déclaration des variables
let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

// Tableau des variables pour parcourir facilement
const variables = [
    {nomVar: "nom", valeur: nom},
    {nomVar: "age", valeur: age},
    {nomVar: "ville", valeur: ville},
    {nomVar: "score", valeur: score},
    {nomVar: "actif", valeur: actif}
];

console.log("=== Partie A : utilisation de ?? ===");
for (let v of variables) {
    console.log(`${v.nomVar} ?? "valeur par défaut" -> ${v.valeur ?? "valeur par défaut"}`);
}

console.log("\n=== Partie B : utilisation de || ===");
for (let v of variables) {
    console.log(`${v.nomVar} || "valeur par défaut" -> ${v.valeur || "valeur par défaut"}`);
}

console.log("\n=== Partie C : comparaison ?? et || ===");
for (let v of variables) {
    let resultatNullish = v.valeur ?? "valeur par défaut";
    let resultatOr = v.valeur || "valeur par défaut";
    let comparaison = (resultatNullish === resultatOr) ? "même résultat" : "résultat différent";
    console.log(`${v.nomVar} : ?? et || -> ${comparaison}`);
}