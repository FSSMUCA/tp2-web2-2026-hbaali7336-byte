// Déclaration des variables
let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

// 1. Calcul du sous-total
let sousTotal = prix * quantite;
console.log("Sous-total : " + sousTotal + " MAD");

// 2. Calcul de la réduction
let reduction = 0; 
if ((codePromo ?? null ) != null && estMembre) {
    reduction = sousTotal * (reductionPourcentage / 100);
}
console.log("Réduction : " + reduction + " MAD");

// 3. Calcul du total final
let totalFinal = sousTotal - reduction;
console.log("Total final : " + totalFinal + " MAD");

// 4. Vérification du solde
let paiementAccepte = false;
if (soldeCompte >= totalFinal) {
    paiementAccepte = true;
    console.log("Paiement accepté");
} else {
    console.log("Solde insuffisant");
}

// 5. Nouveau solde si paiement accepté
let nouveauSolde = soldeCompte;
if (paiementAccepte) {
    nouveauSolde = soldeCompte - totalFinal;
}

// 6. Récapitulatif final
console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit   : " + nomProduit);
console.log("Quantité  : " + quantite);
console.log("Prix unit.: " + prix + " MAD");
console.log("Sous-total: " + sousTotal + " MAD");
console.log("Réduction : " + reduction + " MAD");
console.log("Total     : " + totalFinal + " MAD");
console.log("Statut    : " + (paiementAccepte ? "Paiement accepté" : "Solde insuffisant"));
console.log("Solde     : " + nouveauSolde + " MAD");
console.log("=========================");