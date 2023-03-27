import image1 from "../images/gallery/6.jpg";
import image2 from "../images/gallery/7.jpg";
import image3 from "../images/gallery/8.jpg";
import image4 from "../images/gallery/5.jpg";
import { Link } from "react-router-dom";

const CheckGallery = () => {
  return (
    <section className="check-gallery">
      <header className="gallery-heading g-section">
        <h1>Galeria</h1>
      </header>
      <article className="gallery-images g-section">
        <div className="g-image">
          <img src={image1} alt="Gallery image" loading="lazy" />
        </div>
        <div className="g-image">
          <img src={image2} alt="Gallery image" loading="lazy" />
        </div>
        <div className="g-image">
          <img src={image3} alt="Gallery image" loading="lazy" />
        </div>
        <div className="g-image">
          <img src={image4} alt="Gallery image" loading="lazy" />
        </div>
      </article>

      <div className="gallery-heading g-button">
        <Link to="/gallery" className="btng">
          Zobacz więcej
        </Link>
      </div>
    </section>
  );
};

export default CheckGallery;
