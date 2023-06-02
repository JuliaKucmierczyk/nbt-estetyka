import React, { useState } from "react";
import { smallRight } from "react-icons-kit/entypo/smallRight";
import { smallDown } from "react-icons-kit/entypo/smallDown";
import { Icon } from "react-icons-kit";
import Footer from "../components/Footer.js";

const Services = () => {
  const [servicesList, setServicesList] = useState([
    {
      id: 1,
      name: "Zabieg nawilżający",
      description:
        "Dwuetapowe oczyszczanie skóry twarzy, peeling kawitacyjny lub enzymatyczny, masaż z wykorzystaniem produktów nawilżających, stabilizująca maska algowa",
    },
    {
      id: 2,
      name: "Zabieg rewitalizujący",
      description:
        "Dwuetapowe oczyszczanie skóry twarzy, peeling kawitacyjny/enzymatyczny, masaż relaksacyjny z wykorzystaniem produktów rewitalizacyjnych, stabilizująca maska algowa",
    },
    {
      id: 3,
      name: "Zabieg liftujący",
      description:
        "Dwuetapowe oczyszczanie skóry twarzy, peeling kawitacyjny/Combo Peptide, masaż liftingujący, stabilizująca maska algowa",
    },
    {
      id: 4,
      name: "Henna",
      description:
        "Klasyczny zabieg farbowania brwi i rzęs. W zależności od upodobań klientki może być wykonany przy użyciu henny proszkowej, pudrowej, żelowej, kremowej czy popularnej obecnie farbki. Kolorystyka wacha się od granatowej czerni poprzez  popieli do różnych odcieni brązu. Cena wacha się od 30zł do 130zł w zależności od techniki.",
    },
    {
      id: 5,
      name: "Pedicure leczniczy",
      description:
        "Wykonany przy użyciu ostrzy i frezarki. Obejmuje korektę paznokci, opracowanie zrogowaceń , pękniętych pięt, usunięcie odcisków i modzeli",
    },
    {
      id: 6,
      name: "Pedicure hybrydowy i kosmetyczny",
      description:
        "Pedicure hybrydowy - klasyczny zabieg pielęgnacyjno-upiększający polegający na kosmetycznym usunięciu zrogowaciałego, szorstkiego naskórka, wyprofilowaniu płytki paznokciowej i pomalowaniu wybranym lakierem hybrydowym. Pedicure kosmetyczny - klasyczny zabieg pielęgnacyjny przywracający stopą miękkość i gładkość. Polega na usunięciu szorstkości na pietach i uformowaniu paznokci.",
    },
    {
      id: 7,
      name: "Peelingi chemiczne",
      description:
        "Niezwykle skuteczny zabieg ukierunkowany na potrzeby skóry. Dzięki właściwie dobranym i wykonanym procedurą można uzyskać : odmłodzenie i oczyszczenie twarzy, wyrównanie kolorytu, nawilżenie, ujędrnienie, redukcję drobnych zmarszczek i plam pigmentacyjnych. Najczęściej stosowanie w zabiegach peelingi to: kwas migdałowy, retinol, witamina C, TCA ",
    },
    {
      id: 8,
      name: "Mezoterapia igłowa",
      description:
        "Zabieg wykonywany preparatami odpowiednimi do potrzeb skóry. Produkty są certyfikowane. Zabieg może być wykonywany na twarzy, szyi, dekolcie i skórze głowy. Gwarantujemy najwyższą dokładność wykonania. Przykładowe koktajle to : RevitaCare / Cytocare / Fillmed / Filorga / Venoma. Dr Cyj i inne",
    },
    {
      id: 9,
      name: "Mezotewrapia mikroigłowa",
      description:
        "Bezpieczny zabieg niechirurgicznej rewitalizacji skóry, stymuluje naturalny proces odnowy, poprawia jędrność, koloryt i tworzenie nowych naczyń włosowatych. Zabieg można łączyć z innymi zabiegami",
    },
    {
      id: 10,
      name: "Mezoterapia hybrydowa",
      description:
        "Złożony zabieg kosmetologiczny polegający na połączeniu dwóch technik: mezoterapii igłowej i mikroigłowej. W zależności od wykorzystanych preparatów można precyzyjnie celować w potrzeby skóry.",
    },
    {
      id: 11,
      name: "Stymulatory Tkankowe",
      description:
        "Najnowsze zabiegi poprawiające wygląd skóry. Opóżniające proces starzenia, Preparaty pobudzają produkcję kolagenu i elastyny. Dodają skórze świeżości i promienności. Posiadają silne działanie napinające redukują przebarwienia. Dają lekki efekt wypełnienia. Działają intensywne właściwości odbudowujące. Gwarantujemy preparaty tylko sprawdzone z odpowiednimi certyfikatami .Preparat dobierany jest indywidualnie do potrzeb skóry. Wysoka precyzja wykonania. Przykładowe produkty to: Jalupro, MonoDerm Fillagen, Sisthaema, Phormae, Venome, Karisma, Ejal 40, Nucleofill, Vitaran. EGZOSOMY - Pionierski zabieg kosmetologii estetycznej z wykorzystaniem nanopęchechyków zewnątrz komórkowych- EGZOSOMÓW. Egzosomy modelują regenerują,odmładzają i rewitalizuja tkanki. Są biodostępne i biostabilne. Działaja przeciwzapalnie indukują syntezę kolagenu i elastyny, przyspieszają gojenie się ran.",
    },
    {
      id: 12,
      name: "Masaże",
      description:
        "Zabiegi wykonywane na produktach Marki MENARD. Kobido - tradycyjny masaż dalekowschodni tkanek głębokich, powięzi mięśni i skóry. Silnie liftingujące działanie. poprawia ukrwienie, odprężą ,usprawnia przepływy naczyniowe, relaksuje, poprawia koloryt skóry. Gua Sha - Zabieg dla wymagających wykonywany kamieniami jadeitowymi/kwarcowymi/ W zależności od potrzeb energetycznych klienta. Pobudza, drenuje, dotlenia, uruchamia proces detoksykacji, rozluźnia, Kamienie jednorazowe",
    },
    {
      id: 13,
      name: "Mikropunktura",
      description:
        "Zabieg polegający na przezskórnym indukowanie kolagenu. Dzięki unikatowej technice pracy można wpłynąć na skórę  odmładzająco i rewitalizująco /biolifting/ oraz wspomagać redukcję  blizn o różnym pochodzenu  /Korekta blizn : pooperacyjnych, po trądzikowych, rozstępów/ ",
    },
    {
      id: 14,
      name: "Akupunktura kosmetyczna",
      description:
        "Natutalny sposób na zatrzymanie młodości. Efekt rewitalizacji, rozjaśnienie i poprawa ukrwienia skóry/można połączyć z innymi zabiegami",
    },
  ]);

  const [selectedService, setSelectedService] = useState(null);

  const toggleService = (id) => {
    if (selectedService === id) {
      setSelectedService(null);
    } else {
      setSelectedService(id);
    }
  };

  return (
    <section className="services-section">
      <article className="services">
        {servicesList.map((service) => (
          <div
            key={service.id}
            className="toggle-list-element"
            onClick={() => toggleService(service.id)}
          >
            <div className="up">
              <h2 className="toggle-list-title animacja">
                {selectedService === service.id ? (
                  <Icon size={25} icon={smallDown}></Icon>
                ) : (
                  <Icon size={25} icon={smallRight}></Icon>
                )}{" "}
                {service.name}
              </h2>
            </div>
            {selectedService === service.id && (
              <p className="toggle-list-description">{service.description}</p>
            )}
          </div>
        ))}
      </article>
      <Footer />
    </section>
  );
};

export default Services;
