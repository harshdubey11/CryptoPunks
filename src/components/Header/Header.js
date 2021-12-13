import React from 'react'
import './Header.css';
function Header() {
    return (
        <div className='header'>
         <div className='logo-container'>
             <img src='images/cryptopunk-logo.png' className='logo'></img>
         </div>

         <div className='searchBar'>
                <div className='search-icon-container'>
                <img src='images/search.png'/>
        </div>
        <input className='inputBar' placeholder='Collection , item or user...'></input>
        </div>

        <div className='header-items'>
            <p>Drop</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>

        <div className='header-actions'>
            <div className='theme-logo-container'>
                <img src="images/theme-switch.png"/>
            </div>
        </div>

        <div className='login'>
            GET IN
        </div>


        </div>
    )
}

export default Header;

