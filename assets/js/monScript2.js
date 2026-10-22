
        document.addEventListener("DOMContentLoaded", function () {
            const cards = document.querySelectorAll(".shop-game");
            const filters = document.querySelectorAll("[data-category]");
            const searchForm = document.querySelector(".searchBar");
            const searchInput = searchForm.querySelector('input[type="search"]');
            const message = document.getElementById("shopMessage");

            let selectedCategory = "all";

            function filterGames() {
                const query = searchInput.value.trim().toLowerCase();
                let count = 0;

                cards.forEach(function (card) {
                    const category = card.dataset.category;
                    const text = card.textContent.toLowerCase();

                    const matchesCategory =
                        selectedCategory === "all" ||
                        category === selectedCategory;

                    const matchesSearch = text.includes(query);
                    const visible = matchesCategory && matchesSearch;

                    card.classList.toggle("d-none", !visible);

                    if (visible) count++;
                });

                message.textContent = count === 0
                    ? "No games found."
                    : count + " game(s) found.";
            }

            filters.forEach(function (button) {
                button.addEventListener("click", function () {
                    selectedCategory = button.dataset.category;

                    filters.forEach(function (item) {
                        item.classList.remove("btn-primary");
                        item.classList.add("btn-outline-primary");
                    });

                    button.classList.remove("btn-outline-primary");
                    button.classList.add("btn-primary");

                    filterGames();
                });
            });

            searchForm.addEventListener("submit", function (event) {
                event.preventDefault();
                filterGames();
            });

            searchInput.addEventListener("input", filterGames);

            filterGames();
        });