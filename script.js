function choixCouleur(){ 
// Demander à l'utilisateur une liste de couleurs
 proposition1 = prompt("Premier Etape : Proposez 4 couleurs séparées par des virgules (exemple : rouge,bleu,jaune,vert) et Etape 2 : Deviner 2 couleurs séparées par des virgules (exemple : rouge,vert")
let propositiontable = proposition1.split(',')
return propositiontable
};

function PropositionCouleur(propositiontable) {
   
    // Diviser la chaîne en un tableau basé sur la virgule
    let couleurChoisie = choixCouleur(propositiontable);
    
    // Vérifier si le nombre de couleurs est bien de 4
    if (couleurChoisie.length > 4) {
        console.log("false")
         return false 

    }
   //  Vérifier si toutes les couleurs sont différentes (sans Set)
    for (let i = 0; i < couleurChoisie.length; i++) {
        for (let j = i + 1; j < couleurChoisie.length; j++) {
            if (couleurChoisie[i].toLowerCase() === couleurChoisie[j].toLowerCase()) {
                alert("Erreur : chaque couleur doit être différente. Veuillez recommencer.")
                console.log("false")
                return false 
            } else { 
                console.log("true")
                return true
            }
        }
    }

    // Si tout est correct, afficher les couleurs
    console.log("Les couleurs choisies sont : ", couleurChoisie);
    console.log("Parfait !");
}

// Appeler la fonction
 //PropositionCouleur();

function VerificationCouleur(propositiontable){ 
    let secret = ["bleu", "blanc"];
    let combinaison = choixCouleur(propositiontable);
    if (combinaison[0] == secret[0] && combinaison[1] == secret[1]){
        console.log("true pour combinaison")
        return true
    } else { 
        return false
    }
}
// VerificationCouleur();

function  GestionJeu (propositiontable) { 

while ((PropositionCouleur(propositiontable) && VerificationCouleur(propositiontable)) == false ){
    alert("recommencer, vous n'avez pas trouvé la bonne combinaison")
}
alert("vous avez gagne")

}
GestionJeu();
