import salon from "../images/salon-main/salon-main_bv7uw6_c_scale,w_1400.jpg";
import salon200 from "../images/salon-main/salon-main_bv7uw6_c_scale,w_200.jpg";
import salon630 from "../images/salon-main/salon-main_bv7uw6_c_scale,w_630.jpg";
import salon964 from "../images/salon-main/salon-main_bv7uw6_c_scale,w_964.jpg";
import salon1248 from "../images/salon-main/salon-main_bv7uw6_c_scale,w_1248.jpg";
import salonbig from "../images/salon-main/main-salon.jpg";
import salonwebp from "../images/salon-main/main-salon.webp";
import { Link } from "react-router-dom";

const FirstPageView = () => {
  return (
    <section className="first-page-view">
      <div className="first-page-view-content">
        <picture className="first-photo">
          <source media="(max-width: 200px)" srcset={salon200} />
          <source media="(max-width: 630px)" srcset={salon630} />
          <source media="(max-width: 964px)" srcset={salon964} />
          <source media="(max-width: 1248px)" srcset={salon1248} />
          <source media="(max-width: 1400px)" srcset={salon} />
          <source
            media="(min-width: 1401px)"
            type="image/jpg"
            srcset={salonbig}
          />
          <source
            media="(min-width: 1401px)"
            type="image/webp"
            srcset={salonwebp}
          />
          <img alt="Zdjęcie przedstawiające salon Neli Tyszkiewicz" />
        </picture>
        <article className="first-text-box">
          <h1>Najlepszy salon kosmetologii w Krakowie</h1>
          <p>
            Witaj na mojej stronie poświęconej dziedzinie pielęgnacji urody!
            Jestem certyfikowanym specjalistą w dziedzinie medycyny estetycznej
            i z wielką przyjemnością pomagam ludziom poprawić swój wygląd i
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
