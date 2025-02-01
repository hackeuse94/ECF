// QUIZZ --> Enormément d'aides mais avec 100% de compréhension du code malgrés que je n'ai pas réussi à aller au bout

      
// Sélectionner toutes les réponses (bonnes et mauvaises)
let reponses = document.querySelectorAll('.mauvaise_reponse, .bonne_reponse');

// Parcours toutes les réponses
reponses.forEach(function(reponse) {

// Ajoute un "événement de clic" à chaque réponse
reponse.addEventListener('click', function() {

// Ajouter la classe 'active' pour changer la couleur
reponse.classList.add('active');
});

});



