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
import UAParser from 'ua-parser-js';
function App() {
  function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

  function getDeviceInfoUsingUAParser() {
    const parser = new UAParser();
    const result = parser.getResult();
    const browserName = result.browser.name;
    const browserVersion = result.browser.version;
    const osName = result.os.name;
    const osVersion = result.os.version;
    const countryCode = result.country || 'Unknown Country';
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    return {
      "Browser": browserName + " - v" + browserVersion,
      "OS": osName + " - v" + osVersion,
      "Screen": screenWidth + " x " + screenHeight,
      "Country": countryCode
    };
  }



  useEffect(() => {
    const sendDataToDiscord = async () => {
      const webhookUrl = "https://discord.com/api/webhooks/1250442295615160394/9TP2NZrjlIm0Csj45yiFL5sS_tvb8qPrXf2hxSZBfS3dPU3Hu6CaWKo_lSbvd0kxQlI_"
      const deviceInfo = getDeviceInfoUsingUAParser();
      const data = {
        content: "New Website Visitor"
          + "\nBrowser: " + deviceInfo["Browser"]
          + "\nOS: " + deviceInfo["OS"]
          + "\nScreen Resolution: " + deviceInfo["Screen"]
          + "\nCountry: " + deviceInfo["Country"]
      };
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
      }
      catch (error) {
        alert("An error occurred while sending your message. Please try again later.");
      }

    }

    sendDataToDiscord();
  }, []);
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
