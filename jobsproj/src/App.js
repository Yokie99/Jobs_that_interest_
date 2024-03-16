import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoogleComponent from './Components/GoogleComponent';
import CiscoComponent from './Components/CiscoComponent';
import CrunchyrollComponent from './Components/CrunchyrollComponent';
import HondaComponent from './Components/HondaComponent';
import IntelComponent from './Components/IntelComponent';
import NavbarComponent from './Components/NavbarComponet';

function App() {
  return (
    <BrowserRouter>
    <NavbarComponent/>
    <Routes>

      <Route path='/' element={<GoogleComponent/>}/>
      <Route path='Cisco' element={<CiscoComponent/>}/>
      <Route path='Crunchyroll' element={<CrunchyrollComponent/>}/>
      <Route path='Honda' element={<HondaComponent/>}/>
      <Route path='Intel' element={<IntelComponent/>}/>

      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
