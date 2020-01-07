import React from 'react';
import logoImage from '../assets/logo.png';
import fbImage from '../assets/facebook.png';
import instaImage from '../assets/insta.png';
import twitterImage from '../assets/twitter.png';

function Footer() {
    return (
        <body>
            <div className='logo'>
                <img src={logoImage} alt="The Toast Club Logo" width="140" height="130"></img>
            </div>
            <div className='social-media'>
                <img src={instaImage} alt="Instagram Link" width="60" height="55"></img>
                <img src={fbImage} alt="Facebook Link" width="60" height="60"></img>
                <img src={twitterImage} alt="Twitter Link" width="60" height="55"></img>
            </div>
        </body>
    );
}

export default Footer;