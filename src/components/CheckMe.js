import React from "react";
import nela from "../images/nela-profesjonalnie/nela-profesjonalnie.jpg";
import nelawebp from "../images/nela-profesjonalnie/nela-profesjonalnie.webp";
import nela1000 from "../images/nela-profesjonalnie/nela-profesjonalnie-1000.jpg";
import nela1000webp from "../images/nela-profesjonalnie/nela-profesjonalnie-1000.webp";
import { Link } from "react-router-dom";

const CheckMe = () => {
  return (
    <>
      <section className="">
        <div className="about-wraper check-me">
          <picture className="photo">
            <source media="(max-width: 1000px)" srcset={nela1000} />
            <source media="(max-width: 1000px)" srcset={nela1000webp} />
            <source
              media="(min-width: 1001px)"
              type="image/jpg"
              srcset={nela}
            />
            <source
              media="(min-width: 1001px)"
              type="image/webp"
              srcset={nelawebp}
            />
            <img src={nela} alt="Zdjęcie reprezentujące Nele Tyszkiewicz" />
          </picture>
          <article className="about">
            <h2 className="check-services-heading">O mnie</h2>
            <p>
              Dzień Dobry, jestem absolwentką Krakowskiej Akademii im.
              A.F.Modrzewskiego. Ekspertem w dziedzinie kosmetologii
              estetycznej, zapobiegawczej i podologii. Jestem wieloletnim
              praktykiem, trenerem i wykładowcą. Na co dzień pracuje w firmach
              szkoleniowych i w gabinecie kosmetologicznym. Tworze unikatowe
              procedury pielęgnacyjne łączące w sobie nowoczesne metody z
              tradycją i doświadczeniem. Jestem instruktorem w technikach
              iniekcyjnych, mezoterapii, stymulatorach, face modellingu oraz
              podologii.
            </p>
            <Link to="/about" className="check-services-btn">
              Zobacz więcej
            </Link>
          </article>
        </div>
      </section>
    </>
  );
};

export default CheckMe;
