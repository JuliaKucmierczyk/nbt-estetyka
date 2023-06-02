import { Link } from "react-router-dom";

const CheckServices = () => {
  return (
    <section className="check-services">
      <article className="container-service">
        <h2 className="check-services-heading">Sprawdź nasze usługi</h2>
        <div className="check-services-content">
          <div className="services-show-box scale">
            <h2 className="title-serv">Kosmetologia klasyczna i Henna</h2>
          </div>
          <div className="services-show-box scale">
            <h2 className="title-serv">Podologia i Pedicure</h2>
          </div>
          <div className="services-show-box scale">
            <h2 className="title-serv">Peelingi Chemiczne</h2>
          </div>
          <div className="services-show-box scale">
            <h2 className="title-serv">
              Mezoterapia igłowa, mikroigłowa i hybrydowa
            </h2>
          </div>
          <div className="services-show-box scale">
            <h2 className="title-serv">Stymulatory tkankowe</h2>
          </div>
          <div className="services-show-box scale">
            <h2 className="title-serv">Masaże</h2>
          </div>
          <div className="services-show-box scale">
            <h2 className="title-serv">Mikropunktura i pinezkowanie</h2>
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
