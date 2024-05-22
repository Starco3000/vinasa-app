import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Participating from "./pages/Donvithamgia/Donvithamgia";
import Gioithieuchung from "./pages/Gioithieuchung/Gioithieuchung";
import Hoatdong from "./pages/Hoatdong/Hoatdong";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <Routes>
        <Route path="/participating" element={<Participating />} />
        <Route path="/gioithieuchung" element={<Gioithieuchung />} />
        <Route path="/Hoatdong" element={<Hoatdong />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
