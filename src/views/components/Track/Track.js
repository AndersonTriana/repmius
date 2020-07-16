import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
    constructor() {
        super(); 

        this.state = {            
            isPlaying: false 
        };
    }

    render() {
        return(
            <div className='track'>

                <button className='play'><i className="fas fa-play"></i></button>

                <img className='track-album' src={''} alt='Album'/>

                <h4 className='track-name'>{'DNA'}</h4>
                <p className='track-artist'>{'Kendrick Lamar'}</p>

                <p className='duration'>{'4:40'}</p>

            </div>
        );
    }
    
}

export default Track;