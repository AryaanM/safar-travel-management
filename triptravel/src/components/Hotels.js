import React, { useState, useEffect } from 'react';
import './Hotels.css'; 

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your real Express backend
    const fetchHotels = async () => {
      try {
        const response = await fetch('http://localhost:5000/hotels');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHotels(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch hotels:", error);
        setError("Could not load hotels from the database.");
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) return <div className="hotels-container"><p>Loading hotels from database...</p></div>;
  if (error) return <div className="hotels-container"><p>{error}</p></div>;

  return (
    <div className="hotels-container">
      <h1>Explore Our Hotels</h1>
      <div className="hotels-grid">
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              {/* Note: Ensure your database has an 'image' column with URLs! */}
              <img src={hotel.image} alt={hotel.name} className="hotel-image" />
              <h2>{hotel.name}</h2>
              <p>{hotel.address}</p>
              <p>Price per night: <strong>Rs.{hotel.price}/-</strong></p>
            </div>
          ))
        ) : (
          <p>No hotels found in the database.</p>
        )}
      </div>
    </div>
  );
};

export default Hotels;