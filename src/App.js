import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import ProjectOrder from './pages/ProjectOrder';
import ContactPages from './pages/ContactPage/ContactPages';
import FAQPages from './pages/FAQPages/FAQPages';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/faq" element={<FAQPages />} />
          <Route path="/contact" element={<ContactPages />} />
          <Route path="/projectorder" element={<ProjectOrder />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
