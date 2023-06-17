import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <div className="wrap-pricing">
      <h1>Cennik*</h1>

      <div className="container-pricing">
        <p>
          *Powyższa oferta ma charakter informacyjny i nie stanowi oferty
          handlowej w rozumieniu art.66 Paragraf 1 Kodeksu cywilnego. W celu
          weryfikacji ceny proszę o kontakt.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="main-title">Kosmetologia klasyczna</h2>
          <div className="row">
            <div className="title">
              <h3>ZABIEG NAWILŻAJĄCY</h3>
            </div>
            <div className="price">180zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>ZABIEG REWITALIZUJĄCY</h3>
            </div>
            <div className="price">249zł</div>
            {/* <div className="price">
                        <div className="options">1ml 700 zł</div>
                        <div className="options">2ml 1300 zł</div>
                        <div className="options">6/7ml 2500 zł</div>
                    </div> */}
          </div>
          <div className="row">
            <div className="title">
              <h3>ZABIEG LIFTINGUJĄCY</h3>
              <p>
                W skład zabiegu wchodzi: Oczyszczenie, Peeling, Aplikacja
                odpowiedniego do potrzeb skóry preparatu, Masaż, Maska
                odpowiednia do potrzeb skóry
              </p>
            </div>
            <div className="price">259zł</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="main-title">Peelingi Chemiczne</h2>
          <div className="row">
            <div className="title">
              <h3>Retix C</h3>
            </div>
            <div className="price">280zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>PQ AGE</h3>
            </div>
            <div className="price">340zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>BioRePeel</h3>
            </div>
            <div className="price">300zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>TCA 40%</h3>
            </div>
            <div className="price">350zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>PRX-T33</h3>
            </div>
            <div className="price">360zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>PQAg Evolution</h3>
            </div>
            <div className="price">395zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>Retinol 5%</h3>
            </div>
            <div className="price">190zł</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="main-title">Kosmetologia estetyczna</h2>
          <div className="row">
            <div className="title">
              <h3>Mezoterapia mikroigłowa</h3>
            </div>
            <div className="price">280zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>Mezoterapia igłowa</h3>
              <p>Cena w zależności od preparatu i obszaru</p>
            </div>
            <div className="price">320 - 550zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>Stymulatory tkankowe i egzosomy</h3>
            </div>
            <div className="price">600 - 1400zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>Mezoterapia hybrydowa</h3>
            </div>
            <div className="price">280 - 480zł</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="main-title">Masaże twarzy</h2>
          <div className="row">
            <div className="title">
              <h3>Kobido</h3>
            </div>
            <div className="price">160zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>Liftingujący twarz</h3>
            </div>
            <div className="price">140zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>Masaż relaksacyjny</h3>
            </div>
            <div className="price">120zł</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="main-title">Podologia</h2>
          <div className="row">
            <div className="title">
              <h3>Pedicur klasyczny</h3>
            </div>
            <div className="price">120zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>Pedicur hybrydowy</h3>
            </div>
            <div className="price">140zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>Pedicur leczniczy</h3>
            </div>
            <div className="price">od 140zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>Usuwanie odcisków</h3>
            </div>
            <div className="price">od 60zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>Klamry tytanowe na wrastające paznokcie</h3>
            </div>
            <div className="price">150zł</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="main-title">Henny i Laminacja</h2>
          <div className="row">
            <div className="title">
              <h3>Klasyczna henna - komplet</h3>
            </div>
            <div className="price">45zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>Brwi</h3>
            </div>
            <div className="price">25zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>Regulacja brwi</h3>
            </div>
            <div className="price">20zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>Rzęsy</h3>
            </div>
            <div className="price">30zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>Henna pudrowa i geometria</h3>
            </div>
            <div className="price">140zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>Laminacja brwi</h3>
            </div>
            <div className="price">120zł</div>
          </div>
          <div className="row">
            <div className="title">
              <h3>Laminacja rzęs</h3>
            </div>
            <div className="price">130zł</div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
