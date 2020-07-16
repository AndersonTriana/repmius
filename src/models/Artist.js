import Immutable from 'immutable';

const Artist = Immutable.Record({
    href: "",
    id: "",
    type: "artist",
    name: "",
    popularity: 0,
    followers: {
        total: 0,
    },
    images: [
        {
            height: 0,
            url: "",
            width: 0,
        },
        {
            height: 0,
            url: "",
            width: 0,
        },
        {
            height: 0,
            url: "",
            width: 0,
        },
    ],
});

export default Artist;