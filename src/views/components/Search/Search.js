import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    constructor() {
        super();

        this.state = {
            text: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    render() {
        const { text } = this.state;

        return (
            <div className='header'>

                <img className='logo' src={''} alt='Logo' />

                <div className='search'>
                    <input
                        className='text'
                        type='text'
                        name='text'
                        placeholder='Buscar artista, canción o álbum'
                        onChange={this.handleChange}
                        value={text}
                    ></input>

                    <button className='button'><strong>Buscar</strong></button>
                </div>

            </div>
        );
    }
}

export default Search;