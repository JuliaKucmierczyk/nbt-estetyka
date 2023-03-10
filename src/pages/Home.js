import Testimonials from '../components/Testimonials';
import CheckGallery from '../components/CheckGallery';
import FirstPageView from '../components/FirstPageView';
import CheckServices from '../components/CheckServices';

export default function Home() {
    return (
        <div className='content'>
            <FirstPageView/>
            <CheckServices />
            <CheckGallery />
            <Testimonials />

        </div>
    );
}