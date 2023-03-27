import { Link } from "react-router-dom";

const CheckServices = () => {
  return (
    <section className="check-services">
      <article className="container-service">
        <h1 className="check-services-heading">Sprawdź nasze usługi</h1>
        <div className="check-services-content">
          <div className="services-show-box">
            <h1 className="title-serv">Zabiegi</h1>
          </div>
          <div className="services-show-box">
            <h1 className="title-serv">Akupunktura kosmetyczna</h1>
          </div>
          <div className="services-show-box">
            <h1 className="title-serv">Stymulatory tkankowe</h1>
          </div>
          <div className="services-show-box">
            <h1 className="title-serv">Mezoterapia</h1>
          </div>
          <div className="services-show-box">
            <h1 className="title-serv">Masaże</h1>
          </div>
        </div>
        <div className="check-services-text">
          <p>
            Jeśli chcesz poznać pełną listę usług, które oferujemy w naszym
            salonie kosmetologicznym, to zapraszamy Cię do odwiedzenia zakładki
            "Usługi". Tam znajdziesz pełen zakres naszych usług oraz ich
            dokładne opisy. Kliknij teraz, aby poznać naszą ofertę i znaleźć
            usługi, które spełnią Twoje potrzeby!
          </p>
        </div>
        <Link to="/services" className="check-services-btn">
          Zobacz więcej
        </Link>
      </article>
    </section>
  );
};

export default CheckServices;
