const counterDisplay = document.querySelector('h3');
let counter = 0;


const bubbleMaker = () => {
        // Créer une bulle
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble)

    // Taille random des bulles
    const size = [Math.round(Math.random() * 300)] + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    // Position random des bulles
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%");

    bubble.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter; 
        bubble.remove();
    })

    // Supprimer la bulle à la fin de l'animation
    setTimeout(() => {
        bubble.remove();
    }, 8000);
};

setInterval(bubbleMaker, 300);

