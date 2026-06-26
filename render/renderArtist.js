export function renderArtists(artists) {

    const artistsContainer = document.getElementById("artists");

    artists.forEach(artist => {
        const artistHTML = `
    <div class="${artist.id}">
         <a href="${artist.link}" draggable="false">
            <img src="${artist.image}" alt="${artist.name}" draggable="false">
        </a>
        <h3>${artist.name}</h3>
    </div>
    `;

        artistsContainer.innerHTML += artistHTML;

    });

}


