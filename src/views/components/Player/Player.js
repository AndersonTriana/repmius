import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Player.css'

function Player() {
    return (
        <div className='player'>

            <img className='player-photo' src={''} alt='album' />

            <div className='player-info'>
                <h3 className='player-name'>{'DNA'}</h3>
                <p className='player-artist'>{'Kendrick Lamar'}</p>
            </div>

            <ReactAudioPlayer
                className='player-controls'
                src={''}
                autoPlay
                controls
            />
        </div>
    );
}

export default Player;