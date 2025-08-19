import React from 'react';
import '../styles.css';

export default function Header(){
    return(
        <>
        <img className='logo' src='/logo.png'alt='moviedux' />
        <h3>It's time for popcorn, find you next movie here !</h3>
        </>
    );
}