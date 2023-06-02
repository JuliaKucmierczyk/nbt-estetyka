import Testimonials from "../components/Testimonials";
// import CheckGallery from "../components/CheckGallery";
import FirstPageView from "../components/FirstPageView";
import CheckServices from "../components/CheckServices";
import CheckMe from "../components/CheckMe";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="content">
      <FirstPageView />
      <CheckServices />
      {/* <CheckGallery /> */}
      <CheckMe />
      <Testimonials />
      <Footer />
    </div>
  );
}
