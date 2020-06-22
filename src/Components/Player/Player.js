import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import PlayerPhoto from '../../Images/album.jpg'

function Player() {
    return (
        <div className='player'>
            <div className='player-info'>
                <img className='player-photo' src={PlayerPhoto} alt='Song image'/>

                <h3 className='player-name'>DNA</h3>
                <p className='player-artist'>Kendrick Lamar</p>
            </div>

            <ReactAudioPlayer
                src=""
                autoPlay
                controls
            />
        </div>
    )
}

export default Player