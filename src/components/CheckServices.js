import { Link } from "react-router-dom";

const CheckServices = () => {
    return (
        <section className="check-services">
            <div className="container">
                    <h1 className="check-services-title">Sprawdź nasze usługi</h1>
                    <div className="check-services-content">
                        <div className="services-show-box" >
                            <h1 className="title">Zabiegi</h1>
                        </div>
                        <div className="services-show-box" >
                            <h1 className="title">Akupunktura kosmetyczna</h1>
                        </div>
                        <div className="services-show-box" >
                            <h1 className="title">Stymulatory tkankowe</h1>
                        </div>
                        <div className="services-show-box" >
                            <h1 className="title">Mezoterapia</h1>
                        </div>
                        <div className="services-show-box" >
                            <h1 className="title">Masaże</h1>
                        </div>
                        <Link to="/services" className="check-services-btn">Sprawdź</Link>
                    </div>
            </div>
        </section>
    )
}

export default CheckServices