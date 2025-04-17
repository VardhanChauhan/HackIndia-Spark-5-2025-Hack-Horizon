// src/pages/Mint.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ For routing
import '../styles/Mint.css'; // Styling file

const Mint = () => {
  const [showForm, setShowForm] = useState(false);
  const [minted, setMinted] = useState(false); // ✅ New state for mint confirmation
  const [achievement, setAchievement] = useState({
    name: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAchievement({ ...achievement, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setAchievement({ ...achievement, image: reader.result }); // ✅ Store base64
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!achievement.name || !achievement.description || !achievement.image) {
      alert("Please fill all fields!");
      return;
    }

    // ✅ Simulate storage like IPFS
    const prev = JSON.parse(localStorage.getItem('mintedAchievements')) || [];
    localStorage.setItem('mintedAchievements', JSON.stringify([...prev, achievement]));

    console.log("Achievement Data: ", achievement);
    alert("🎉 NFT Minted Successfully!");

    setAchievement({ name: '', description: '', image: null });
    setShowForm(false);
    setMinted(true); // ✅ Show 'Check Your Achievements' button
  };

  return (
    <div className="mint-page">
      <h1>Mint Your Achievement NFT</h1>
      
      {!showForm && !minted && (
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          Mint New Achievement
        </button>
      )}

      {showForm && (
        <form className="mint-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Achievement Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={achievement.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Short Description</label>
            <textarea
              id="description"
              name="description"
              value={achievement.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="image">Upload Achievement Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success">
            Mint NFT
          </button>
        </form>
      )}

      {/* ✅ Show this after minting */}
      {minted && (
        <Link to="/gallery" className="btn btn-outline check-link">
          Check Your Achievements
        </Link>
      )}
    </div>
  );
};

export default Mint;
