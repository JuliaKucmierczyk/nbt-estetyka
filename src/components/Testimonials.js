import {quotesLeft} from 'react-icons-kit/icomoon/quotesLeft';
import Icon from 'react-icons-kit';
import { motion } from 'framer-motion';

const Testimonials = () => {
    return (
        <div className="testimonial-container">
            <div className="section-heading">
                <h1>Co mówią o nas klienci</h1>
            </div>
            <div className="testimonials">
                <TestimonialItem name="Julia Kućmierczyk" quote="This is fantastic! Thanks so much guys! I can't even imagine life without you 🌞"/>
                <TestimonialItem name="Katarzyna Gworzek" quote="I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."/>
                <TestimonialItem name="Adrian Pasiewski" quote="Thank you for the wonderful work you do. I have been using this theme regularly and I love it." />
            </div>           
        </div>
    );
};

const TestimonialItem = (props) => {
    return (
        <motion.div className="testimonial-item">
            <div className="inner-content">
                <Icon icon={quotesLeft} size={30} ></Icon>
                <h4>{props.name}</h4>
                <p>{props.quote}</p>
            </div>
        </motion.div>
    );
}

export default Testimonials;
