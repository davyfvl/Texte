let hamburger = 0;
const Navegacao = document.querySelector(".base");
const MenuHamburger = document.querySelector("#MenuHamburger");
const navegacao = document.querySelector(".navegacao")

MenuHamburger.addEventListener("click", function() {
    if (hamburger === 1) {
        MenuHamburger.style.animationName = "none";
        MenuHamburger.style.animationDuration = "none";
        MenuHamburger.style.animationFillMode = "none";

        MenuHamburger.style.animationName = "rodar0";
        MenuHamburger.style.animationDuration = "1s";
        MenuHamburger.style.animationFillMode = "forwards";

        Navegacao.style.display = "none";
        hamburger = 0;

    } else {
        MenuHamburger.style.animationName = "none";
        MenuHamburger.style.animationDuration = "none";
        MenuHamburger.style.animationFillMode = "none";
        // Iniciar a animação
        MenuHamburger.style.animationName = "rodar";
        MenuHamburger.style.animationDuration = "1s";
        MenuHamburger.style.animationFillMode = "forwards"; // Adiciona isso para manter o estado final da animação
        
        Navegacao.style.display = "block";
        hamburger = 1;
    }
});
