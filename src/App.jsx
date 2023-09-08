
import './App.css';
import FooterComponent from './componnents/ui/Footer.component';
import NavbarComponent from './componnents/ui/Navbar.component';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/Home.page';
import FAQPage from './pages/FAQ.page';
import AboutUs from './pages/AboutUs.page';
import ContactUs from './pages/CountactUS.page';
function App() {
  return (
    <div>
       {/* Navbar */}
       <NavbarComponent></NavbarComponent>
       
     {/* wrapper  */}
     <div className='wrapper'>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
     </Routes>
     </div>

      {/* Footer  */}
      <FooterComponent></FooterComponent>
    </div>
   
  );
}

export default App;
