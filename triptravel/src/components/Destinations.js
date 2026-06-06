import React, { useState, useEffect } from 'react';
import './Destinations.css';

const destinations = [
  {
    id: 1,
    name: 'Agra, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    info: 'Discover the majestic Taj Mahal, a symbol of love.\nImmerse yourself in the vibrant culture and history of India\'s capital. Visit iconic landmarks like the Red Fort, Jama Masjid, and Qutub Minar.',
  },
  {
    id: 2,
    name: 'Munnar, Kerala',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
    info: 'Escape to the serene hill station of Munnar, known for its lush tea plantations and breathtaking waterfalls. Enjoy trekking, boating, and wildlife safaris.',
  },
  {
    id: 3,
    name: 'Leh Ladakh, Kashmir',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    info: 'Experience the rugged beauty of the Himalayas in Leh Ladakh. Explore ancient monasteries, trek through stunning landscapes, and witness the unique culture of the region.',
  },
  {
    id: 4,
    name: 'Madgaon, Goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    info: 'Relax on pristine beaches, indulge in delicious seafood, and experience Goa\'s vibrant nightlife. Discover historical churches, forts, and spice plantations.',
  },
  {
    id: 5,
    name: 'Ooty, Tamil Nadu',
    image: 'https://clubmahindra.gumlet.io/blog/media/section_images/shuttersto-97e21aa598c3360.jpg?w=376&dpr=2.6',
    info: 'Escape to the charming hill station of Ooty. Enjoy boating, visit botanical gardens, and explore tea plantations. Discover the diverse wildlife of the Nilgiri Hills',
  },
];

const loadingFacts = [
  'Did you know? The Great Wall of China is over 13,000 miles long.',
  'Fun Fact: The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.',
  'Did you know? Venice has over 400 bridges, making it a true water city.',
  'Fun Fact: Mount Everest grows about 4mm taller every year due to the movement of tectonic plates.',
];

const Destinations = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 25; // Increment progress by 25% every 1 second
        clearInterval(loadingInterval);
        return prev;
      });
    }, 1000); // Increment every 1 second

    const factInterval = setInterval(() => {
      setFactIndex((prevIndex) => (prevIndex + 1) % loadingFacts.length);
    }, 3000); // Change fact every 3 seconds

    // Simulate loading completion in 4 seconds
    setTimeout(() => {
      setIsLoading(false);
      clearInterval(factInterval);
    }, 4000); // Simulate 4 seconds of loading

    return () => {
      clearInterval(loadingInterval);
      clearInterval(factInterval);
    };
  }, []);

  const displayFacts = loadingFacts.slice(factIndex, factIndex + 2);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-animation">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
            <div className="jeep" style={{ left: `${progress}%` }}></div> {/* Jeep positioned based on progress */}
          </div>
          <div className="facts-container">
            {displayFacts.map((fact, index) => (
              <p key={index} className="loading-fact">{fact}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="destinations">
      <h1 className="destinations-title">Explore Our Top Destinations</h1>
      {destinations.map((destination, index) => (
        <div
          key={destination.id}
          className={`destination-section ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <img src={destination.image} alt={destination.name} className="destination-image" />
          <div className="destination-info">
            <h2 className="destination-name">{destination.name}</h2>
            <p className="destination-details">{destination.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Destinations;


