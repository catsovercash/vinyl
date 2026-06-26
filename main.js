import { artists } from "./models/artistData.js";
import { renderArtists } from "./render/renderArtist.js";
import { albums } from "./models/albumData.js";
import { renderAlbums } from "./render/renderAlbum.js";
import { attachArtistListeners } from "./listeners/artistListeners.js";
import { attachAlbumListeners } from "./listeners/albumListeners.js";
import { attachStartListener } from "./listeners/startListeners.js";

renderArtists(artists);
renderAlbums(albums);
attachArtistListeners();
attachAlbumListeners();
attachStartListener();