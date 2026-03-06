let r1 = 10 + 20;
let r2 = "10" + 20;
let r3 = 10 + "20";
let r4 = "10" + "20";
let r5 = 10 - "3";
let r6 = "10" - "3";
let r7 = 10 + null;
let r8 = "10" + null;
let r9 = 10 + undefined;
let r10 = true + true;

function afficher(nom, valeur){
    console.log(`${nom} = ${valeur} (${typeof valeur})`);

}


afficher("r1", r1);
afficher("r2", r2);
afficher("r3", r3);
afficher("r4", r4);
afficher("r5", r5);
afficher("r6", r6);
afficher("r7", r7);
afficher("r8", r8);
afficher("r9", r9);
afficher("r10", r10);