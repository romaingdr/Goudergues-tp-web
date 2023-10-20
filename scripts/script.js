document.addEventListener("DOMContentLoaded", function () {
    var validerBtn = document.getElementById("validerBtn");

    validerBtn.addEventListener("click", function () {
        var nom = document.querySelector(".styled-input").value;

        window.location.href = "accueil.html?nom=" + encodeURIComponent(nom);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var validerBtn = document.getElementById("validerCode");

    validerBtn.addEventListener("click", function () {
        var inputCode = document.querySelector(".styled-input").value;

        if (inputCode === "56323831") {
            window.location.href = "fin.html";
        } else {
            document.getElementById("message").innerHTML = "Code incorrect. Réessayez.";
        }
    });
});

function afficherPopup() {
    alert("- - - - 3 8 3 1");
}

function getName(){
    var params = new URLSearchParams(window.location.search);
    var nom = params.get("nom");
    var welcomeName = document.getElementById("welcomeName");
    if (nom) {
        welcomeName.textContent = " " + nom + "  🗡";
    }
}