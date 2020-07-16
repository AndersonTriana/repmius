import Immutable from 'immutable';

const Track = Immutable.Record({
    href: "",
    id: "",
    type: "track",
    name: "",
    popularity: 0,
    disc_number: 0,
    duration_ms: 0,
    explicit: false,
    preview_url: "",
    track_number: 0,
    album: {},
    artists: [],
});

export default Track;