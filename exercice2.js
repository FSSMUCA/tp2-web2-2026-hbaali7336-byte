// Déclaration du tableau avec les 10 éléments
const valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

// Parcours avec une boucle for classique
for (let i = 0; i < valeurs.length; i++) {
    let val = valeurs[i];
    // Conversion en string, avec traitement particulier pour la chaîne vide
    let affichage = val === "" ? "(chaine vide)" : String(val);
    
    // Test de truthy / falsy
    if (val) {
        console.log(`${affichage} -> truthy`);
    } else {
        console.log(`${affichage} -> falsy`);
    }
}
