import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Mint from './pages/Mint';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import Signup from './pages/SignUp';

// 👇 Import the WalletProvider
import WalletProvider from './context/WalletContext';

function App() {
  return (
    // 👇 Wrap everything inside WalletProvider
    <WalletProvider>
      <Router>
        <Routes>
          {/* Pages with Navbar (inside Layout) */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mint" element={<Mint />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>

          {/* Pages without Navbar */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </WalletProvider>
  );
}

export default App;
