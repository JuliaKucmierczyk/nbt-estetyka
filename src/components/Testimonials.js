import { quotesLeft } from "react-icons-kit/icomoon/quotesLeft";
import Icon from "react-icons-kit";

const Testimonials = () => {
  return (
    <section className="testimonial-container">
      <header className="section-heading">
        <h1>Co mówią o nas klienci</h1>
      </header>
      <article className="testimonials">
        <TestimonialItem
          name="Anna Wielgus-Basta"
          job="Kosmetolog - szkoleniowiec"
          quote="Nela, jako: fachowiec, kosmetolog, szkoleniowiec pracuje na najwyższym poziomie.
                Śmiem twierdzić że uzyskała taki profesjonalizm jaki sama chciałabym mieć. Ogromna wiedza merytoryczna i praktyczna. Przejrzystość wypowiedzi, opanowanie, rzetelność, komunikatywność i dostępność. Nie ma pytań bez odpowiedzi. Cierpliwość i bardzo dokładne przystosowanie się do potrzeb klienta. Osobiście darzę ogromną sympatią i szacunkiem Panią Nelę i bardzo sobie cenię sposób w jaki pracuje i jak zaraża wiedzą. Na szkoleniach jest atmosfera sprzyjająca przyswojeniu wiedzy i umiejętności"
        />
        <TestimonialItem
          name="Agnieszka Figalska"
          job="Coach - Trener-Nauczyciel"
          quote="Nela, to wspaniały człowiek, wysokiej klasy specjalista i mistrzyni w swoim fachu. Podchodzi do klienta całościowo, ma ogromna wiedze a przy tym i pasję do wykonywania swojego zawodu. Czujesz się przy niej jak przy czytaniu książki - im dłużej ją czytasz tym bardziej jest dla ciebie interesująca. Nie bez powodu jest szkoleniowcem. Wszechstronna wiedza i wspaniałe ręce powodują że czujesz się bezpiecznie podczas wykonywanych przez Nelę zabiegów. Doświadczenie, umiejętności, wczucie się w potrzeby są bezcenne kiedy człowiek sam nie wie od czego zacząć i na co się zdecydować w szerokiej oferci.
          Gorąco polecam usługi Neli"
        />
        <TestimonialItem
          name="Gabriela Górny"
          job="Klient"
          quote="Spotkałam kobietę niezwykłą: wulkan pomysłów i nowych rozwiązań w kosmetyce, ocean pogodności i uważności. Każdy zabieg u Neli zmienia się w ciekawą pełną inspiracji rozmowę. Często potem myślę czy w innym gabinecie czułabym się fajnie....Chyba nie"
        />
      </article>
    </section>
  );
};

const TestimonialItem = (props) => {
  return (
    <div className="testimonial-item">
      <div className="inner-content">
        <Icon icon={quotesLeft} size={30}></Icon>
        <h1>{props.name}</h1>
        <h2>{props.job}</h2>
        <p>{props.quote}</p>
      </div>
    </div>
  );
};

export default Testimonials;
