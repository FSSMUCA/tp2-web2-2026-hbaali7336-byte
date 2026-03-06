
const paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];


let diffCount = 0;


for (let i = 0; i < paires.length; i++) {
    let a = paires[i][0];
    let b = paires[i][1];

    let egalDouble = (a == b);   // comparaison avec ==
    let egalTriple = (a === b);  // comparaison avec ===

    // Vérifie si == est true et === est false
    if (egalDouble === true && egalTriple === false) {
        diffCount++;
    }

    // Préparation des affichages pour NaN
    let aAff = (typeof a === "number" && isNaN(a)) ? "NaN" : JSON.stringify(a);
    let bAff = (typeof b === "number" && isNaN(b)) ? "NaN" : JSON.stringify(b);

    console.log(`${aAff} == ${bAff} -> ${egalDouble}    |   ${aAff} === ${bAff} -> ${egalTriple}`);
}


console.log("---");


console.log(`${diffCount} paire(s) où == et === donnent des résultats différents`);