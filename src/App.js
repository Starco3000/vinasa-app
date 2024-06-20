import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProjectOrder from './pages/ProjectOrder';
import ContactPages from './pages/ContactPage/ContactPages';
import FAQPages from './pages/FAQPages/FAQPages';
import Participating from './pages/Donvithamgia/Donvithamgia';
import Gioithieuchung from './pages/Gioithieuchung/Gioithieuchung';
import News from './pages/News/News';
import Hoatdong from './pages/Hoatdong/Hoatdong';
import Branch from './pages/Branch';
import Benefits from './pages/Benefits';
import EvaluationCriteria from './pages/EvaluationCriteria/EvaluationCriteria';
import Judges from './pages/Judges/Judges';
import Nomination from './pages/Nominations/Nominations';
import PrizePage from './pages/Prize';
import RegistrationStep from './pages/RegistrationStep/RegistrationStep';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/participating" element={<Participating />} />
          <Route path="/introductionevent" element={<Gioithieuchung />} />
          <Route path="/faq" element={<FAQPages />} />
          <Route path="/contactus" element={<ContactPages />} />
          <Route path="/projectorder" element={<ProjectOrder />} />
          <Route path="/news" element={<News />} />
          <Route path="/hoatdong" element={<Hoatdong />} />
          <Route path="/fieldofcompetition" element={<Branch />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/evaluationcriteria" element={<EvaluationCriteria />} />
          <Route path="/judges" element={<Judges />} />
          <Route path="/nominationlist" element={<Nomination />} />
          <Route path="/prizestructure" element={<PrizePage />} />
          <Route path="/registrationprocess" element={<RegistrationStep />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
