// Variables pour stocker le montant et la durée sélectionnés
let montantSelectionne = 10; // Par défaut
let dureeSelectionnee = "Une fois"; // Par défaut

// Fonction pour mettre à jour le montant
function donMontant(montant) {
    montantSelectionne = montant;
    mettreAJourBouton();
}

// Fonction pour mettre à jour la durée
function donDuree(duree) {
    dureeSelectionnee = duree;
    mettreAJourBouton();
}

// Fonction pour mettre à jour le bouton de résumé
function mettreAJourBouton() {
    let resume = document.getElementById("montant");
    let duree = document.getElementById("duree");
    
    resume.innerHTML = "Faire un don de " + montantSelectionne + "€";
    duree.innerHTML = dureeSelectionnee;
}

// Ajout des événements `onclick` pour les montants
document.querySelector(".dix").onclick = function () { donMontant(10); };
document.querySelector(".vingt").onclick = function () { donMontant(20); };
document.querySelector(".cinquante").onclick = function () { donMontant(50); };

// Ajout des événements `onclick` pour la durée
document.getElementById("Une_fois").onclick = function () { donDuree("Une fois"); };
document.getElementById("Mensuel").onclick = function () { donDuree("Mensuel"); };
document.getElementById("Annuel").onclick = function () { donDuree("Annuel"); };

// Initialiser le texte du bouton avec les valeurs par défaut
mettreAJourBouton();
