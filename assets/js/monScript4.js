document.addEventListener("DOMContentLoaded", function () {

            const form = document.getElementById("contactForm");
            const feedback = document.getElementById("contactFeedback");

            form.addEventListener("submit", function (event) {
                event.preventDefault();

                if (!form.checkValidity()) {
                    form.reportValidity();
                    return;
                }

                feedback.className = "mt-3 mb-0 text-success";
                feedback.textContent =
                    "Your form is valid. Message sending is not configured yet.";

                // Réinitialiser les champs après validation de démonstration
                form.reset();
            });
        });