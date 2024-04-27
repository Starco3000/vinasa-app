import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
// import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Gioithieu from './pages/Gioithieu';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gioithieu" element={<Gioithieu />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
