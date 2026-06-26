export function renderAlbums(albums) {

    const albumsContainer = document.getElementById("albums");

    albums.forEach(album => {
        const albumHTML = `
    <div class="album ${album.artistId}-album">
        <a href="${album.link}" draggable="false">
            <img src="${album.image}" alt="${album.name}" draggable="false">
        </a>
        <audio class="album-audio" src="${album.audio}" preload="none" loop></audio>
    </div>
    `;

        albumsContainer.innerHTML += albumHTML;
    });
}

