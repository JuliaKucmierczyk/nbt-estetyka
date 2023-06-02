import me from "../images/nela.jpg";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="about-wraper">
      <picture className="photo">
        <img src={me} alt="My photo" loading="lazy" />
      </picture>
      <div className="about">
        <h1>Nela Tyszkiewicz</h1>
        <p>
          Branża kosmetyczna zmienia się właściwie z miesiąca na miesiąc. Na
          rynku pojawiają się kolejne propozycje, by zatrzymać proces starzenia
          skóry. Gdy ja zaczynałam pracę w zawodzie, miałam do dyspozycji raptem
          kilka metod dbania o wygląd. Dzisiaj sama szkolę i używam przynajmniej
          kilkunastu. Bo współczesna kosmetolog jest nie tylko kimś, kto potrafi
          wykonać nawet najbardziej skomplikowany zabieg, ale też kimś, kto
          potrafi prowadzić klientkę mądrze i skutecznie planując pielęgnacje
          jej skóry nawet kilka miesięcy z wyprzedzeniem. Dlatego tak wielką
          wagę przywiązuje do tego, by dokładnie wytłumaczyć klientce, po co
          wykonuję dany zabieg i jakie będzie miał długoterminowe skutki.
          <br></br>
          <br></br>
          Współczesna kobieta potrzebuje przede wszystkim zaufania do swojego
          kosmetologa. Oddać się w nasze ręce z wiarą, że to, co robimy ma sens
          i że warto w to inwestować. Przy takiej ilości ofert, wiele pań czuje
          się zagubionych i skaczę z zabiegu na zabieg. Albo ślepo naśladują
          twarze pokazywane w mediach społecznościowych. To nie moje myślenie.
          Ja patrzę na kobietę, słucham jej historii i stylu życia i przekonuję
          do podjęcia odpowiednich kroków. Czasem złuszczamy. Czasem nawilżamy.
          Czasem ujędrniamy. Najważniejsze, by kolejne kroki wynikały jeden z
          drugiego. Innymi słowy, by dbanie miało sens.
          <br></br>
          <br></br>
          Jestem szkoleniowcem, nauczycielem I wykładowcą. Szkolę z całej gamy
          zabiegów. Uczę procedur zabiegowych z wykorzystaniem: chemicznych
          peelingów, mezoterapii igłowej i mikroigłowej, stymulatorów
          tkankowych, masaży liftingujących w tym KOBIDO oraz tworzenia
          holistycznych procedur zabiegowych. Równocześnie całą wiedzą posługuję
          się w pracuję jako kosmetolog. Każda osoba odwiedzająca mój gabinet
          może mieć pewność że osiągnie optymalne korzyści z zabiegów i terapii
          tu wykonywanych. <br></br>
          <br></br>Serdecznie zapraszam - Nela Tyszkiewicz
        </p>
      </div>
      <Footer />
    </div>
  );
}
