
// FORMULAIRE // 

function validerFormulaire () {

// Je récupére les champs 

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

// Je récupére les éléments d'erreur 

    const errorNom = document.getElementById("error-nom");
    const errorEmail = document.getElementById("error-email");
    const errorMessage = document.getElementById("error-message");

// Je réinitialise les messages d'erreur 

    errorNom.innerHTML = "";
    errorEmail.innerHTML = "";
    errorMessage.innerHTML = "";

    let isValid = true;

// Validation du nom de l'utilisateur

if (nom === "") {
    errorNom.innerHTML = "Le nom d'utilisateur est obligatoire.";
    isValid = false;
}

// Validation de l'adresse mail

if (email === "") {
    errorEmail.innerHTML = "L'adresse mail est obligatoire";
    isValid = false;
} else if ( ! email.includes("@")) {
    errorEmail.innerHTML = "L'adresse mail doit contenir un '@' ";
    isValid = false;    
}

// Validation du message 

if (message === "") {
    errorMessage.innerHTML = "Le message est obligatoire";
    isValid = false;
}

// Si tout est valide

if(isValid) {
    alert("Le formlaire à bien été soumis.");
}

return isValid;

}



// GALERIE IMAGE 

function galerie2() {
    let imageDeux=document.getElementById("img_1");

    imageDeux.setAttribute("src","img/img/s3_principal_miniature.png");

    document.querySelector(".nom_gros").textContent = "Luna";
    document.querySelector(".description").textContent = "Trouvée dans la rue avec une patte cassée, Luna a été soignée et a retrouvé sa joie de vivre. Elle coule maintenant des jours heureux dans sa nouvelle famille.";
    document.querySelector(".date").textContent = "Janvier 2024";

}

function galerie3() {
    let imageTrois=document.getElementById("img_1");

    imageTrois.setAttribute("src", "img/img/s3_chat.png");

    document.querySelector(".nom_gros").textContent = "Oscar";
    document.querySelector(".description").textContent = "Trouvée dans la rue avec une patte cassée, Luna a été soignée et a retrouvé sa joue de vivre. Elle coule maintenant des jours heureux dans sa nouvelle famille.";
    document.querySelector(".date").textContent = "Janvier 2024";

}

function galerie4() {
    let imageQuatre=document.getElementById("img_1");

    imageQuatre.setAttribute("src", "img/img/s3_bulldog.png");

    document.querySelector(".nom_gros").textContent = "Max";
    document.querySelector(".description").textContent = "Sauvé d'un laboratoire, Max n'avait jamais connu l'amour. Aujourd'hui, il profite de sa liberté et fait le bonheur de sa famille d'accueil.";
    document.querySelector(".date").textContent = "Février 2024";
}



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



