import Testimonials from '../components/Testimonials';
import CheckGallery from '../components/CheckGallery';

export default function Home() {
    return (
        <div className='content'>
            <CheckGallery />
            <Testimonials />

        </div>
    );
}