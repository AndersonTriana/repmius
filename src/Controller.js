import React, { Component } from 'react'
import Item from './Components/Item/Item'
import Search from './Components/Search/Search'
import Song from './Components/Song/Song' 

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
            </div>
            
        )
    }
}

export default Controller
