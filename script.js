// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Declare chart
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3, 4],
            backgroundColor: 'rgba(75, 192, 192, 1)',
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