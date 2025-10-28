import Footer from "../components/Footer";
import salonjpg from "../images/salon-szkolenia/salon.jpg";
import salonwebp from "../images/salon-szkolenia/salon.webp";
import salon1000 from "../images/salon-szkolenia/salon.jpg";
import salon1000webp from "../images/salon-szkolenia/salon.webp";

export default function Training() {
  return (
    <section className="wrap-training">
      <article className="training-starter component">
        <div className="content-container boxx">
          <h1>Szkolenia</h1>
          <p className="contact-text">
            Chcesz zdobyć lub poszerzyć swoją wiedzę i umiejętności z zakresu
            nowoczesnej kosmetologii, podologii i masażu? Zapraszam do udziału w
            szkoleniach, kursach i seminariach organizowanych przez moje Forum
            Szkoleniowe. Spotkania prowadzone są pod okiem doświadczonych
            specjalistów w swojej dziedzinie. Uzyskasz na nich wyczerpującą
            wiedzę teoretyczną niezbędną do bezpiecznego wykonania zabiegu oraz
            wyćwiczysz nowo nabyte umiejętności. Zajęcia organizowane są w
            sprzyjającej rozwojowi atmosferze. Po zakończeniu uzyskasz
            Certyfikat poświadczający nabyte umiejętności.
          </p>
        </div>
        <div className="image-container boxx">
          <picture>
            <source
              media="(max-width: 1000px)"
              type="image/jpg"
              srcset={salon1000}
            />
            <source
              media="(min-width: 1001px)"
              type="image/jpg"
              srcset={salonjpg}
            />
            <source
              media="(max-width: 1000px)"
              type="image/webp"
              srcset={salon1000webp}
            />
            <source
              media="(min-width: 1001px)"
              type="image/webp"
              srcset={salonwebp}
            />
            <img alt="szkolenie" />
          </picture>
        </div>
      </article>
      <article className="training-contener">
        <div className="course-element1 ele">
          <h2>Podologia</h2>
          <ul>
            <li>
              Wykorzystanie: skalpela, dłuta, hebla, kapturków i pododysków w
              pracy podologa
            </li>
            <li>
              Korekta wrastających paznokci : klamra tytanowa, tamponada i inne
              metody korekty
            </li>
            <li>
              Usuwanie odcisków i modzeli mechaniczne ,chemiczne zapobieganie
              powstaniu
            </li>
            <li>Choroby i defekty stóp i paznokci </li>
            <li>Pękające pięty</li>
            <li>Stopa cukrzycowa</li>
          </ul>
        </div>
        <div className="course-element2 ele">
          <h2>Kosmetologia estetyczna</h2>
          <ul>
            <li>
              Mezoterapia igłowa i mikroigłowa jako metody stymulacji /produkty
              i technika/
            </li>
            <li>
              Zastosowanie peelingów chemicznych o różnej intensywności w
              zabiegach pielęgnacyjnych i anti aging/ kwasy, TCA, reinole,
              witamina c i inne produkty i technika zabiegowa/
            </li>
            <li>
              Stymulatory tkankowe/ praca igłą i kaniulą ,produkty i technika
              zabiegowa/
            </li>
            <li>Osocze bogatopłytkowe i fibryna</li>
          </ul>
        </div>
        <div className="course-element3 ele">
          <h2>Oprawa oczu</h2>
          <ul>
            <li>
              Henna klasyczna, farbki, henna pudrowa, henna żelowa, geometria
              brwi
            </li>
          </ul>
        </div>
        <div className="course-element4 ele">
          <h2>Masaże grupy max 4 osobowe</h2>
          <ul>
            <li>Kobido</li>
            <li>Masaż gorącymi kamieniami</li>
            <li>Masaż karku i pleców</li>
            <li>Masaż antycelulitowy</li>
            <li>Zabiegi pielęgnacyjna na ciało</li>
            <li>Akupunktura kosmetyczna</li>
            <li>Masaż Gua Sha</li>
          </ul>
        </div>
        <div className="course-element5 ele">
          <h2>Szkolenia eksperckie</h2>
          <ul>
            <li>
              Oczyszczanie manualne w terapiach anti acne i terapii
              pielęgnacyjnej
            </li>
            <li>Sanepid w gabinecie kosmetycznym</li>
          </ul>
        </div>
      </article>
      <Footer />
    </section>
  );
}
