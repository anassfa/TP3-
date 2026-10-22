
document.addEventListener("DOMContentLoaded", function () {


    const searchForm = document.querySelector(".searchBar");
    const searchInput = document.querySelector(
        '.searchBar input[type="search"]'
    );

    const gameCards = document.querySelectorAll(
        ".trendingCard .card, .mostCards .card"
    );

    let searchMessage = document.getElementById("searchMessage");

   
    if (searchForm && !searchMessage) {
        searchMessage = document.createElement("p");
        searchMessage.id = "searchMessage";
        searchMessage.className = "text-center mt-3";
        searchForm.insertAdjacentElement("afterend", searchMessage);
    }

   
    function rechercherJeux() {
        if (!searchInput) return;

        const recherche = searchInput.value.trim().toLowerCase();
        let nombreResultats = 0;

        gameCards.forEach(function (card) {
            const nomJeu = card.textContent.toLowerCase();
            const correspond = recherche === "" || nomJeu.includes(recherche);

            card.style.display = correspond ? "" : "none";

            if (correspond) {
                nombreResultats++;
            }
        });

        if (searchMessage) {
            if (recherche === "") {
                searchMessage.textContent = "Tous les jeux sont affichés.";
            } else if (nombreResultats === 0) {
                searchMessage.textContent = "Aucun jeu trouvé.";
            } else {
                searchMessage.textContent =
                    nombreResultats + " résultat(s) trouvé(s).";
            }
        }
    }

    if (searchForm && searchInput) {
        searchForm.addEventListener("submit", function (event) {
            event.preventDefault();
            rechercherJeux();
        });

       
        searchInput.addEventListener("input", function () {
            if (searchInput.value.trim() === "") {
                rechercherJeux();
            }
        });
    }


    

    const viewAllButtons = document.querySelectorAll(
        ".trendingHeader .btn, .mostHeader .btn"
    );

    viewAllButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "shop.html";
        });
    });


   

    const signInButton = document.querySelector(".headerLinks button");

    if (signInButton) {
        signInButton.addEventListener("click", function (event) {
            event.preventDefault();

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
                                        <label for="signInEmail"
                                            class="form-label">
                                            Adresse e-mail
                                        </label>

                                        <input type="email"
                                            class="form-control"
                                            id="signInEmail"
                                            name="email"
                                            placeholder="exemple@email.com"
                                            autocomplete="email"
                                            required>
                                    </div>

                                    <div class="mb-3">
                                        <label for="signInPassword"
                                            class="form-label">
                                            Mot de passe
                                        </label>

                                        <input type="password"
                                            class="form-control"
                                            id="signInPassword"
                                            name="password"
                                            placeholder="Votre mot de passe"
                                            autocomplete="current-password"
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
                    window.bootstrap.Modal.getOrCreateInstance(modal);

                modalInstance.show();
            } else {
                alert(
                    "Bootstrap JavaScript n'est pas chargé correctement."
                );
            }
        });
    }


    
    document.addEventListener("submit", function (event) {
        if (event.target.id !== "signInForm") {
            return;
        }

        event.preventDefault();

        const email = document
            .getElementById("signInEmail")
            .value.trim();

        const password = document
            .getElementById("signInPassword")
            .value;

        if (email === "" || password.trim() === "") {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        alert(
            "Formulaire envoyé avec succès !\n\n" +
            "Adresse e-mail : " + email +
            "\n\nCeci est une démonstration. " +
            "Aucune authentification réelle n'a été effectuée."
        );

       
        const modal = document.getElementById("signInModal");

        if (modal && window.bootstrap && window.bootstrap.Modal) {
            window.bootstrap.Modal.getOrCreateInstance(modal).hide();
        }

        event.target.reset();
    });

});
