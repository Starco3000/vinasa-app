import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactPages from "./pages/ContactPage/ContactPages";
import FAQ from "./pages/FAQPages/FAQPages";
import News from "./pages/News/News";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <Routes>
        <Route path="/" element={<ContactPages />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/new" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
