// Declare chart
const ctx1 = document.getElementById('patient-one');
const ctx2 = document.getElementById('patient-two');

new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['0', '4', '8', 'TH', 'FR', 'SA', 'SU'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3, 4],
            backgroundColor: 'rgb(92, 166, 203)',
            borderRadius: 10
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['0', '4', '8', 'TH', 'FR', 'SA', 'SU'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3, 4],
            backgroundColor: 'rgb(92, 166, 203)',
            borderRadius: 10
        }]
    },
    options: {  
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true
            }
        }
    }
});