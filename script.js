// Don --> section 1

    let lemontantEstDe = document.getElementById("montant");
    let sectionsDon = document.querySelectorAll(".border_grey");
    let buttonsDuree = document.querySelectorAll(".button_conteneur .button_size");

    sectionsDon.forEach(function(section) {
        section.addEventListener("click", function() { // Execute le code lorsque l'ont click sur un élément de border grey

            let montant = section.querySelector("span").textContent;

            lemontantEstDe.textContent = "Faire un don de " + montant;

        });
    });

    buttonsDuree.forEach(function(button) {
        button.addEventListener("click", function() { // Execute le code lorsque l'ont click sur un boutton

            let duree = button.id;
            let montantActuel = lemontantEstDe.textContent.split(" ")[4] || "";
            
            // split(' ') : Divise la chaîne de texte en un tableau, en utilisant l'espace comme séparateur.
            // Exemple : "Faire un don de 10€".split(' ') → ["Faire", "un", "don", "de", "10€"]
            // [4] : Accède au 5eme élément du tableau (index 4). "Faire un don de 10€", l'élément à l'index 4 est "10€".

            // || '' : Si l'élément à l'index 3 n'existe pas (par exemple, si la chaîne est trop courte), il renvoie une chaîne vide ('') au lieu de undefined, évitant ainsi des erreurs.

            lemontantEstDe.textContent = "Faire un don de " + montantActuel + " / " + duree;

        });
    });


// Galerie --> section 3

function galerie2() {
    let imageDeux = document.getElementById("img_1");
    imageDeux.setAttribute("src", "img/img/s3_principal_miniature.png");
    document.querySelector(".nom_gros").textContent = "Luna";
    document.querySelector(".description").textContent = "Trouvée dans la rue avec une patte cassée, Luna a été soignée et a retrouvé sa joie de vivre. Elle coule maintenant des jours heureux dans sa nouvelle famille.";
    document.querySelector(".date").textContent = "Janvier 2024";
}

function galerie3() {
    let imageTrois = document.getElementById("img_1");
    imageTrois.setAttribute("src", "img/img/s3_chat.png");
    document.querySelector(".nom_gros").textContent = "Oscar";
    document.querySelector(".description").textContent = "Trouvé dans la rue avec une patte cassée, Oscar a été soigné et a retrouvé sa joie de vivre. Aujourd'hui, il vit heureux dans sa nouvelle famille.";
    document.querySelector(".date").textContent = "Janvier 2024";
}

function galerie4() {
    let imageQuatre = document.getElementById("img_1");
    imageQuatre.setAttribute("src", "img/img/s3_bulldog.png");
    document.querySelector(".nom_gros").textContent = "Max";
    document.querySelector(".description").textContent = "Sauvé d'un laboratoire, Max n'avait jamais connu l'amour. Aujourd'hui, il profite de sa liberté et fait le bonheur de sa famille d'accueil.";
    document.querySelector(".date").textContent = "Février 2024";
}

// Quizz --> section 4 Aide+++++

let toutesReponses = document.querySelectorAll(".mauvaise_reponse, .bonne_reponse");
let score = 0;

toutesReponses.forEach(function(reponse) {
    reponse.addEventListener("click", function () { // Chaque fois qu'une réponse est sélectionnée (click), la fonction à l'intérieur sera exécutée.
        let questionReponse = reponse.closest(".question-reponse"); // closest : récupére l'élément parent 
        let hidden = questionReponse.querySelector(".hidden");
        let iconeBon = questionReponse.querySelector(".icone_vrai");
        let iconeMauvais = questionReponse.querySelector(".icone_faux");

        let autresReponses = questionReponse.querySelectorAll(".mauvaise_reponse, .bonne_reponse");
        autresReponses.forEach(function(proposition) {
            proposition.style.display = "none"; // Masque toutes les autres réponses
        });

        // Afficher le bon icone
        if (reponse.classList.contains("bonne_reponse")) {
            score++; // Augmenter le score
            hidden.style.display = "block";
            hidden.style.backgroundColor = "rgba(0, 128, 0, 0.2)";
            if (iconeBon) iconeBon.style.display = "inline-block"; // Afficher l'icône :bonne réponse
        } else {
            hidden.style.display = "block";
            hidden.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            if (iconeMauvais) iconeMauvais.style.display = "inline-block"; // Afficher l'icône : mauvaise réponse
        }

        // Mettre à jour le score
        document.getElementById("score").textContent = score;
    });
});

// Recommencer le quiz
document.getElementById("recommencerQuiz").addEventListener("click", function () {
    score = 0;
    document.getElementById("score").textContent = score;
    let questions = document.querySelectorAll(".contenaire_questions");
    questions.forEach(function(question) {
        let icones = question.querySelectorAll(".icone_vrai, .icone_faux");
        let hidden = question.querySelector(".hidden");
        let reponses = question.querySelectorAll(".mauvaise_reponse, .bonne_reponse");
        
        // Réinitialiser les éléments
        icones.forEach(function(icone) {
            icone.style.display = "none";
        });
        hidden.style.display = "none";
        reponses.forEach(function(reponse) {
            reponse.style.display = "flex"; // Afficher à nouveau les réponses
        });
    });
});


// FORMULAIRE --> PAGE 2 HTML

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


