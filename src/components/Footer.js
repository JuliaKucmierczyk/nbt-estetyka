import React from "react";
import {facebook2} from 'react-icons-kit/icomoon/facebook2';
import {instagram} from 'react-icons-kit/icomoon/instagram';
import {phone} from 'react-icons-kit/icomoon/phone';
import {mail} from 'react-icons-kit/icomoon/mail';
import Icon from "react-icons-kit";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-icons'>
                <a href='https://www.facebook.com/'><Icon icon={facebook2} size={25} className='iconka'/></a>
                <a href="https://www.instagram.com/"><Icon icon={instagram} size={25} className='iconka'/></a>
                <Icon icon={mail} size={25} className='iconka'/>
                <Icon icon={phone} size={25} className='iconka'/>    
            </div>
        </div>
    )
}


export default Footer