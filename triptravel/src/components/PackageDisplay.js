// src/components/PackageDisplay.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PackageDisplay.css';

const locations = [
    {
      name: 'Uttar Pradesh',
      packages: [
        {
          id: 1,
          name: 'Diamond Package',
          price: 60000,
          details: 'Ultimate luxury experience with private villas, guided tours, and 5-star services.',
        },
        {
          id: 2,
          name: 'Gold Package',
          price: 42000,
          details: 'Premium package with comfortable stays, meals, and sightseeing tours.',
        },
        {
          id: 3,
          name: 'Silver Package',
          price: 25000,
          details: 'Affordable yet comfortable stay with basic amenities and guided city tours.',
        },
      ],
    },
    {
      name: 'Tamil Nadu',
      packages: [
        {
          id: 1,
          name: 'Diamond Package',
          price: 70000,
          details: 'High-end resorts, scenic views, and cultural tours.',
        },
        {
          id: 2,
          name: 'Gold Package',
          price: 58000,
          details: 'Well-balanced package with beautiful resorts and sightseeing.',
        },
        {
          id: 3,
          name: 'Silver Package',
          price: 35000,
          details: 'Great value with basic amenities and guided tours.',
        },
      ],
    },
    {
      name: 'Goa',
      packages: [
        {
          id: 1,
          name: 'Diamond Package',
          price: 65000,
          details: 'Private beaches, luxury villas, and exclusive guided experiences.',
        },
        {
          id: 2,
          name: 'Gold Package',
          price: 49000,
          details: 'Comfortable beach resorts with local sightseeing.',
        },
        {
          id: 3,
          name: 'Silver Package',
          price: 26000,
          details: 'Affordable stays with beach access and city tours.',
        },
      ],
    },
    {
      name: 'Kerela',
      packages: [
        {
          id: 1,
          name: 'Diamond Package',
          price: 81000,
          details: 'Exclusive backwater resorts, Ayurvedic experiences, and guided tours.',
        },
        {
          id: 2,
          name: 'Gold Package',
          price: 75000,
          details: 'Premium resorts, scenic houseboats, and cultural experiences.',
        },
        {
          id: 3,
          name: 'Silver Package',
          price: 45000,
          details: 'Affordable resorts, natural beauty, and sightseeing.',
        },
      ],
    },
    {
      name: 'Kashmir',
      packages: [
        {
          id: 1,
          name: 'Diamond Package',
          price: 75000,
          details: 'Exclusive mountain resorts, luxury experiences, and scenic tours.',
        },
        {
          id: 2,
          name: 'Gold Package',
          price: 58500,
          details: 'Comfortable resorts with views of the mountains and city tours.',
        },
        {
          id: 3,
          name: 'Silver Package',
          price: 35500,
          details: 'Budget-friendly with a great view of the mountains and local sightseeing.',
        },
      ],
    },
  ];

const PackageDisplay = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleLocationChange = (event) => {
    const locationName = event.target.value;
    setSelectedLocation(locations.find(loc => loc.name === locationName));
    setSelectedPackage(null); // Reset selected package when location changes
  };

  const handlePackageSelection = (pkg) => {
    setSelectedPackage(pkg);
  };

  return (
    <div className="package-display-container">
      <h1>Select Your Location and Package</h1>

      {/* Location Dropdown */}
      <div className="location-selection">
        <select onChange={handleLocationChange} value={selectedLocation?.name || ''}>
          <option value="">Select Location</option>
          {locations.map((location) => (
            <option key={location.name} value={location.name}>{location.name}</option>
          ))}
        </select>
      </div>

      {/* If a location is selected, show the packages */}
      {selectedLocation && (
        <div className="package-cards">
          {selectedLocation.packages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <h3>{pkg.name}</h3>
              <p>{pkg.details}</p>
              <p>Price: Rs.{pkg.price}/-</p>
              <button onClick={() => handlePackageSelection(pkg)} className="book-button">
                Select Package
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Display booking details if a package is selected */}
      {selectedPackage && (
        <div className="booking-summary">
          <h2>Selected Package: {selectedPackage.name}</h2>
          <p>{selectedPackage.details}</p>
          <p>Price: Rs.{selectedPackage.price}/-</p>
          <Link 
            to={`/book-package`} 
            state={{ selectedPackage }} 
            className="book-now-button">
            Proceed to Book
          </Link>
        </div>
      )}
    </div>
  );
};

export default PackageDisplay;
