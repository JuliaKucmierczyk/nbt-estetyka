// Create a check gallery section that will have text and button to go to gallery page and a couple of images from gallery
import image1 from '../images/gallery/6.jpg';
import image2 from '../images/gallery/7.jpg';
import image3 from '../images/gallery/8.jpg';
import image4 from '../images/gallery/5.jpg';
import { Link } from 'react-router-dom';
import {motion } from 'framer-motion';

const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  
const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

 
const CheckGallery = () => {
    return (
        <div className="check-gallery">
            <div className="gallery-heading g-section">
                <h1>Galeria</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, beatae expedita dolore ratione voluptatem vitae architecto totam alias eius laudantium veritatis libero tempore! Sunt porro facere hic fugiat, debitis accusantium.</p>
            </div>
            <motion.div className="gallery-images g-section" variants={container} initial="hidden" animate="visible">
                <motion.div className="g-image" variants={item}>
                    <img src={image1} alt="Gallery image"/>
                </motion.div>
                <motion.div className="g-image" variants={item}>
                    <img src={image2} alt="Gallery image"/>
                </motion.div>
                <motion.div className="g-image" variants={item}>
                    <img src={image3} alt="Gallery image"/>
                </motion.div>
                <motion.div className="g-image" variants={item}>
                    <img src={image4} alt="Gallery image"/>
                </motion.div>
            </motion.div>

            <div className="gallery-heading g-button">
                <Link to="/gallery" className='btng'>Zobacz więcej</Link>
            </div>
            
        </div>
    );
}

export default CheckGallery;