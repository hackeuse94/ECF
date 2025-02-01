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

console.log("ahahahahhahahahhahaaaaaaaaaaaa")