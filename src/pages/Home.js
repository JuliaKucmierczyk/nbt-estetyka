import Testimonials from '../components/Testimonials';
import CheckGallery from '../components/CheckGallery';
import FirstPageView from '../components/FirstPageView';

export default function Home() {
    return (
        <div className='content'>
            <FirstPageView/>
            <CheckGallery />
            <Testimonials />

        </div>
    );
}