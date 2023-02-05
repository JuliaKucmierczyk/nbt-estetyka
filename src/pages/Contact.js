import { Icon } from 'react-icons-kit';
import {phone} from 'react-icons-kit/icomoon/phone';
import {facebook2} from 'react-icons-kit/icomoon/facebook2';
import {instagram} from 'react-icons-kit/icomoon/instagram';
import {office} from 'react-icons-kit/icomoon/office';
import {clock} from 'react-icons-kit/icomoon/clock';
import Maps from '../components/Maps';

const color = '#f5f5f5';

export default function Contact() {
    return (
        <div className='contact-container'>
            <div className="first-row">
                <div className='link-wrapper '>
                <h3><Icon icon={phone} size={25} className='iconka'/> KONTAKT</h3>
                <div className='phone-number'>
                     <p> +48 500 500 500</p>
                </div>
                <div className='email'>
                     <p>nbt.estetyka@gmail.com</p>
                </div>
                <div className='facebook'>
                    <p><a href='https://www.facebook.com/'>Facebook</a></p>
                </div>
                <div className='instagram'>
                    <p><a href="https://www.instagram.com/">Instagram</a></p>
                </div>
            </div>
            <div className='opening-hours'>
                <h3><Icon icon={clock} size={25} className='iconka'/> GODZINY OTWARCIA</h3>
                <p>Poniedziałek - Piątek: 9:00 - 18:00</p>
                <p>Sobota: 9:00 - 14:00</p>
                <p>Niedziela: Nieczynne</p>
            </div>
            <div className='adres'>
                <h3><Icon icon={office} size={25} className='iconka'/>  ADRES</h3>
                <p>ul. Nieznana 3</p>
                <p>31-421 Kraków</p>
            </div>
        </div>
        <div className='second-row'>
            <Maps />
        </div>
        </div>
    );
}