import React, { useState } from 'react'
import {smallRight} from 'react-icons-kit/entypo/smallRight';
import {smallDown} from 'react-icons-kit/entypo/smallDown';
import { Icon } from 'react-icons-kit';

const Services = () => {
  const [servicesList, setServicesList] = useState([
    {
      id: 1,
      name: 'Zabieg nawilżający',
      description: 'Dwuetapowe oczyszczanie skóry twarzy, peeling kawitacyjny lub enzymatyczny, masaż z wykorzystaniem produktów nawilżających, stabilizująca maska algowa',
    },
    {
      id: 2,
      name: 'Zabieg rewitalizujący',
      description: 'Dwuetapowe oczyszczanie skóry twarzy, peeling kawitacyjny/enzymatyczny, masaż relaksacyjny z wykorzystaniem produktów rewitalizacyjnych, stabilizująca maska algowa',
    },
    {
      id: 3,
      name: 'Zabieg liftujący',
      description: 'Dwuetapowe oczyszczanie skóry twarzy ,peeling kawitacyjny/Combo Peptide, masaż liftingujący, stabilizująca maska algowa',
    },
    {
      id: 4,
      name: 'Akupunktura kosmetyczna',
      description: 'Natutalny sposób na zatrzymanie młodości. Efekt rewitalizacji, rozjaśnienie i poprawa ukrwienia skóry/można połączyć z innymi zabiegami',
    },
    {
      id: 5,
      name: 'Mikropunktura',
      description: ' *czekam na opis* ',
    },
    {
      id: 7,
      name: 'Mezotewrapia mikroigłowa',
      description: 'Bezpieczny zabieg niechirurgicznej rewitalizacji skóry, Stymuluje naturalny proces odnowy, poprawia jędrność, koloryt i tworzenie nowych naczyń włosowatych. Zabieg można łączyć z innymi zabiegami',
    },
    {
      id: 8,
      name: 'Mezoterapia igłowa',
      description: 'zabieg wykonywany preparatami odpowiednimi do potrzeb skóry. Produkty są certyfikowane. Zabieg może być wykonywany na twarzy, szyi, dekolcie i skórze głowy. Gwarantujemy najwyższą dokładność wykonania. Przykładowe koktajle to : RevitaCare /cytocare/      Fillmed /Filorga/  Venoma.   Dr Cyj i inne',
    },
    {
        id: 9,
        name: 'Osocze bogatopłytkowe i fibryna "wampirzy lifting"',
        description: 'Zabieg poprawia witalność i jędrność skóry, redukuje blizny i przebarwienia. Odżywia i wzmacnia skórę . Ma też korzystny wpływ na skórę głowy . Ogranicza wypadanie włosów. Zabieg wykonywany jest w zespole z osobą uprawnioną',
    },
    {
        id: 10,
        name: 'Stymulatory Tkankowe',
        description: 'Najnowsze zabiegi poprawiające wygląd skóry. Opóżniające proces starzenia, Preparaty pobudzają produkcję kolagenu i elastyny. Dodają skórze świeżości i promienności. Posiadają silne działanie napinające Redukują Przebarwienia. Dają lekki efekt wypełnienia. Działają intensywne właściwości odbudowujące. Gwarantujemy preparaty tylko sprawdzone z odpowiednimi certyfikatami .Preparat dobierany jest indywidualnie do potrzeb skóry. Wysoka precyzja wykonania. Przykładowe produkty to: Jalupro, MonoDerm Fillagen, Sisthaema, Phormae, Venome, Karisma, Ejal 40, Nucleofill, Vitaran.',
    },
    {
        id: 11,
        name: 'Mezoterapia hybrydowa',
        description: ' *czekam na opis* ',
    },
    {
      id: 12,
      name: 'Masaże ',
      description: 'Zabiegi wykonywane na produktach Marki MENARD. Kobido - tradycyjny masaż dalekowschodni tkanek głębokich, powięzi mięśni i skóry. Silnie liftingujące działanie. poprawia ukrwienie, odprężą ,usprawnia przepływy naczyniowe, relaksuje, poprawia koloryt skóry. Gua Sha - Zabieg dla wymagających wykonywany kamieniami jadeitowymi/kwarcowymi/ W zależności od potrzeb energetycznych klienta. Pobudza , drenuje, dotlenia, uruchamia proces detoksykacji , rozluźnia, Kamienie jednorazowe',
    },
    {
      id: 13,
      name: 'Pedicure leczniczy',
      description: 'Wykonany przy użyciu ostrzy i frezarki. Obejmuje korektę paznokci, opracowanie zrogowaceń , pękniętych pięt, usunięcie odcisków i modzeli',
    }
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
    <div className='services'>
      {servicesList.map((service) => (
        <div key={service.id} className="toggle-list-element" onClick={() => toggleService(service.id)}>
          <div className="up">
            <h2 className='toggle-list-title'>
            {selectedService === service.id ? <Icon size={25} icon={smallDown}></Icon> : <Icon size={25} icon={smallRight}></Icon>} {service.name} 
          </h2>
          </div>
          {selectedService === service.id && (
            <p className='toggle-list-description'>{service.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Services;
