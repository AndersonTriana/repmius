import Immutable from 'immutable';

const Album = Immutable.Record({

    href: "",
    id: "",
    type: "album",
    name: "",
    release_date: "",
    release_date_precision: "",
    total_tracks: 0,
    album_type: "",
    album_group: "",
    label: "",
    images: [],
    artists: [],
    tracks: [],
});

export default Album;