import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import travelImg from "../assets/service2.jpg";
import Footer from "../components/Footer";
import Trip from "../components/trip";
import ServiceTrip from "../components/ServiceTrip";


function Service () {
    return (
        <>
        <Navbar/>
         <Hero
         cName="hero-mid"
         heroImg={travelImg}
         title="Service"
         btnClass="hide"
         />
         <Trip/>
         <ServiceTrip />
         <Footer/>
        </>
    )


}

export default Service;