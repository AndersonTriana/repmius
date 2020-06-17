import React from 'react'
import './Item.css'

function Item(props) {
    return(
        <div className='item'>
            <img className='item-img' src={props.data.img}></img>

            <h3 className='item-name'></h3>
        </div>
    )
}

export default Item













