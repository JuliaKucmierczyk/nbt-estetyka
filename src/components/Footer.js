import React from "react";
import {facebook2} from 'react-icons-kit/icomoon/facebook2';
import {instagram} from 'react-icons-kit/icomoon/instagram';
import {phone} from 'react-icons-kit/icomoon/phone';
import {mail} from 'react-icons-kit/icomoon/mail';
import Icon from "react-icons-kit";
import {Link} from 'react-router-dom';
import Booksy from '../images/Booksy.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-icons'>
                <a href='https://www.facebook.com/'><Icon icon={facebook2} size={25} className='iconka'/></a>
                <a href="https://www.instagram.com/"><Icon icon={instagram} size={25} className='iconka'/></a>
                <Link to={"/Contact"}><Icon icon={mail} size={25} className='iconka'/></Link>
                <Link to={"/Contact"}>
                <Icon icon={phone} size={25} className='iconka'/>+48 123 456 789</Link>
                {/* <a href="https://www.booksy.com/pl-pl/"><img src={Booksy} alt="Booksy" className="booksy"/></a> */}
            </div>
        </div>
    )
}


export default Footer