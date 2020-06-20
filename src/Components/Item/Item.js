import React from 'react'
import './Item.css'
import Album from '../../Images/album.jpg'

function Item(props) {
    return(
        <div className='item'>
            <img className='img' src={Album} alt='image'></img>

            <button className='play'>
                <i class="fas fa-play"></i>
            </button>

            <h3 className='name'>DNA</h3>
            <p className='type'>Kendrick Lamar</p>
        </div>
    )
}

export default Item













