import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import Footer from './components/pages/Footer';
import Servise from './components/pages/Servise';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='one' element={<About/>}></Route>
      <Route path='/two' element={<Servise/>}></Route>
      <Route path='/four' element={<Footer/>}></Route>
      <Route path='/three' element={<Portfolio/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
