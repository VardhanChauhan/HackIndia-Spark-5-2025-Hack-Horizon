// src/pages/Gallery.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    // Fetch data from localStorage (simulate IPFS fetch here)
    const stored = JSON.parse(localStorage.getItem('mintedAchievements')) || [];
    setAchievements(stored);
  }, []);

  return (
    <div className="gallery-container">
      <h1>Your Minted Achievements</h1>
      <div className="cards-container">
        {achievements.length > 0 ? (
          achievements.map((ach, index) => (
            <div className="card" key={index}>
              <img src={ach.image} alt={ach.name} className="card-img" />
              <div className="card-content">
                <h3>{ach.name}</h3>
                <p>{ach.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No achievements minted yet.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;