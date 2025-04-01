document.addEventListener('DOMContentLoaded', function() {
    var ctxProgress = document.getElementById('progressChart').getContext('2d');
    var progressChart = new Chart(ctxProgress, {
        type: 'doughnut',
        data: {
            labels: ['Concluído', 'Pendente'],
            datasets: [{
                data: [70, 30], // Exemplo de dados de progresso
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
});