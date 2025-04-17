// src/components/Layout.jsx
import { Outlet, NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // Make sure this path is correct

const Layout = () => {
  const toggleMobileNav = () => {
    const nav = document.getElementById('mobileNav');
    nav.classList.toggle('active');
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
           
          Credenza
        </div>

        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
          <NavLink to="/mint" className={({ isActive }) => isActive ? 'active' : ''}>
            Mint NFTs
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>
            Gallery
          </NavLink>
        </div>

        <div className="auth-buttons">
          <NavLink to="/login">
            <button className="btn btn-outline">Log In</button>
          </NavLink>
          <NavLink to="/signup">
            <button className="btn btn-primary">Sign Up</button>
          </NavLink>
        </div>

        <div className="hamburger" onClick={toggleMobileNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className="mobile-nav" id="mobileNav">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          About
        </NavLink>
        <NavLink to="/mint" className={({ isActive }) => isActive ? 'active' : ''}>
          Mint NFTs
        </NavLink>
        <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>
          Gallery
        </NavLink>
        <div className="mobile-auth">
          <NavLink to="/login">
            <button className="btn btn-outline">Log In</button>
          </NavLink>
          <NavLink to="/signup">
            <button className="btn btn-primary">Sign Up</button>
          </NavLink>
        </div>
      </div>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
