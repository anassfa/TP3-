 document.addEventListener("DOMContentLoaded", function () {

            const games = {
                "assassins-creed": {
                    name: "Assassin's Creed",
                    category: "Action",
                    image: "images/trending-01.jpg",
                    description: "Discover an action-packed historical adventure.",
                    platform: "Depends on the edition"
                },
                "cyberpunk-2077": {
                    name: "Cyberpunk 2077",
                    category: "RPG",
                    image: "images/trending-02.jpg",
                    description: "Explore a futuristic open world and experience a story-driven RPG.",
                    platform: "PC and supported consoles"
                },
                "fortnite": {
                    name: "Fortnite",
                    category: "Survival",
                    image: "images/trending-03.jpg",
                    description: "Compete, build and survive in an exciting multiplayer world.",
                    platform: "Depends on the version"
                },
                "minecraft": {
                    name: "Minecraft",
                    category: "Sandbox",
                    image: "images/top-game-06.jpg",
                    description: "Build, explore and create your own world.",
                    platform: "Multiple platforms"
                },
                "pubg": {
                    name: "PUBG",
                    category: "Battle Royale",
                    image: "images/top-game-01.jpg",
                    description: "Compete against other players to become the last survivor.",
                    platform: "Depends on the version"
                },
                "apex-legends": {
                    name: "Apex Legends",
                    category: "Shooter",
                    image: "images/top-game-02.jpg",
                    description: "Join a squad and compete in a fast-paced hero shooter.",
                    platform: "Supported PC and console platforms"
                },
                "racing": {
                    name: "Racing Games",
                    category: "Racing",
                    image: "images/categories-02.jpg",
                    description: "Discover racing games and enjoy high-speed competition.",
                    platform: "Depends on the selected game"
                },
                "dota-2": {
                    name: "Dota 2",
                    category: "MOBA",
                    image: "images/top-game-05.jpg",
                    description: "Work with your team in a competitive strategy game.",
                    platform: "PC"
                }
            };

            const params = new URLSearchParams(window.location.search);
            const gameId = params.get("game") || "assassins-creed";
            const game = games[gameId];

            if (!game) {
                document.getElementById("gameTitle").textContent =
                    "Game not found";

                document.getElementById("gameDescription").textContent =
                    "This game is not available in our demonstration catalogue.";

                document.getElementById("buyButton").disabled = true;
                return;
            }

            document.title = game.name + " - LUGX Gaming";

            document.getElementById("gameTitle").textContent = game.name;
            document.getElementById("gameCategory").textContent = game.category;
            document.getElementById("gameCategoryInfo").textContent = game.category;
            document.getElementById("gameImage").src = game.image;
            document.getElementById("gameImage").alt = game.name;
            document.getElementById("gameDescription").textContent =
                game.description;
            document.getElementById("gameLongDescription").textContent =
                game.description;
            document.getElementById("gamePlatform").textContent = game.platform;

            document.getElementById("buyButton").addEventListener("click", function () {
                document.getElementById("buyMessage").textContent =
                    "Demo only: checkout is not yet available.";
            });
        });