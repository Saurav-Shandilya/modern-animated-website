
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import OurServices from './OurServices';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';


export default function App() {
  return (
    <main>
       <Navbar />
       <HeroSection/>
       <OurServices/>
       <AboutUs/>
       <ContactUs/>
       <Footer/>
    </main>
  );
}
