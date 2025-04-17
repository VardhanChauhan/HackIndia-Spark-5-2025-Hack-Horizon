// src/pages/Home.jsx
import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';


const Home = () => {
    const { connectWallet }=useWallet();
    const handleGetStarted = async () => {
        try {
            await connectWallet();
        } catch (error) {
            console.error('Error connecting wallet:', error);
        }
    };
    const toggleMobileNav = () => {
        const nav = document.getElementById('mobileNav');
        nav.classList.toggle('mobile-nav-active');
    };

    return (
        <>
            {/* Hero */}
            <section className="hero animate-fade-in">
                <h1>Academic Achievements as NFTs</h1>
                <p>
                    Transform your academic accomplishments into verifiable digital assets on the blockchain.
                    Showcase your learning journey and build a digital portfolio that lasts forever.
                </p>
                <button className="btn btn-primary" onClick={handleGetStarted}>Get Started</button>
            </section>

            {/* Features */}
            <section className="features animate-fade-in">
                <div className="feature-card">
                    <div className="feature-icon">🏆</div>
                    <h3>Certify Achievements</h3>
                    <p>
                        Convert your degrees, certificates, and academic milestones into verified NFTs that can't be forged or altered.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">🔗</div>
                    <h3>Blockchain Verified</h3>
                    <p>
                        Every credential is securely stored on the blockchain, ensuring permanent proof of your academic journey.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="cta animate-fade-in">
                <h2>Ready to Tokenize Your Academic Achievements?</h2>
                <p>
                    Join thousands of students, researchers, and educators who are revolutionizing how we certify and share in this digital age.
                </p>
                <Link to="/mint">
                <button className="btn btn-primary">Mint Your First NFT</button>
                </Link>
            </section>

            {/* Footer */}
            <footer>
                <div className="logo">Credenza</div>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Contact Us</a>
                </div>
            </footer>
        </>
    );
};

export default Home;
