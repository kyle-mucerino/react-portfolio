import React from 'react';
import coverImage from '../assets/coverImage';

function Header(props) {

  return (
    <header className='flex-row space between px-1'>
      <h1>Kyle Mucerino</h1>
      <img src={coverImage} alt='cup of tea and business card'></img>
      {props.children}
    </header>
  );
}

export default Header;