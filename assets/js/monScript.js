
document.addEventListener("DOMContentLoaded", function () {

    

    const searchForm = document.querySelector(".searchBar");
    const searchInput = document.querySelector(
        '.searchBar input[type="search"]'
    );

    const gameCards = document.querySelectorAll(
        ".trendingCard .card, .mostCards .card"
    );

    if (searchForm && searchInput) {

        searchForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const recherche = searchInput.value.trim().toLowerCase();
            let nombreResultats = 0;

            gameCards.forEach(function (card) {
                const nomJeu = card.textContent.toLowerCase();

                if (nomJeu.includes(recherche)) {
                    card.style.display = "";
                    nombreResultats++;
                } else {
                    card.style.display = "none";
                }
            });

            let message = document.getElementById("searchMessage");

            if (!message) {
                message = document.createElement("p");
                message.id = "searchMessage";
                message.className = "text-center mt-3";
                searchForm.insertAdjacentElement("afterend", message);
            }

            if (recherche === "") {
                message.textContent = "Tous les jeux sont affichés.";
            } else if (nombreResultats === 0) {
                message.textContent = "Aucun jeu trouvé.";
            } else {
                message.textContent =
                    nombreResultats + " résultat(s) trouvé(s).";
            }
        });

        
        searchInput.addEventListener("input", function () {
            if (searchInput.value.trim() === "") {
                gameCards.forEach(function (card) {
                    card.style.display = "";
                });

                const message = document.getElementById("searchMessage");

                if (message) {
                    message.textContent = "";
                }
            }
        });
    }


   

    const signInButton = document.querySelector(".headerLinks button");

    if (signInButton) {

        signInButton.addEventListener("click", function () {

            let modal = document.getElementById("signInModal");

            
            if (!modal) {

                modal = document.createElement("div");
                modal.id = "signInModal";
                modal.className = "modal fade";
                modal.tabIndex = -1;
                modal.setAttribute("aria-labelledby", "signInTitle");
                modal.setAttribute("aria-hidden", "true");

                modal.innerHTML = `
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h5 class="modal-title" id="signInTitle">
                                    Connexion 
                                </h5>

                                <button type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Fermer">
                                </button>
                            </div>

                            <div class="modal-body">

                                <form id="signInForm">

                                    <div class="mb-3">
                                        <label for="email"
                                            class="form-label">
                                            Adresse e-mail
                                        </label>

                                        <input type="email"
                                            class="form-control"
                                            id="email"
                                            placeholder="exemple@email.com"
                                            required>
                                    </div>

                                    <div class="mb-3">
                                        <label for="password"
                                            class="form-label">
                                            Mot de passe
                                        </label>

                                        <input type="password"
                                            class="form-control"
                                            id="password"
                                            placeholder="Votre mot de passe"
                                            required>
                                    </div>

                                    <button type="submit"
                                        class="btn btn-primary w-100">
                                        Se connecter
                                    </button>

                                </form>

                                

                            </div>
                        </div>
                    </div>
                `;

                document.body.appendChild(modal);
            }

            
            if (window.bootstrap && window.bootstrap.Modal) {

                const modalInstance =
                    bootstrap.Modal.getOrCreateInstance(modal);

                modalInstance.show();

            } else {

                alert(
                    "Bootstrap JavaScript n'est pas chargé correctement."
                );
            }
        });
    }


   

    document.addEventListener("submit", function (event) {

        if (event.target.id === "signInForm") {

            event.preventDefault();

            const email = document.getElementById("email").value.trim();

            const password =
                document.getElementById("password").value;

            if (email === "" || password === "") {
                alert("Veuillez remplir tous les champs.");
                return;
            }

            alert(
                "Formulaire envoyé avec succès !\n" +
                "Adresse e-mail : " + email +
                "\n\nCeci est une démonstration. " +
                "Aucune authentification réelle n'a été effectuée."
            );
        }
    });


    


});
