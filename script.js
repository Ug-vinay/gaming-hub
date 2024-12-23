document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const toggleTheme = document.createElement('button');
    toggleTheme.innerText = 'Toggle Theme';
    toggleTheme.style.position = 'fixed';
    toggleTheme.style.top = '20px';
    toggleTheme.style.right = '20px';
    toggleTheme.style.padding = '10px 20px';
    toggleTheme.style.background = '#007bff';
    toggleTheme.style.color = '#fff';
    toggleTheme.style.border = 'none';
    toggleTheme.style.borderRadius = '5px';
    toggleTheme.style.cursor = 'pointer';
    document.body.appendChild(toggleTheme);

    toggleTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    // Dark Theme Styles
    const darkStyles = document.createElement('style');
    darkStyles.innerHTML = `
        body.dark-theme {
            background-color: #121212;
            color: #ddd;
        }

        header {
            background-color: #1e1e1e;
        }

        .game-card {
            background-color: #1e1e1e;
            color: #ddd;
        }

        footer {
            background-color: #1e1e1e;
        }
    `;
    document.head.appendChild(darkStyles);

    // Countdown Timer for Tournaments
    const tournamentTimer = document.querySelector('.tournaments-section .cta-button');
    if (tournamentTimer) {
        const countdown = document.createElement('p');
        countdown.style.fontSize = '1.2rem';
        countdown.style.marginTop = '15px';
        countdown.style.color = '#ffc107';
        tournamentTimer.parentElement.appendChild(countdown);

        function updateCountdown() {
            const eventDate = new Date('2024-12-31T00:00:00');
            const now = new Date();
            const timeDiff = eventDate - now;

            if (timeDiff <= 0) {
                countdown.innerText = 'Tournament Live Now!';
            } else {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
                countdown.innerText = `${days} Days ${hours} Hours ${minutes} Minutes Remaining`;
            }
        }

        setInterval(updateCountdown, 1000);
    }

    
});
