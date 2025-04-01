document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('progressChart').getContext('2d');
    const progressChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [{
                label: 'Progresso dos Alunos',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    enabled: true,
                    mode: 'index',
                    intersect: false,
                },
                legend: {
                    display: true,
                    position: 'top',
                }
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Controle da barra lateral em dispositivos móveis
    const menuIcon = document.getElementById('menu-icon');
    const Blateral = document.getElementById('Blateral');

    if (menuIcon && Blateral) { // Verifica se os elementos existem
        menuIcon.addEventListener('click', function () {
            // Alterna a classe 'active' para mostrar/esconder a barra lateral
            Blateral.classList.toggle('active');

            // Atualiza a posição da barra lateral para aparecer/desaparecer
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