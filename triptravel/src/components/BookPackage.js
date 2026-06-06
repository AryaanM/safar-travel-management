import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookPackage.css';

const BookPackage = () => {
  const { state } = useLocation();
  const { selectedPackage } = state || {};
  const [bookingMessage, setBookingMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  if (!selectedPackage) {
    return <div>No package selected!</div>;
  }

  const handleBooking = () => {
    setBookingMessage(`Booking Completed for ${selectedPackage.name} 🎉`);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000); // Show for 5 seconds
  };

  const handlePopupClose = () => {
    setShowPopup(false); // Close popup when user clicks OK
  };

  return (
    <div className="book-package-container">
      <div className="booking-card">
        <h2>Confirm Your Booking</h2>
        <h3>{selectedPackage.name}</h3>
        <p>{selectedPackage.details}</p>
        <p>Price: Rs.{selectedPackage.price}/-</p>

        <button onClick={handleBooking} className="confirm-booking-button">
          Confirm Booking
        </button>
      </div>

      {/* Enhanced Popup message with Green Background, Kind Gesture, and Gratitude */}
      {showPopup && (
        <div className="booking-popup">
          <div className="popup-content">
            <div className="popup-message">
              {bookingMessage} <span role="img" aria-label="thumbs-up">👍</span>
            </div>
            <p className="gratitude-message">Thank you for choosing us! 💚</p>
            <button className="popup-close-button" onClick={handlePopupClose}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookPackage;
