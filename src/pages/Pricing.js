import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Cennik() {
  return (
    <div className="wrap-pricing">
      <h1>Cennik*</h1>

      <div className="container-pricing">
        <p>
          *Powyższa oferta ma charakter informacyjny i nie stanowi oferty
          handlowej w rozumieniu art.66 Paragraf 1 Kodeksu cywilnego. W celu
          weryfikacji ceny proszę o kontakt.
        </p>

        {/* Kosmetologia estetyczna */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="main-title">Kosmetologia estetyczna</h2>

          <div className="row" style={{ textAlign: "left" }}>
            <div className="title">
              <h3>Mezoterapia igłowa</h3>
              <p>
                oko 350 zł,
                <br /> twarz 500 zł, <br />
                twarz+szyja 530 zł,
                <br /> twarz+szyja+dekolt 560 zł
              </p>
            </div>
            <div className="price">350 - 560zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Mezoterapia mikroigłowa</h3>
              <p>
                twarz 350 zł, <br />
                twarz+szyja 370 zł, <br />
                twarz+szyja+dekolt 400 zł
              </p>
            </div>
            <div className="price">350 - 400zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Mezoterapia hybrydowa</h3>
              <p>
                twarz 580 zł,
                <br /> twarz+szyja 600 zł,
                <br /> twarz+szyja+dekolt 620 zł
              </p>
            </div>
            <div className="price">580 - 620zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Stymulatory tkankowe, egzosomy i tropokolagen</h3>
              <p>
                Twarz 850 zł, <br />
                szyja 800 zł, <br />
                Egzosomy ASCE 1200 zł, <br />
                Tropokolagen 350 zł, <br />
                Karisma Rh Collagen 1000 zł,
                <br /> Nici PLLA w płynie 850 zł
              </p>
            </div>
            <div className="price">350 - 1200zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Unikatowe zabiegi kosmetologiczne</h3>
              <p>
                Nawilżenie i odporność 280 zł, <br />
                Rewitalizacja i odmłodzenie 280 zł,
                <br /> Klasyczny zabieg nawilżająco-pielęgnacyjny 220 zł,
                <br />
                Oczyszczanie twarzy/pleców 230 zł,
                <br /> Egzosomy liftingujące 420 zł,
                <br />
                Karboksyterapia bezigłowa CO2 Lift pro 550 zł,
                <br /> FREE Style 350 zł
              </p>
            </div>
            <div className="price">220 - 550zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Zabiegi kwasowe, peelingi i nanobrazja</h3>
              <p>
                Nanobrazja: twarz 320 zł, twarz+szyja 350 zł, twarz+szyja+dekolt
                380 zł
                <br />
                <br />
                Kawitacja: twarz 250 zł, twarz+szyja 280 zł, twarz+szyja+dekolt
                310 zł
                <br />
                <br />
                Retix C 250 zł,
                <br /> PRX T33 320 zł,
                <br /> Kwas migdałowy 280 zł, <br />
                Kwas laktobionowy 270 zł,
                <br /> Kwas azaleinowy 230 zł,
                <br /> Kwas traneksamowy 250 zł,
                <br /> Peeling peptydowy 280 zł
                <br />
                <br />
                Mikro-nakłuwanie frakcyjne 80 zł,
                <br /> Nanobrazja do wybranych zabiegów kwasowych 100 zł
              </p>
            </div>
            <div className="price">80 - 380zł</div>
          </div>
        </motion.div>

        {/* Henna i laminacja */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="main-title">Henna i Laminacja</h2>

          <div className="row">
            <div className="title">
              <h3>Klasyczna henna brwi z regulacją</h3>
            </div>
            <div className="price">40zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Klasyczna henna rzęs</h3>
            </div>
            <div className="price">40zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Regulacja brwi</h3>
            </div>
            <div className="price">20zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Laminacja brwi lub rzęs</h3>
              <p>farbka 90 zł, brwi i rzęsy razem 140 zł</p>
            </div>
            <div className="price">90 - 140zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Henna pudrowa brwi z geometrią</h3>
            </div>
            <div className="price">100zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Depilacja woskiem (twarz jeden obszar)</h3>
            </div>
            <div className="price">30zł</div>
          </div>
        </motion.div>

        {/* Podologia i manicure */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="main-title">Podologia i manicure</h2>

          <div className="row">
            <div className="title">
              <h3>Podstawowy zabieg podologiczny</h3>
            </div>
            <div className="price">160zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Pedicure hybrydowy (malowanie 1 kolor)</h3>
            </div>
            <div className="price">150zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Pedicure hybrydowy tylko paznokcie (bez pięt)</h3>
            </div>
            <div className="price">110zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Usunięcie modzeli i odcisków</h3>
            </div>
            <div className="price">100zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Terapia wrastających paznokci</h3>
            </div>
            <div className="price">120zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Klamra tytanowa</h3>
            </div>
            <div className="price">120zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Rekonstrukcja paznokcia</h3>
            </div>
            <div className="price">100zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Pedicure kwasowy</h3>
            </div>
            <div className="price">140zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Manicure klasyczny</h3>
            </div>
            <div className="price">60zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Manicure hybrydowy (1 kolor)</h3>
            </div>
            <div className="price">120zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Wzmacnianie paznokci żelem z hybrydą</h3>
            </div>
            <div className="price">160zł</div>
          </div>
        </motion.div>

        {/* Masaże */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="main-title">Naturoterapia i masaż</h2>

          <div className="row">
            <div className="title">
              <h3>Masaż Kobido</h3>
            </div>
            <div className="price">200zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Masaż Lifting Motyla</h3>
            </div>
            <div className="price">200zł</div>
          </div>

          <div className="row">
            <div className="title">
              <h3>Akupunktura kosmetyczna (1 obszar)</h3>
            </div>
            <div className="price">100zł</div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
