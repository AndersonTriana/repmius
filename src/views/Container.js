import AppView from './components/AppView';
import { Container } from 'flux/utils';
import ArtistStore from '../stores/ArtistStore';
import AlbumStore from '../stores/AlbumStore';
import Actions from '../actions/Actions';

function getStores() {
    return [
        ArtistStore,
        AlbumStore,
    ];
}

function getState() {
    return {
        Artists: ArtistStore.getState(),
        Albums: AlbumStore.getState(),

        onScreen: 'home',

        onShowingArtist: Actions.showArtist,
        onShowingArtistTracks: Actions.showArtistTracks,
        onShowingTopTracks: Actions.showTopTracks,
        onShowingTopArtist: Actions.showTopArtists,
        onShowingAlbum: Actions.showAlbum,
        onShowingAlbums: Actions.showAlbums,
        onShowingAlbumTracks: Actions.showAlbumTracks,
    };
}

export default Container.createFunctional(AppView, getStores, getState);