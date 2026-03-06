
let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";


let nomCorrige = nom.trim();
if (nomCorrige === "") nomCorrige = "Inconnu";


let ageNombre = parseInt(age, 10);
let ageValide = !Number.isNaN(ageNombre) && ageNombre > 0;


let emailValide = false;
if (email.includes("@")) {
    let apresArobase = email.split("@")[1];
    if (apresArobase && apresArobase.includes(".")) {
        emailValide = true;
    }
}


let score = parseInt(scoreJeu, 10);
if (Number.isNaN(score)) score = 0;


let admin = estAdmin === "true" ? true : false;


let derniere = derniereConnexion ?? "Jamais connecté";


let nbConnex = parseInt(nombreConnexions, 10);
let nbConnexAffichage = nbConnex === 0 ? "Aucune connexion" : nbConnex;


console.log("===== RAPPORT UTILISATEUR =====");
console.log("nom              : \"" + nomCorrige + "\" (corrigé : espaces supprimés)");
console.log("age              : " + ageNombre + " (" + (ageValide ? "valide" : "invalide") + ")");
console.log("email            : \"" + email + "\" (" + (emailValide ? "valide" : "invalide : pas de point après @") + ")");
console.log("scoreJeu         : " + score + " (extrait depuis \"" + scoreJeu + "\")");
console.log("estAdmin         : " + admin + " (attention : Boolean(\"false\") = true, conversion manuelle requise)");
console.log("derniereConnexion: \"" + derniere + "\" (valeur par défaut via ??)");
console.log("nombreConnexions : \"" + nbConnexAffichage + "\" (" + (nbConnex === 0 ? "0 après conversion" : nbConnex) + ")");
console.log("================================");