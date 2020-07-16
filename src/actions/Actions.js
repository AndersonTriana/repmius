import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

const Actions = {
    showArtist(id) {
        Dispatcher.dispatch({
            type: ActionTypes.GET_ARTIST,
            id
        });
    },

    showArtistTracks(id) {
        Dispatcher.dispatch({
            type: ActionTypes.GET_ALBUM_TRACKS,
            id,
        });
    },

    showTopTracks(id) {
        Dispatcher.dispatch({
            type: ActionTypes.GET_TOP_TRACKS,
            id,
        });
    },

    showTopArtists(url) {
        Dispatcher.dispatch({
            type: ActionTypes.GET_TOP_ARTISTS,
            url,
        });
    },

    showAlbum(id) {
        Dispatcher.dispatch({
            type: ActionTypes.GET_ALBUM,
            id,
        });
    },

    showAlbums(id) {
        Dispatcher.dispatch({
            type:ActionTypes.GET_ALBUMS,
            id,
        });
    },

    showAlbumTracks(id) {
        Dispatcher.dispatch({
            type: ActionTypes.GET_ALBUM_TRACKS,
            id,
        });
    }
};

export default Actions;