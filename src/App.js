import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route Path="/" index element={<Home/>}></Route>
      <Route Path="/home" element={<Home/>}></Route>
      <Route Path="/contact" element={<Contact/>}></Route>
      <Route Path="/about" element={<About/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
