import React from 'react';
import '../styles.css';

const currentYear = new Date().getFullYear();

export default function Footer(){
    return(
        <>
        <footer>
        © {currentYear} Moviedux,  All rights reserved.
        </footer>
        </>
    );
}