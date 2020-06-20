import React, { Component } from 'react'
import './Song.css'
import Album from '../../Images/album.jpg'

class Song extends Component {
    constructor() {
        super() 

        this.state = {            
            isPlaying: false 
        }
    }

    render() {
        return(
            <div className='song'>
                
                <button className='play'><i class="fas fa-play"></i></button>

                <img className='album' src={Album}></img>

                <h4 className='name'>DNA</h4>
                <p className='artist'>Kendrick Lamar</p>

                <p className='duration'>4:40</p>
            </div>
        )
    }
    
}

export default Song