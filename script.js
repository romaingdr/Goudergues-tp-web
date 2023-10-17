document.addEventListener("DOMContentLoaded", function () {
    var validerBtn = document.getElementById("validerBtn");

    validerBtn.addEventListener("click", function () {
        var nom = document.querySelector(".styled-input").value;

        window.location.href = "accueil.html?nom=" + encodeURIComponent(nom);
    });
});