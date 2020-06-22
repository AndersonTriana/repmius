import React, { Component } from 'react'
import Item from './Components/Item/Item'
import Search from './Components/Search/Search'
import Song from './Components/Song/Song' 
import Player from './Components/Player/Player'
import Album from './Components/Album/Album'
import Artist from './Components/Artist/Artist'


class Controller extends Component {
    constructor() {
        super()

        this.state = {
            music: [],
            isLoading: false
        }

    }

    componentDidMount() {
        this.refreshState()
    }

    refreshState() {
        this.setState({ isLoading:true })
        const api = ' '
    }


    render() {
        return (
            <div>
                <Search />
                <Song />   
                <Item />
                <Player />
                <Album />
                <Artist />
            </div>
            
        )
    }
}

export default Controller
