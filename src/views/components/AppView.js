import React, { Component } from 'react';
import Item from './Item/Item'
import Search from './Search/Search'
import Track from './Track/Track'
import Player from './Player/Player'
import Album from './Album/Album'
import Artist from './Artist/Artist'


class AppView extends Component {
    render(props) {

        if (props.onScreen == 'home') {
            return (
                <div>

                    <Album />
                    <Artist />
                </div>
            );
        } else {
            return (
                <div>
                    <Search />
                    <Track />
                    <Item />
                    <Player />
                </div>
            );
        }
    }
}

export default AppView;