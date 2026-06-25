const artists = [
    {
        name: "Beabadobee",
        id: "beabadobee",
        image: "resource/image/artists/beabadobee.jpg",
        link: ""
    },

    {
        name: "Lizzy McAlpine",
        id: "lizzymcalpine",
        image: "resource/image/artists/lizzymcalpine.jpg",
        link: ""
    }
]

const artistsContainer = document.getElementById("artists");


artists.forEach(artist => {
    const artistHTML = `
    <div class="${artist.id}">
         <a href="${artist.link}" draggable="false" rel="noopener" target="_blank">
            <img src="${artist.image}" alt="${artist.name}" draggable="false">
        </a>
        <h3>${artist.name}</h3>
    </div>
    `;

    artistsContainer.innerHTML += artistHTML;

});