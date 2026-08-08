import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DataDeletion from './pages/DataDeletion';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
