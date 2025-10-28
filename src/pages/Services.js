import React, { useState } from "react";
import { smallRight } from "react-icons-kit/entypo/smallRight";
import { smallDown } from "react-icons-kit/entypo/smallDown";
import { Icon } from "react-icons-kit";
import Footer from "../components/Footer.js";

const Services = () => {
  const [servicesList] = useState([
    {
      id: 1,
      name: "Kosmetologia estetyczna",
      description: [
        "DLACZEGO WARTO SKORZYSTAĆ Z ZABIEGÓW KOSMETOLOGII ESTETYCZNEJ To inwestycja w Twoje piękno i dobre samopoczucie. Korzyści które odczujesz po zabiegu to: MŁODSZY bardziej PROMIENNY wygląd, Skóra stanie się JĘDRNIEJSZA, ELASTYCZNA i pełna blasku. Nastąpi REDUKCJA drobnych ZMARSZCZEK i linii mimicznych. Nastąpi naturalna REGENERACJA, poprawa NAWILŻENIA i odżywienie. Skóra stanie się miękka, sprężysta i pełna energii . Wyraźnie OPÓŻNI się proces STARZENIA się skóry. Dlaczego Warto? bo to BEZPIECZNA, SKUTECZNA metoda która pozwoli CI poczuć się piękną i pewną siebie. ZAINWESTÓJ W SIEBIE I CIESZ SIĘ EFEKTAMI. Chętnie pomogę w doborze odpowiednich preparatów i odpowiednich technik aby efekt był optymalny. Zapraszam!",
      ],
    },
    {
      id: 2,
      name: "Terapie łączone",
      description: [
        "W mojej pracy kosmetologa łączę techniki z różnych obszarów kosmetologii – klasyczne zabiegi pielęgnacyjne z nowoczesnymi metodami kosmetologii estetycznej. To dla mnie połączenie tradycji i doświadczenia z nauką oraz innowacją – w służbie piękna, zdrowia i naturalnego wyglądu skóry. Specjalizuję się w pielęgnacji skóry dojrzałej, z pierwszymi oznakami starzenia, a także skóry wymagającej – z bliznami czy przebarwieniami.",
        <br></br>,
        <br></br>,
        "W pracy kieruję się zasadą równowagi – nie działam wbrew naturze, lecz wspieram ją, dobierając składniki zabiegowe tak, by zoptymalizować skuteczność przy pełnym poszanowaniu fizjologii skóry. Dzięki doświadczeniu i indywidualnemu podejściu stymuluję naturalne procesy regeneracyjne, pomagając skórze odzyskać blask, promienny wygląd i równowagę.",
        <br></br>,
        <br></br>,
        "Moją specjalistyczną terapię uzupełniam spersonalizowaną pielęgnacją domową, dopasowaną do potrzeb i celów każdej klientki. W całym procesie pielęgnacyjnym możesz liczyć na moją wiedzę, doświadczenie i pełne wsparcie. Serdecznie zapraszam do odkrycia, jak świadoma pielęgnacja może stać się Twoim Rytuałem Piękna.",
      ],
    },
    {
      id: 3,
      name: "Unikatowe zabiegi kosmetologii zapobiegawczej",
      description: [
        "To zabiegi, które naprawią i odnowią Twoją skórę, a także wesprą Cię w codziennej pielęgnacji. ",
        "Usuwają martwe komórki naskórka, odsłaniają świeżą i zdrową cerę, wzmacniają rewitalizację. ",
        "Redukują niedoskonałości, takie jak suchość, zaczerwienienie, wrażliwość, zmarszczki, przebarwienia, poszerzone pory i inne. ",
        "Już po pierwszym zabiegu Twoja skóra odczuje wyraźną poprawę i będzie wyglądać lepiej. ",
        "Regularne sesje zapewniają trwałą poprawę kondycji skóry. ",
        "Składniki odżywcze stosowane w pielęgnacji domowej będą lepiej przyswajane. ",
        "Są to zabiegi bezpieczne, nieinwazyjne i pobudzające naturalne procesy odmładzające. ",
        "Dzięki nim wzmocnisz płaszcz hydrolipidowy, zredukujesz przebarwienia, rozświetlisz i odświeżysz skórę — poczujesz się piękna. ",
        "Zainwestuj w siebie i ciesz się efektami, które dodadzą Ci energii i młodzieńczego blasku. ",
        "Chętnie pomogę dobrać najbardziej odpowiedni zabieg do Twojej skóry. ",
      ],
    },
    {
      id: 4,
      name: "Zabiegi kwasowe, peelingi i nan-brazje",
      description: [
        "Zabiegi z użyciem kwasów działają nie tylko złuszczająco – redukują zmarszczki, blizny i przebarwienia, a także korzystnie wpływają na teksturę i koloryt skóry. ",
        "Poprawiają jędrność skóry, przywracają blask i widocznie odmładzają. ",
        "Regularne stosowanie kuracji kwasowych pomaga uzyskać długotrwały efekt promiennej cery. ",
        "Zabiegi te przygotowują skórę do innych procedur pielęgnacyjnych i estetycznych, zwiększając ich skuteczność. ",
        "Każda seria zabiegowa to inwestycja w zdrowie i młody wygląd skóry. ",
        "Dzięki zabiegom kwasowym uzyskasz upragniony efekt bez zbędnej rekonwalescencji. ",
        "Efekt można wzmocnić dzięki nanobrazji. ",
        "Pracuję na wyselekcjonowanych preparatach: PURLES, WIQO, Mesoestetic, Retix C, Fillmed, Venome, CMed. ",
        "Zaufaj jakości i skuteczności — umów się na konsultację. ",
        <br></br>,
        <br></br>,
        <strong>RETIX C</strong>,
        " — jeśli Twoja skóra wymaga kompleksowej odnowy, rozjaśnienia i zwiększenia jędrności, to RETIX C jest zabiegiem dla Ciebie. ",
        "To intensywny zabieg anti-aging, który kompleksowo poprawia wygląd skóry, stymuluje zagęszczenie i napięcie skóry. ",
        "Wygładza, rozjaśnia przebarwienia, redukuje niedoskonałości związane ze stanem zapalnym, zwęża pory, zwiększa nawilżenie i wspiera barierę ochronną. ",
        "Efektem jest pełna blasku, wypoczęta skóra. Zabieg sezonowy. ",
        <br></br>,
        <br></br>,
        <strong>PRX-T33</strong>,
        " — jeśli Twoja skóra traci elastyczność, borykasz się z przebarwieniami lub zmarszczkami, PRX-T33 jest dla Ciebie. ",
        "To silna, bezigłowa biorewitalizacja oparta na kwasie TCA, kwasie kojowym i nadtlenku wodoru. ",
        "Działa rozjaśniająco, łagodzi przebarwienia i pobudza czynniki wzrostu bez uszkadzania skóry. ",
        "Po serii zabiegów skóra jest jędrna, elastyczna i pełna blasku. Zabieg całoroczny. ",
        <br></br>,
        <br></br>,
        <strong>KWAS MIGDAŁOWY I AZELAINOWY</strong>,
        " — idealny dla skóry wrażliwej, nietolerującej innych kwasów AHA. ",
        "Regeneruje, rozjaśnia, normalizuje wydzielanie sebum i łagodzi stany zapalne. ",
        "Doskonale sprawdza się przy pierwszych oznakach starzenia oraz trądziku. Zabieg całoroczny. ",
        <br></br>,
        <br></br>,
        <strong>KWAS AZELAINOWY I SALICYLOWY</strong>,
        " — dla skóry wrażliwej, naczyniowej i z przebarwieniami. ",
        "Działa przeciwzapalnie, bakteriobójczo i łagodząco, wspomagając leczenie trądziku. ",
        "Zabieg całoroczny. ",
        <br></br>,
        <br></br>,
        <strong>KWAS LAKTOBIONOWY, KWAS MLEKOWY I PEPTYDY</strong>,
        " — dla skóry suchej, szorstkiej i pozbawionej blasku. ",
        "Łagodzi podrażnienia, regeneruje barierę lipidową i stymuluje produkcję ceramidów. ",
        "Peptydy działają przeciwstarzeniowo, nadając skórze miękkość, gładkość i świeżość. ",
        <br></br>,
        <br></br>,
        <strong>KWAS TRANEKSAMOWY, KWAS KOJOWY I NIACYNAMID</strong>,
        " — dla osób z przebarwieniami, nierównym kolorytem i objawami fotostarzenia. ",
        "Wyrównuje koloryt skóry, działa przeciwzapalnie i rozjaśniająco. ",
        "Doskonały dla cery wrażliwej i naczyniowej. ",
      ],
    },

    {
      id: 5,
      name: "Henna, oprawa oczu, depilacja/wosk",
      description:
        "Henna podkreśla naturalne piękno Twoich oczu, nadając spojrzeniu głębi i wyrazistości. Dzięki hennie możesz cieszyć się idealnym wyglądem brwi i rzęs bez codziennego makijażu. Zabieg jest szybki i bezpieczny, a efekt utrzymuje się przez kilka tygodni. Henna doskonale kryje nawet jasne i cienkie włoski, sprawiając, że brwi wydają się pełniejsze. To naturalny sposób na długotrwały efekt bez konieczności stosowania kolorowych kosmetyków. Henna na rzęsy optymalnie je zagęszcza i wydłuża, co dodatkowo podkreśla wyrazistość spojrzenia. Regularnie stosowana henna pozwala zaoszczędzić czas na porannym makijażu. Kolor można dopasować indywidualnie – od delikatnego po bardziej wyrazisty efekt. To świetna alternatywa dla osób, które nie chcą lub nie mogą korzystać z tuszu do rzęs czy kredek. Henna zapewnia świeży i zadbany wygląd o każdej porze dnia – nawet po treningu czy w saunie. Dzięki laminacji można zarówno brwi, jak i rzęsy idealnie ukształtować i nadać im odpowiedni kierunek.",
    },

    {
      id: 6,
      name: "Podologia, pedicure hybrydowy, manicure",
      description: [
        "Pedicure to zabieg pielęgnacyjny stóp i paznokci, którego celem jest poprawa ich wyglądu oraz utrzymanie zdrowia i higieny. Obejmuje on m.in. oczyszczenie, skrócenie paznokci, usunięcie zrogowaceń skóry oraz nawilżenie, dzięki czemu stopy stają się zdrowe i zadbane. W przypadku większych problemów, takich jak uciążliwe odciski, modzele, wrastające paznokcie, brodawki czy pękające pięty, zalecany jest pedicure leczniczy (podologiczny – PZP). Regularny pedicure podologiczny zapewnia zdrowe i zadbane stopy, które stają się wizytówką Twojego wyglądu. Dzięki specjalistycznym zabiegom możesz cieszyć się komfortem chodzenia bez bólu i dyskomfortu. Korekta wrastających paznokci klamrami przywraca ich właściwy kształt i eliminuje uciążliwe dolegliwości. PZP pozwala unikać stanów zapalnych i problemów zdrowotnych, które mogą powstać przy zaniedbanych stopach.",
        <br></br>,
        <br></br>,
        " Usuwanie odcisków i modzeli przynosi natychmiastową ulgę i pozwala swobodnie nosić ulubione obuwie.",
        <br></br>,
        <br></br>,
        " Regularna pielęgnacja poprawia estetykę stóp, dając Ci pewność siebie w każdej sytuacji.",
        <br></br>,
        <br></br>,
        " Profesjonalne pedicure pielęgnacyjne i podologiczne to inwestycja w zdrowie, która zmniejsza ryzyko poważnych problemów w przyszłości. Dzięki indywidualnemu podejściu zabiegi są dostosowane do potrzeb Twoich stóp. Piękne i zadbane stopy sprawią, że każdy krok stanie się przyjemnością.",
      ],
    },
    {
      id: 7,
      name: "Naturoterapia i masaż",
      description:
        "Relaksacyjne i terapeutyczne masaże, a także zabiegi naturoterapeutyczne wspierające regenerację organizmu. Wśród nich masaż Kobido, Gua Sha i techniki energetyczne przywracające równowagę ciała i umysłu.",
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
