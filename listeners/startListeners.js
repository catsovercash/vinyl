export function attachStartListener() {

    const overlay = document.getElementById('start-overlay');
    const startBtn = document.getElementById('start-button');

    startBtn.addEventListener('click', () => {
        overlay.style.opacity = 0;
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    })

}