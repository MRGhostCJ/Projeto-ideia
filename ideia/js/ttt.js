document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript carregado!"); // Verifica se o script está rodando

    const menuIcon = document.getElementById('menu-icon');
    const Blateral = document.getElementById('Blateral');

    console.log("menuIcon:", menuIcon); // Verifica se o ícone foi encontrado
    console.log("Blateral:", Blateral); // Verifica se a barra lateral foi encontrada

    if (menuIcon && Blateral) { 
        menuIcon.addEventListener('click', function () {
            console.log("Clicou no menu!"); // Verifica se o clique está funcionando

            Blateral.classList.toggle('active');

            if (Blateral.classList.contains('active')) {
                Blateral.style.transform = "translateX(0)";
            } else {
                Blateral.style.transform = "translateX(-100%)";
            }
        });
    } else {
        console.error("Erro: Elementos não encontrados!");
    }
});
