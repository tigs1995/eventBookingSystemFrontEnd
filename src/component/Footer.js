import React from 'react';
import logoImage from '../assets/logo.png';
import fbImage from '../assets/facebook.png';
import instaImage from '../assets/insta.png';
import twitterImage from '../assets/twitter.png';

function Footer() {
    return (
        <body>
            <div className='logo'>
                <br/>
                <img src={logoImage} alt="The Toast Club Logo" width="140" height="130"></img>
            </div>
            <div className='social-media'>
                <a href="https://www.instagram.com/thetoastclubltd/?hl=en">
                <img src={instaImage} alt="Instagram Link" width="60" height="55"></img></a>
                <a href="https://www.facebook.com/TheToastClubLtd/">
                <img src={fbImage} alt="Facebook Link" width="60" height="60"></img></a>
                <a href="https://twitter.com/thetoastclubltd?lang=cs">
                <img src={twitterImage} alt="Twitter Link" width="60" height="55"></img></a>
            </div>
        </body>
    );
}

export default Footer;