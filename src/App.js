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
      {/* <Navbar /> */}
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/participating" element={<Participating />} />
          <Route path="/gioithieuchung" element={<Gioithieuchung />} />
          <Route path="/faq" element={<FAQPages />} />
          <Route path="/contact" element={<ContactPages />} />
          <Route path="/projectorder" element={<ProjectOrder />} />
          <Route path="/new" element={<News />} />
          <Route path="/Hoatdong" element={<Hoatdong />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/evaluationcriteria" element={<EvaluationCriteria />} />
          <Route path="/judges" element={<Judges />} />
          <Route path="/nominations" element={<Nomination />} />
          <Route path="/prize" element={<PrizePage />} />
          <Route path="/registrationstep" element={<RegistrationStep />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
