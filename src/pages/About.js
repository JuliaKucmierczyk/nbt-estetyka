import me from '../images/me.jpg';
import Footer from '../components/Footer';

export default function About() {
    return (
        <div className='about-wraper'>
            <div className="photo">
                <img src={me} alt="My photo" />
            </div>
            <div className="about">
                <h1>ANIELA</h1>
                <p>
                Witaj na mojej stronie poświęconej kosmetologii estetycznej! Jestem certyfikowanym specjalistą w dziedzinie medycyny estetycznej i z wielką przyjemnością pomagam ludziom poprawić swój wygląd i samopoczucie.
                <br></br><br></br> 
                Moja pasja do kosmetologii estetycznej rozpoczęła się kilka lat temu, gdy sama doświadczyłam pozytywnych efektów zabiegów medycznych. Od tego czasu stałam się entuzjastką tej dziedziny i postanowiłam rozwijać swoje umiejętności, aby móc pomagać innym w osiąganiu ich celów związanych z wyglądem.
                <br></br><br></br> 
                Moja edukacja z zakresu kosmetologii estetycznej obejmuje szeroki zakres zabiegów, w tym mezoterapię, botoks, kwas hialuronowy, peelingi medyczne i wiele innych. Jestem też doświadczoną specjalistką w dziedzinie dermatologii i wiem, jak ważne jest dokładne zrozumienie skóry i jej potrzeb, aby zapewnić najlepsze rezultaty zabiegów.
                </p>
            </div>
            <Footer/>
        </div>
    );
}