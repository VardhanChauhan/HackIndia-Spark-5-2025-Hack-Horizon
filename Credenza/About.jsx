import React from 'react';
import '../styles/About.css';

const teamMembers = [
  { name: 'Vardhan Singh Chauhan', image: '#', github: '#', linkedin: '#', twitter: '#' },
  { name: 'Saurav Kumar Yadav', image: '#', github: '#', linkedin: '#', twitter: '#' },
  { name: 'Vansh Garg', image: '#', github: '#', linkedin: '#', twitter: '#' },
  { name: 'Saksham Verma', image: '#', github: '#', linkedin: '#', twitter: '#' },
];

const About = () => {
  return (
    <div className="about-page">

      <div className="about-hero animate-fade-in">
        <h1 className="animated-heading">About Us</h1>
        <p>Our platform leverages blockchain to ensure your academic achievements are secure, tamper-proof, and easily shareable.</p>
        <p>We believe education should be recognized and celebrated using modern, decentralized tools that empower learners everywhere.</p>
      </div>

      <div className="about-content animate-fade-in">
        <h2>Our Mission</h2>
        <p>We aim to leverage blockchain technology to secure academic credentials using NFTs, ensuring authenticity and transparency.</p>

        <h2>Our Vision</h2>
        <p>Empowering students with digital certificates that are immutable, verifiable, and globally accessible.</p>
      </div>

      <div className="timeline-section animate-fade-in">
        <h2>How It Works</h2>
        <div className="timeline">
          <div className="timeline-step">1. Connect Wallet</div>
          <div className="timeline-step">2. Upload Credentials</div>
          <div className="timeline-step">3. Mint as NFT</div>
          <div className="timeline-step">4. Share & Showcase</div>
        </div>
      </div>

      <div className="team-section animate-fade-in">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member-card" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;