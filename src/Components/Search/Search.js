import React, { Component } from 'react'
import './Search.css'
import Logo from '../../Images/logo.png'

class Search extends Component {
    constructor() {
        super()

        this.state = {
            text: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        const { search } = this.state

        return(
            <div className='header'>

                <div className='search'>
                    <input 
                        className='text' 
                        type='text'
                        name='text' 
                        placeholder='Buscar artista, canción o álbum '
                        onChange={this.handleChange} 
                        value={search}
                    ></input>

                    <button className='button'>Buscar</button>
                </div>

                <img className='logo' src={Logo}></img>
            </div>
        )
    }
}

export default Search