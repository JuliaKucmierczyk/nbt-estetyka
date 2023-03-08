import img1 from '../images/gallery/1.jpg';
import img2 from '../images/gallery/2.jpg';
import img3 from '../images/gallery/3.jpg';
import img4 from '../images/gallery/4.jpg';
import img5 from '../images/gallery/5.jpg';
import img6 from '../images/gallery/6.jpg';
import img7 from '../images/gallery/7.jpg';
import img8 from '../images/gallery/8.jpg';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Gallery() {
    return (
        <div>
        <div className="gallery">
            <div className="images">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}><img src={img1} alt="1" /></motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}><img src={img2} alt="2" /></motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}><img src={img3} alt="3" /></motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}><img src={img8} alt="8" /></motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}><img src={img4} alt="4" /></motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}><img src={img5} alt="5" /></motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}><img src={img6} alt="6" /></motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}><img src={img7} alt="7" /></motion.div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}