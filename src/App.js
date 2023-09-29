import Home from "./TravelApp/pages/Home";
import Flight from "./TravelApp/pages/Flight";
import Hotel from "./TravelApp/pages/Hotel";
import Homestay from "./TravelApp/pages/Homestay";
import Holiday from "./TravelApp/pages/Holiday";
import Trains from "./TravelApp/pages/Trains";
import Buses from "./TravelApp/pages/Buses";
import Cabs from "./TravelApp/pages/Cabs";
import Kerla from "./TravelApp/pages/packages/Kerla";
import Goa from "./TravelApp/pages/packages/Goa";
import Forex from "./TravelApp/pages/Forex";
import Giftcard from "./TravelApp/pages/Giftcard";
import PackageView1 from "./TravelApp/pages/packages/packagesview/PackageView1";
import LoginSinup from "./TravelApp/pages/LoginSinup";
import Register from "./TravelApp/pages/Register";
import Goa_Property from "./TravelApp/pages/Location_Properties/Goa_Property";
import Haridwar_Property from "./TravelApp/pages/Location_Properties/Haridwar_Property";
import Fotter from "./TravelApp/Footer/Fotter";
import { Route, Routes } from "react-router-dom";
import NavBar from "./TravelApp/Navbar/NavBar";
import Navbar2 from "./TravelApp/Navbar/Navbar2";
import "./App.css";

function App() {
   window.addEventListener('scroll',function() {
        var header=document.getElementById("navbar2");
        header.classList.toggle("sticky",window.scrollY>100)
        header.classList.toggle("none",window.scrollY<100)
  });
  return (
    <div>
      <Navbar2/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/hotels" element={<Hotel />}></Route>
        <Route path="/homestays" element={<Homestay />}></Route>
        <Route path="/trains" element={<Trains />}></Route>
        <Route path="/holidays" element={<Holiday />}></Route>
        <Route path="/buses" element={<Buses />}></Route>
        <Route path="/cabs" element={<Cabs />}></Route>
        <Route path="/forex" element={<Forex />}></Route>
        <Route path="/giftcard" element={<Giftcard />}></Route>
        <Route path="/kerala" element={<Kerla />}></Route>
        <Route path="/goa" element={<Goa />}></Route>
        <Route path="/kerla/package1" element={<PackageView1 />}></Route>
        <Route path="/loginSignup" element={<LoginSinup />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/goaproperty" element={<Goa_Property />}></Route>
        <Route path="/haridwarproperty" element={<Haridwar_Property />}></Route>
      </Routes>
      <Fotter />
    </div>
  );
}

export default App;
