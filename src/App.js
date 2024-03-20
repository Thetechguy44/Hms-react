import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Header from './components/Header';
import Footer from './components/Footer';
import Department from './pages/Department';
import Contact from './pages/Contact';
import Department_Details from './pages/Department-details';
import Service_Details from './pages/Service-details';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Header />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/departments" element={<Department/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/department_details" element={<Department_Details/>}/>
              <Route path="/service_details" element={<Service_Details/>}/>
            </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
