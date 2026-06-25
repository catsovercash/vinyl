const albums = [
    {
        artistId: "beabadobee",
        name: "Beatopia",
        id: "beatopia",
        image: "resource/image/albums-cover/beatopia.jpg",
        link: ""
    },

    {
        artistId: "beabadobee",
        name: "This Is How Tomorrow Ends",
        id: "thisishowtommorowends",
        image: "resource/image/albums-cover/thisishowtommorowends.jpg",
        link: ""
    },

    {
        artistId: "lizzymcalpine",
        name: "Older, Wiser",
        id: "olderwiser",
        image: "resource/image/albums-cover/olderwiser.jpg",
        link: ""
    }
]

const albumsContainer = document.getElementById("albums");

albums.forEach(album => {
    const albumHTML = `
    <div class="album ${album.artistId}-album">
        <a href="${album.link}" draggable="false" rel="noopener" target="_blank">
            <img src="${album.image}" alt="${album.name}" draggable="false">
        </a>
    </div>
    `;

    albumsContainer.innerHTML += albumHTML;
});