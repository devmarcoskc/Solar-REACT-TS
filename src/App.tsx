import HeaderNav from './Components/NavBar';
import Home from './PagesAreas/Home';
import Benefits from './PagesAreas/Benefits';
import './App.css';
import { useEffect, useState } from 'react';
import { SelectedPage } from './Types/types';
import AboutUs from './PagesAreas/AboutUs';
import AboutUsTextArea from './PagesAreas/AboutUsText';
import HowWeDo from './PagesAreas/HowWeDo';
import SolarPanels from './PagesAreas/SolarPanels';
import Simulation from './PagesAreas/Simulation';
import ContactUs from './PagesAreas/ContactUs';
import Footer from './PagesAreas/Footer';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isPageOnTop, setIsPageOnTop] = useState<boolean>(true);

  
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsPageOnTop(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        if(window.scrollY !== 0) setIsPageOnTop(false); 
      }
      
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
       <HeaderNav
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isTopOfPage={isPageOnTop}
       />
       <Home setSelectedPage={setSelectedPage}/>
       <Benefits setSelectedPage={setSelectedPage}/>
       <AboutUs setSelectedPage={setSelectedPage}/>
       <AboutUsTextArea setSelectedPage={setSelectedPage}/>
       <HowWeDo setSelectedPage={setSelectedPage}/>
       <SolarPanels setSelectedPage={setSelectedPage}/>
       <Simulation setSelectedPage={setSelectedPage}/>
       <ContactUs setSelectedPage={setSelectedPage}/>
       <Footer/>
    </div>
  )
}

export default App
