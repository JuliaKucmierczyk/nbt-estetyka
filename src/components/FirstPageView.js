import img from "../images/cosmetologist.jpg";
import { Link } from "react-router-dom";

const FirstPageView = () => {
  return (
    <section className="first-page-view">
      <div className="first-page-view-content">
        <figure className="first-photo">
          <img src={img} alt="Gallery image" />
        </figure>
        <article className="first-text-box">
          <h1>Najlepszy salon kosmetologii w Krakowie</h1>
          <p>
            Witaj na mojej stronie poświęconej kosmetologii estetycznej! Jestem
            certyfikowanym specjalistą w dziedzinie medycyny estetycznej i z
            wielką przyjemnością pomagam ludziom poprawić swój wygląd i
            samopoczucie.
          </p>
          <Link to="/contact" className="contact-button">
            Umów wizytę
          </Link>
        </article>
      </div>
    </section>
  );
};

export default FirstPageView;
