document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de Frequência
    var ctxAttendance = document.getElementById('attendanceChart').getContext('2d');
    var attendanceChart = new Chart(ctxAttendance, {
        type: 'bar',
        data: {
            labels: ['Curso 1', 'Curso 2', 'Curso 3'],
            datasets: [{
                label: 'Presença (%)',
                data: [85, 90, 78],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Faltas (%)',
                data: [15, 10, 22],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de Desempenho Comparativo
    var ctxPerformance = document.getElementById('performanceChart').getContext('2d');
    var performanceChart = new Chart(ctxPerformance, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [{
                label: 'Turma A',
                data: [75, 80, 85, 90, 95, 100],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }, {
                label: 'Turma B',
                data: [70, 75, 80, 85, 90, 95],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de Resumo de Conclusões
    var ctxCompletion = document.getElementById('completionChart').getContext('2d');
    var completionChart = new Chart(ctxCompletion, {
        type: 'pie',
        data: {
            labels: ['Concluíram', 'Não Concluíram'],
            datasets: [{
                data: [60, 40],
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