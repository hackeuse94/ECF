// GALERIE IMAGE 

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