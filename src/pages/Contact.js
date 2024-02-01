import { Icon } from "react-icons-kit";
import { phone } from "react-icons-kit/icomoon/phone";
import { office } from "react-icons-kit/icomoon/office";
import { clock } from "react-icons-kit/icomoon/clock";
import Maps from "../components/Maps";

export default function Contact() {
  return (
    <section className="contact-container">
      <article className="first-row">
        <div className="link-wrapper">
          <h1>
            <Icon icon={phone} size={25} className="iconka" /> KONTAKT
          </h1>
          <div className="link-item">
            <p>
              <span>+48 510 714 846 </span> - Najszybsza odpowiedź!
            </p>
          </div>
          <div className="link-item">
            <a
              href="https://www.facebook.com/Estetyka.Nela.Tyszkiewicz/?locale=pl_PL"
              target={"_blank"}
              rel="noreferrer noopener"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="opening-hours">
          <h1>
            <Icon icon={clock} size={25} className="iconka" /> GODZINY OTWARCIA
          </h1>
          <p className="link-item">Poniedziałek - Piątek: 9:00 - 20:00</p>
          <p className="link-item">Sobota: 9:00 - 14:00</p>
          <p className="link-item">Niedziela: Nieczynne</p>
        </div>
        <div className="adres">
          <h1>
            <Icon icon={office} size={25} className="iconka" /> ADRES
          </h1>
          <p className="link-item">ul. Bieńczycka 15E/48</p>
          <p className="link-item">31-860 Kraków</p>
        </div>
      </article>
      <div className="second-row">
        <Maps />
      </div>
    </section>
  );
}
