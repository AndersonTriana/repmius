import React from 'react'
import './Item.css';

function Item(props) {
    return(
        <div className='item'>
            <img className='img' src={''} alt='Album'/>

            <button className='play'>
                <i className="fas fa-play"></i>
            </button>

            <h3 className='name'>{'DNA'}</h3>
            <p className='type'>{'Kendrick Lamar'}</p>
        </div>
    );
}

export default Item;













