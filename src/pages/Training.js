import Footer from "../components/Footer";

export default function Training() {
    return (
        <div className="wrap-training">
            <div className="training-starter component">
                <div className="content-container boxx">
                    <h1>Szkolenia</h1>
                    <p> Klinika NBT-Estetyka oferuje różnorodne szkolenia w dziedzinie kosmetologii i medycyny estetycznej, które pozwalają uczestnikom rozwijać swoje umiejętności i pogłębiać swoją wiedzę. W ramach tych szkoleń, eksperci kliniki dzielą się swoją wiedzą i doświadczeniem w dziedzinach takich jak podologia, kosmetologia estetyczna, oprawa oczu, masaże oraz szkolenia ekspertskie. Co więcej, klinika NBT-Estetyka oferuje dostosowane do indywidualnych potrzeb szkolenia, które mogą być dostarczone w dowolnej konfiguracji, zapewniając tym samym jak najlepsze doświadczenie szkoleniowe dla każdego uczestnika.</p>
                </div>
                <div className="image-container boxx">
                    <img src="https://images.unsplash.com/photo-1531538512164-e6c51ea63d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="szkolenie" />
                </div>
            </div>
            <div className="training-contener">
                <div className="course-element1 ele">
                    <h2>Podologia</h2>
                    <ul>
                        <li>Wykorzystanie: skalpela, dłuta, hebla, kapturków i pododysków w pracy podologa</li>
                        <li>Korekta wrastających paznokci : klamra tytanowa, tamponada i inne metody korekty</li>
                        <li>Usuwanie odcisków i modzeli mechaniczne ,chemiczne zapobieganie powstaniu</li>
                        <li>Choroby i defekty stóp i paznokci </li>
                        <li>Pękające pięty</li>
                        <li>Stopa cukrzycowa</li>
                    </ul>
                </div>
                <div className="course-element2 ele">
                    <h2>Kosmetologia estetyczna</h2>
                    <ul>
                        <li>Mezoterapia igłowa i mikroigłowa jako metody stymulacji /produkty i technika/</li>
                        <li>Zastosowanie peelingów chemicznych o różnej intensywności w zabiegach pielęgnacyjnych i anti aging/ kwasy, TCA, reinole, witamina c i inne  produkty i technika zabiegowa/</li>
                        <li>Stymulatory tkankowe/ praca igłą i kaniulą ,produkty i technika zabiegowa/</li>
                        <li>Osocze bogatopłytkowe i fibryna</li>
                    </ul>
                </div>
                <div className="course-element3 ele">
                    <h2>Oprawa oczu</h2>
                    <ul>
                        <li>Henna klasyczna, farbki, henna pudrowa, henna żelowa, geometria brwi</li>
                    </ul>
                </div>
                <div className="course-element4 ele">
                    <h2>Masaże grupy max 4 osobowe</h2>
                    <ul>
                        <li>Kobido</li>
                        <li>Masaż gorącymi kamieniami</li>
                        <li>Masaż karku i pleców</li>
                        <li>Masaż antycelulitowy</li>
                        <li>Zabiegi pielęgnacyjna na ciało</li>
                        <li>Akupunktura kosmetyczna</li>
                        <li>Masaż Gua Sha</li>
                    </ul>
                </div>
                <div className="course-element5 ele">
                    <h2>Szkolenia eksperckie</h2>
                    <ul>
                        <li>Oczyszczanie manualne w terapiach anti acne i terapii pielęgnacyjnej</li>
                        <li>Sanepid w gabinecie kosmetycznym</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}

