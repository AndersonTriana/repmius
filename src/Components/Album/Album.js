import React, { Component } from 'react'
import './Album.css'
import AlbumPhoto from '../../Images/album.jpg'

class Album extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            <div className='album'>

                <div className='album-header'>

                    <img className='album-img' src={AlbumPhoto} alt='album photo'/>

                    <h2 className='album-name'>DAMN.</h2>

                    <div className='info'>

                        <img className='artist-img' src=''></img>
                        <i class="fas fa-circle-notch"></i>

                        <p className='artist-name'>Kendrick Lamar</p>
                        <i class="fas fa-circle-notch"></i>

                        <p className='album-date'>Dic, 2018</p>
                        <i class="fas fa-circle-notch"></i>

                        <p className='album-duration'>45:38</p>

                    </div>

                </div>

                <footer>
                    <h3>Copyright Sony Music 2018</h3>
                </footer>

            </div>
        )
    }
}

export default Album 