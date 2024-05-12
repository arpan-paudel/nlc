import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import PracticeAreas from './Pages/PracticeAreas';
import Consultation from './Pages/Consultation';
import PageNotFound from './Pages/404page';
import Navbar from './component/navbar';
import Footer from './component/footer';
import { useLocation } from 'react-router-dom';
function App() {
  function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
  return (
    <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs/> }/>
          <Route path="/practiceareas" element={<PracticeAreas/> } />
          <Route path="/contactus" element={<ContactUs/> }/>
          <Route path='/consultation' element={<Consultation/> } />
          <Route path="*" element={<PageNotFound/> } />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
