// Create a check gallery section that will have text and button to go to gallery page and a couple of images from gallery
import image1 from '../images/gallery/6.jpg';
import image2 from '../images/gallery/7.jpg';
import image3 from '../images/gallery/8.jpg';
import image4 from '../images/gallery/5.jpg';
import { Link } from 'react-router-dom';

const CheckGallery = () => {
    return (
        <div className="check-gallery">
            <div className="gallery-heading g-section">
                <h1>Galeria</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, beatae expedita dolore ratione voluptatem vitae architecto totam alias eius laudantium veritatis libero tempore! Sunt porro facere hic fugiat, debitis accusantium.</p>
            </div>
            <div className="gallery-images g-section">
                <div className="g-image">
                    <img src={image1} alt="Gallery image"/>
                </div>
                <div className="g-image">
                    <img src={image2} alt="Gallery image"/>
                </div>
                <div className="g-image">
                    <img src={image3} alt="Gallery image"/>
                </div>
                <div className="g-image">
                    <img src={image4} alt="Gallery image"/>
                </div>
            </div>

            <div className="gallery-heading g-button">
                <Link to="/gallery" className='btng'>Zobacz więcej</Link>
            </div>
            
        </div>
    );
}

export default CheckGallery;