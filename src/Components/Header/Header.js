import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-section'>
           <h2>My Hero Academia</h2>
           <h3>My Favourite Anime Series Characters</h3>
           <h3>Total Power Cost: <span className = 'total-cost'>1500 </span>Quirk Level</h3>


        </div>
    );
};



export default Header;