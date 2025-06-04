// script.js

document.addEventListener("DOMContentLoaded", function() {
    const typedTextSpan = document.querySelector(".typed-text");
    const textArray = ["Designer", "Developer", "Freelancer"];
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        const currentText = textArray[textArrayIndex];
        const currentChar = currentText.slice(0, ++charIndex);
        typedTextSpan.textContent = currentChar;
        if (currentChar.length === currentText.length) {
            textArrayIndex++;
            charIndex = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 200);
        }
    }

    type();

    // Smooth scroll untuk tautan menu
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});
