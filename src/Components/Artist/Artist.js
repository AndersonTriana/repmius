import React, { Component } from 'react'
import './Artist.css'

class Artist extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            <div className='artist'>
                <div className='artist-header'>

                    <img className='artist-background' src=''/>

                    <div className='verified'>
                        <i class="fas fa-check-circle"/>

                        <h4 className='comment'>Artista verificado</h4>
                    </div>

                    <h3 className='artist-name'>Kendrick Lamar</h3>

                    <p className='artist-listeners'>20'265.327</p>

                </div>

                <div className='popular'>
                    <h3 className='popular-title'>Popular</h3>

                    
                </div>

                <div className='albums'>
                    <h3 className='albums-title'>Álbumes</h3>


                </div>

                <div className='singles'>
                    <h3 className='singles-title'>Sencillos y EP's</h3>

                </div>

                <div className='appears'>
                    <h3 className='appears-title'>Aparece en</h3>

                </div>
            </div>
        )
    }
}

export default Artist