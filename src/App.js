import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

import ProjectOrder from './pages/ProjectOrder';
import ContactPages from './pages/ContactPage/ContactPages';
import FAQPages from './pages/FAQPages/FAQPages';
import Participating from './pages/Donvithamgia/Donvithamgia';
import Gioithieuchung from './pages/Gioithieuchung/Gioithieuchung';
import News from './pages/News/News';
import Hoatdong from './pages/Hoatdong/Hoatdong';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/participating" element={<Participating />} />
          <Route path="/gioithieuchung" element={<Gioithieuchung />} />
          <Route path="/faq" element={<FAQPages />} />
          <Route path="/contact" element={<ContactPages />} />
          <Route path="/projectorder" element={<ProjectOrder />} />
          <Route path="/new" element={<News />} />
          <Route path="/Hoatdong" element={<Hoatdong />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
