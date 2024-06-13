import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Detailed from './pages/Detailed';
import List from './pages/List';
import Home from './pages/Home';
import { useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from 'aos';



function App() {
  useEffect(() => {
    AOS.init({
      offset:100,
      duration:900,
      easing: "ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>} />
           <Route path='/detail' element={<Detailed/>} />
           <Route path='/list' element={<List/>} />

        </Route>
      </Routes>
     </BrowserRouter>      
    </>
  );
}

export default App;
