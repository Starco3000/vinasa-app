import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactPages from "./pages/ContactPage/ContactPages";
import FAQ from "./pages/ContactPage/FAQ/FAQ";
// import Navbar from './components/Navbar';
// import { Routes, Route } from "react-router-dom";
// import Homepage from "./pages/Homepage";
// import Gioithieu from "./pages/Gioithieu";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <Routes>
        <Route path="/" element={<ContactPages />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
