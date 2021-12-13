import React from 'react'
import { useState,useEffect } from 'react/cjs/react.development';
import './Main.css';
function Main({selectedPunk , punklistdata}) {
const[activepunk,setactivepunk]=useState(punklistdata[0]);

useEffect(() => {
  setactivepunk(punklistdata[selectedPunk])
}, [punklistdata,selectedPunk])

    return (
        <div className='main'>
        <div className='main-content'>
            <div className='punkHighlight'>
                <div className='punk-container'>
                    <img src={activepunk.image_original_url} className='selected-punk'></img>
                </div>
            </div>

            <div className='punk-details'>
                <div className='title'>
                    {activepunk.name}
                </div>
                <span className='item-number'>#{activepunk.token_id}</span>
                <div className='owner'>
                <div className='owner-img'>
                    <img src={activepunk.owner.profile_img_url}></img>
                </div>
                <div className='owner-details'>
                    <div className='owner-name-handle'>
                        <div className='owner-address'>{activepunk.owner.address}</div>
                        <div className='owner-handle'>@harshdubey</div>
                    </div>
                        <div className='ownerlink'><img src="images/instagram.png"></img></div>
                        <div className='ownerlink'><img src="images/twitter.png"></img></div>
                        <div className='ownerlink'><img src="images/more.png"></img></div>
                </div>
            </div>
            </div>
           
        </div>
            
        </div>
    )
}

export default Main
