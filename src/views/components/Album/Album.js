import React, { Component } from 'react';
import './Album.css';

class Album extends Component {

    render() {
        return (
            <div className='album'>

                <div className='album-header'>

                    <img className='album-img' src={''} alt='Album'/>

                    <h2 className='album-name'>{'DAMN.'}</h2>

                    <div className='info'>

                        <img className='artist-img' src={''}/>
                        <i className="fas fa-circle-notch"></i>

                        <p className='artist-name'>{'Kendrick Lamar'}</p>
                        <i className="fas fa-circle-notch"></i>

                        <p className='album-date'>{'Dic, 2018'}</p>
                        <i className="fas fa-circle-notch"></i>

                        <p className='album-duration'>{'45:38'}</p>

                    </div>

                </div>

                <div className='album-songs'>

                </div>

                <footer>
                    <h3>{'Copyright Sony Music 2018'}</h3>
                </footer>

            </div>
        );
    }
}

export default Album;