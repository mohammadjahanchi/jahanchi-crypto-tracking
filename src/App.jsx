
import './App.css';
import FooterComponent from './componnents/ui/Footer.component';
import NavbarComponent from './componnents/ui/Navbar.component';

function App() {
  return (
    <div>
       {/* Navbar */}
       <NavbarComponent></NavbarComponent>

     {/* wrapper  */}
     <div className='wrapper'>
      <h2>wrapper</h2>
     </div>

      {/* Footer  */}
      <FooterComponent></FooterComponent>
    </div>
   
  );
}

export default App;
