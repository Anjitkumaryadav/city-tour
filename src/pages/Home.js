import React from 'react';
import Header from '../components/Header';
import CityCard from '../components/CityCard';
import Footer from '../components/Footer';

const cityData = [
  {
    name: 'Railway Museum',
    description: 'A railway museum is a museum that explores the history of all aspects of rail related transportation, including: locomotives (steam, diesel, and electric), railway cars, trams, and railway signalling equipment. They may also operate historic equipment on museum grounds.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Wikitreff_002.jpg/220px-Wikitreff_002.jpg',
  },
  {
    name: 'Ramgarh Tal lake',
    description: 'Ramgarh Tal is a lake located in Gorakhpur, Uttar Pradesh, India. In 1970, at its largest size, the lake covered an area of 723 hectares (1,790 acres) with a circumference of 18 kilometres (11 mi). Today, it covers about 678 hectares (1,680 acres)',
    imageUrl: 'https://i.timesnowhindi.com/ramgarh_taal.jpg',
  },
  {
    name: 'Gorakhnath',
    description: 'Gorakhnath Math, also known as Gorakhnath Temple or Shri Gorakhnath Mandir, is a Hindu temple of the Nath monastic order group of the Nath tradition.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gorakhnath_Mandir_in_nutshell.jpg/800px-Gorakhnath_Mandir_in_nutshell.jpg',
  },
];

function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {cityData.map((city, index, imageUrl) => (
          <CityCard key={index} city={city} imageUrl={imageUrl} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
