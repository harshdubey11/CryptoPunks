import React from 'react'
import './CollectionCard.css';
function CollectionCard({id,name,traits,image}) {
    return (
        <div className='collection-card'>
            <img src={image}></img>
            <div className='details'>
            <div className='name'>{name}<div className='id'>#{id}</div>
           
            </div>
            </div>
            <div className='price-container'>
                <img src="images/weth.png" className='weth-image'></img>
                <div className='price'>{traits[0]?.value}</div>
            </div>
        </div>
    )
}

export default CollectionCard
