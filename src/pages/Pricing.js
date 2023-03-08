import Footer from "../components/Footer";
import {motion} from 'framer-motion';

export default function Pricing() {
    return (
        <div className="wrap-pricing">
            <div className="container-pricing">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: .2 }}>
                <h1>Kosmetologia klasyczna</h1>
                <div className="row">
                    <div className="title">
                        <h3>ZABIEG NAWILŻAJĄCY</h3>
                    </div>
                    <div className="price">180zł</div>
                </div>
                <div className="row">
                    <div className="title"><h3>ZABIEG REWITALIZUJĄCY</h3></div>
                    <div className="price">249zł</div>
                    {/* <div className="price">
                        <div className="options">1ml 700 zł</div>
                        <div className="options">2ml 1300 zł</div>
                        <div className="options">6/7ml 2500 zł</div>
                    </div> */}
                </div>
                <div className="row">
                    <div className="title"><h3>ZABIEG LIFTINGUJĄCY</h3>
                        <p>W skład zabiegu wchodzi: Oczyszczenie, Peeling, Aplikacja odpowiedniego do potrzeb skóry preparatu, Masaż, Maska odpowiednia do potrzeb skóry</p>
                    </div>
                    <div className="price">259zł</div>
                </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <h2>Peelingi Chemiczne</h2>
                <div className="row">
                    <div className="title">
                        <h3>Retix C</h3>
                    </div>
                    <div className="price">200zł</div>
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
                        <h3>PRX t33</h3>
                    </div>
                    <div className="price">395zł</div>
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
                    <div className="price">159zł</div>
                </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: .2 }}>
                <h1>Kosmetologia estetyczna</h1>
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
                    <div className="price">280 - 420zł</div>
                </div>
                <div className="row">
                    <div className="title">
                        <h3>Stymulatory</h3>
                    </div>
                    <div className="price">600 - 800zł</div>
                </div>
                <div className="row">
                    <div className="title">
                        <h3>Mezoterapia hybrydowa</h3>
                    </div>
                    <div className="price">280 - 480zł</div>
                </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}  transition={{ delay: .2 }}>
                <h2>Masaże twarzy</h2>
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
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}  transition={{ delay: .2 }}>
                <h2>Podologia</h2>
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
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}  transition={{ delay: .2 }}>
                <h2>Henny i Laminacja</h2>
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
                        <h3>Brwi + Regulacja</h3>
                    </div>
                    <div className="price">30zł</div>
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
            <Footer/>
        </div>
    );
}