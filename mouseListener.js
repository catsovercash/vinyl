const allArtistElements = document.querySelectorAll('.artists-class > div');

allArtistElements.forEach(artistElement => {
    artistElement.addEventListener('mouseenter', () => {

        const artistId = artistElement.className;

        const matchingAlbums = document.querySelectorAll(`.${artistId}-album`);

        matchingAlbums.forEach(album => {
            album.classList.add('highlight');
        });

    });

    artistElement.addEventListener('mouseleave', () => {

        const artistId = artistElement.className;

        const matchingAlbums = document.querySelectorAll(`.${artistId}-album`);

        matchingAlbums.forEach(album => {
            album.classList.remove('highlight');
        });

    });
});