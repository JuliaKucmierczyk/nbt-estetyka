import Footer from "../components/Footer";

export default function Pricing() {
    return (
        <div className="wrap-pricing">
            <div className="container-pricing">
                <div className="row">
                    <div className="title">
                        <h3>MODELOWANIE UST KWASEM HIALURONOWYM</h3>
                        <p>Revolax, Restylane Kysse, Teosyal Kiss</p>
                    </div>
                    <div className="price">600 - 800 zł</div>
                </div>
                <div className="row">
                    <div className="title"><h3>WOLUMETRIA TWARZY</h3></div>
                    <div className="price">
                        <div className="options">1ml 700 zł</div>
                        <div className="options">2ml 1300 zł</div>
                        <div className="options">6/7ml 2500 zł</div>
                    </div>
                </div>
                <div className="row">
                    <div className="title"><h3>BRUZDY NOSOWO WARGOWE</h3></div>
                    <div className="price">700 zł</div>
                </div>
                <div className="row">
                    <div className="title">
                        <h3>STYMULATORY TKANKOWE</h3>
                        <p>Profhilo, Nucleofill Strong, Ejal 40, Jalupro, Neauvia, Xela Rederm 2,2 %, Hyalual Electri</p>
                    </div>
                    <div className="price">600 – 1100 zł</div>
                </div>
                <div className="row">
                    <div className="title">
                        <h3>MEZOTERAPIA IGŁOWA</h3>
                        <p>Filorga Nctf 135 HA, Neofound, Aquashine BTX, Venome hair, Dr. Cyj Hair Filler</p> <p>*Cena uzależniona od rodzaju zużytego preparatu i obszaru ciała</p>
                    </div>
                    <div className="price">300 – 550 zł</div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}