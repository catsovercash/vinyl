export function attachAlbumListeners() {

    const allAlbumElements = document.querySelectorAll('.albums-class > div');

    allAlbumElements.forEach(albumElement => {

        const audio = albumElement.querySelector('.album-audio');

        albumElement.addEventListener('mouseenter', () => {
            if (audio) {
                audio.volume = 0.3;
                audio.play().catch(error => console.warn("Audio playback failed:", error));
            }
        });

        albumElement.addEventListener('mouseleave', () => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        });

    });

}